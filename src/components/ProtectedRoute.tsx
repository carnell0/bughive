import { Navigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useAuthStore } from "@/store/authStore"

function ProtectedRoute() {
    const { session, setSession } = useAuthStore()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchSession() {
            const { data } = await supabase.auth.getSession()
            setSession(data.session)
            setLoading(false)
        }
        fetchSession()
    }, [])

    if (loading) return null

    if (session) {
        return <Outlet />
    } else {
        return <Navigate to="/login" replace />
    }
}

export default ProtectedRoute
