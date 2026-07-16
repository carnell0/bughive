import { useProjects } from "@/features/projects/hooks/useProjects";
import { useState } from "react";
import CreateProjectModal from "@/features/projects/components/CreateProjectModal";
function ProjectsPage() {
  const { projects, loading, fetchProjects } = useProjects();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="projects-page">
      <h1>Projects Page</h1>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        projects.map((project) => <div key={project.id}>{project.name}</div>)
      )}

      <div>
        {/* liste des projets */}
        <button onClick={() => setShowModal(true)}>Nouveau projet</button>
        {showModal && (
          <CreateProjectModal 
            onClose={() => setShowModal(false)}
            onProjectCreated={fetchProjects}
          />
        )}
      </div>
    </div>
  );
}
export default ProjectsPage;
