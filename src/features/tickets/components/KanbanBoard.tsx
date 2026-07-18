import type { Ticket } from "@/types";

function KanbanBoard({ tickets }: { tickets: Ticket[] }) {
  const todoTickets = tickets.filter((ticket) => ticket.status === "todo");
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "in_progress",
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === "done");

  return (
    <div className="flex gap-4 p-4">
      <div className="flex-1 bg-gray-100 rounded p-4">
        <h2 className="font-bold mb-4">Todo</h2>
        {todoTickets.map((ticket) => (
          <div key={ticket.id} className="bg-white p-3 rounded shadow mb-2">
            {ticket.title}
          </div>
        ))}
      </div>
      <div className="flex-1 bg-gray-100 rounded p-4">
        <h2 className="font-bold mb-4">In Progress</h2>
        {inProgressTickets.map((ticket) => (
          <div key={ticket.id} className="bg-white p-3 rounded shadow mb-2">
            {ticket.title}
          </div>
        ))}
      </div>
      <div className="flex-1 bg-gray-100 rounded p-4">
        <h2 className="font-bold mb-4">Done</h2>
        {doneTickets.map((ticket) => (
          <div key={ticket.id} className="bg-white p-3 rounded shadow mb-2">
            {ticket.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
