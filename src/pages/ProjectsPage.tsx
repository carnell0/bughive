import { useProjects } from "@/features/projects/hooks/useProjects"
import { useState } from "react"
import { Link } from "react-router-dom"
import CreateProjectModal from "@/features/projects/components/CreateProjectModal"

function ProjectsPage() {
  const { projects, loading, fetchProjects } = useProjects()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">Projects</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          + New Project
        </button>
      </div>

      <div className="flex-1 overflow-auto p-6">
        {loading ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Chargement...
          </div>
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <p className="text-lg font-medium">No projects yet</p>
            <p className="text-sm mt-1">Create your first project to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Link
                to={`/projects/${project.id}/board`}
                key={project.id}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {project.name.charAt(0).toUpperCase()}
                  </div>
                </div>
                <h3 className="mt-3 font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                {project.description && (
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{project.description}</p>
                )}
                <div className="mt-4 text-xs text-gray-400">
                  Voir le board →
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <CreateProjectModal
          onClose={() => setShowModal(false)}
          onProjectCreated={fetchProjects}
        />
      )}
    </div>
  )
}

export default ProjectsPage
