import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import ProjectPage from "@/pages/ProjectsPage";
import NotFoundPage from "@/pages/NotFoundPage";
function App() {
  return (
    <Routes>
      <Route path="/login" element={ <LoginPage/> } />
      <Route path="/projects" element={ <ProjectPage/> } />
      <Route path="*" element={ <NotFoundPage/> } />
    </Routes>
  )
}
export default App
