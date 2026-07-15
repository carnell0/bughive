import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!email || !password) {
            setError("Veuillez remplir tous les champs")
            return
        }
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            setError(error.message)
        } else {
            navigate("/projects")
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-white p-6 rounded shadow-md flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
                <input
                    placeholder="Email"
                    className="border rounded px-3 py-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    className="border rounded px-3 py-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                    Connexion
                </button>
            </form>
        </div>
    )
}

export default LoginPage