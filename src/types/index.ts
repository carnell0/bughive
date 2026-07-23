export interface Project {
    id: string
    name: string
    description: string | null
    owner_id: string
    created_at: string
}

export const ticketStatuses = ["todo", "in_progress", "done"] as const
export type TicketStatus = (typeof ticketStatuses)[number]

export interface Ticket {
    id: string
    title: string
    description: string | null
    status: TicketStatus
    priority: 'low' | 'medium' | 'high'
    project_id: string
    assignee_id: string | null
    created_at: string
}
