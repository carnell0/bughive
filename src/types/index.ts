export interface Project {
    id: string
    name: string
    description: string | null
    owner_id: string
    created_at: string
}

export interface Ticket {
    id: string
    title: string
    description: string | null
    status: 'todo' | 'in_progress' | 'done'
    priority: 'low' | 'medium' | 'high'
    project_id: string
    assignee_id: string | null
    created_at: string
}
