import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useNavigate, Link } from "react-router-dom"

function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!email || !password) {
            setError("Veuillez remplir tous les champs")
            return
        }
        setLoading(true)
        setError(null)
        const { error } = await supabase.auth.signUp({ email, password })
        setLoading(false)
        if (error) {
            setError(error.message)
        } else {
            navigate("/login")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-sm">
                <div className="text-center mb-8">
                    <span className="text-2xl font-bold">
                        <span className="text-blue-600">Bug</span>
                        <span className="text-slate-900">Hive</span>
                    </span>
                    <p className="text-sm text-gray-500 mt-2">Créez votre compte</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                        <input
                            id="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1 block">Mot de passe</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Mot de passe"
                            className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                        {loading ? "Création..." : "S'inscrire"}
                    </button>
                    <p className="text-sm text-center text-gray-500">
                        Déjà un compte ? <Link to="/login" className="text-blue-600 hover:underline">Se connecter</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignupPage
