import { useState } from "react";
import { supabase } from "@/lib/supabase";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    async function handleSubmit(e: React.FormEvent) {
                    e.preventDefault();
                    if (!email || !password) {
                        setError("Erreur : Veuillez remplir tous les champs. ");
                        return;
                    } else {
                        const { error } = await supabase.auth.signInWithPassword({ email, password });
                        if (error) {
                            setError(error.message);
                        } else {
                            setError(null);
                            // Handle successful login logic here
                        }
                    }
                }
    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-white p-6 rounded shadow-md flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
                <input name="email"
                    placeholder="email"
                    className="border rounded px-3 py-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input name="password" 
                    type="password" 
                    placeholder="Password" 
                    className="border rounded px-3 py-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" 
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                    Login
                </button>
                
            </form>
        </div>

    );
}

export default LoginPage;
