import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export function useProjects() {
    const [projects, setProjects] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProjects() {
            // appelle supabase pour récupérer tous les projets
            const { data, error } = await supabase.from("projects").select("*")
            if (error) {
                console.error("Error fetching projects:", error)
            }
            
            // mets le résultat dans projects
            setProjects(data ?? [])
            // setLoading(false) à la fin
            setLoading(false)
        }
        fetchProjects()
    }, [])

    return { projects, loading }
}
