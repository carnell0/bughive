import { useState } from "react";
import { supabase } from "@/lib/supabase";

function CreateTicketModal({
  onClose,
  onTicketCreated,
  projectId
}: {
  onClose: () => void;
  onTicketCreated: () => void;
  projectId: string;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [priority, setPriority] = useState("medium");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title) {
      setError("Veuillez remplir le nom du ticket");
      return;
    }
    const { error } = await supabase
      .from("tickets")
      .insert([{ title, description, project_id: projectId, status: "todo", priority }]);
    if (error) {
      setError(error.message);
    } else {
      onClose();
      onTicketCreated();
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white p-6 rounded shadow-md flex flex-col gap-4 w-80"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Title"
          className="border rounded px-3 py-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="border rounded px-3 py-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="border rounded px-3 py-2 w-full"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Créer le ticket
        </button>
      </form>
    </div>
  );
}

export default CreateTicketModal;
