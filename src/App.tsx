import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import ProjectsPage from "@/pages/ProjectsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import Layout from "@/components/Layout";
import MyIssuesPage from "@/pages/MyIssuesPage";
function App() {
  return (
    <Routes>
      <Route element= {<Layout />}>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/my-issues" element={<MyIssuesPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />}/>
    </Routes>
    
  )
}
export default App
