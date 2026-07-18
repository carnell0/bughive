import type { Ticket } from "@/types";
import { DndContext } from "@dnd-kit/core";
import KanbanColumn from "@/features/tickets/components/KanbanColumn";
import { supabase } from "@/lib/supabase";

function KanbanBoard({ tickets, onTicketMoved }: { tickets: Ticket[]; onTicketMoved: () => void }) {
  const todoTickets = tickets.filter((ticket) => ticket.status === "todo");
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "in_progress",
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === "done");

  async function handleDragEnd(event: any) {
    const { active, over } = event;
    if (!over) return;
    await supabase
      .from("tickets")
      .update({ status: over.id })
      .eq("id", active.id);
    onTicketMoved();
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4 p-4">
        <KanbanColumn id="todo" title="Todo" tickets={todoTickets} />
        <KanbanColumn id="in_progress" title="In Progress" tickets={inProgressTickets} />
        <KanbanColumn id="done" title="Done" tickets={doneTickets} />
      </div>
    </DndContext>
  );
}

export default KanbanBoard;
