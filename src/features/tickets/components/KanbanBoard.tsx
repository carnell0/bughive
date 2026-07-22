import { useState, useEffect } from "react";
import type { Ticket } from "@/types";
import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import KanbanColumn from "@/features/tickets/components/KanbanColumn";
import { supabase } from "@/lib/supabase";

function KanbanBoard({
  tickets: initialTickets,
  onTicketMoved,
  onTicketClick,
}: {
  tickets: Ticket[];
  onTicketMoved: () => void;
  onTicketClick: (ticket: Ticket) => void;
}) {
  const [tickets, setTickets] = useState(initialTickets);

  useEffect(() => {
    setTickets(initialTickets);
  }, [initialTickets]);

  const todoTickets = tickets.filter((ticket) => ticket.status === "todo");
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "in_progress",
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === "done");

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  async function handleDragEnd(event: any) {
    const { active, over } = event;
    if (!over) return;

    const ticketId = active.id;
    const newStatus = over.id;

    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket,
      ),
    );

    const { error } = await supabase
      .from("tickets")
      .update({ status: newStatus })
      .eq("id", ticketId);

    if (error) {
      setTickets(initialTickets);
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex gap-4 p-4 h-full overflow-x-auto">
        <KanbanColumn id="todo" title="To Do" tickets={todoTickets} onTicketClick={onTicketClick} />
        <KanbanColumn id="in_progress" title="In Progress" tickets={inProgressTickets} onTicketClick={onTicketClick} />
        <KanbanColumn id="done" title="Done" tickets={doneTickets} onTicketClick={onTicketClick} />
      </div>
    </DndContext>
  );
}

export default KanbanBoard;
