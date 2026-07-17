import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { Ticket } from "@/types";

export function useTickets(projectId: string) {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState(true);
    async function fetchTickets() {
        // appelle supabase pour récupérer tous les tickets
        const { data, error } = await supabase
            .from("tickets")
            .select("*")
            .eq("project_id", projectId );
        if (error) {
            console.error("Error fetching tickets:", error);
        }

        setTickets(data ?? []);
        setLoading(false);
    }

    useEffect(() => {
        fetchTickets();
    }, [projectId]);

    return { tickets, loading, fetchTickets };
}