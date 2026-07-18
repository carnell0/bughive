import { useDroppable } from "@dnd-kit/core";
import type { Ticket } from "@/types";
import KanbanCard from "@/features/tickets/components/KanbanCard"

function KanbanColumn({
  id,
  title,
  tickets,
}: {
  id: string;
  title: string;
  tickets: Ticket[];
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });
  return (
    <div ref={setNodeRef} className="flex-1 bg-gray-100 rounded p-4">
      <h2 className="font-bold mb-4">{title}</h2>
      {tickets.map((ticket) => (
        <KanbanCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default KanbanColumn;
