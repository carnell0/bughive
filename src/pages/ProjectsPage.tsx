import { useProjects } from "@/features/projects/hooks/useProjects"
function ProjectsPage() {
    const { projects, loading } = useProjects()
    return (
        <div className="projects-page">
            <h1>Projects Page</h1>
            {loading ? (
                <p>Loading projects...</p>
            ) : ( 
                projects.map((project) => (
                    <div key={project.id}>{project.name}</div>
                ))
            )}
        </div>
    );
}
export default ProjectsPage;
