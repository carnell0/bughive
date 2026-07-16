import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/store/authStore";

function CreateProjectModal({
  onClose,
  onProjectCreated,
}: {
  onClose: () => void;
  onProjectCreated: () => void;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuthStore();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name) {
      setError("Veuillez remplir le nom du projet");
      return;
    }
    const { error } = await supabase
      .from("projects")
      .insert([{ name, description, owner_id: session?.user.id }]);
    if (error) {
      setError(error.message);
    } else {
      onClose();
      onProjectCreated();
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white p-6 rounded shadow-md flex flex-col gap-4 w-80"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Name"
          className="border rounded px-3 py-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="border rounded px-3 py-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Créer le projet
        </button>
      </form>
    </div>
  );
}

export default CreateProjectModal;
