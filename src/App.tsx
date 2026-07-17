import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import ProjectsPage from "@/pages/ProjectsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import Layout from "@/components/Layout";
import MyIssuesPage from "@/pages/MyIssuesPage";
import ProtectedRoute from "@/components/ProtectedRoute";
import BoardPage from "@/pages/BoardPage";
function App() {
  return (
    <Routes>
      <Route element= {<ProtectedRoute />}>
        <Route element= {<Layout />}>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/my-issues" element={<MyIssuesPage />} />
          <Route path="/projects/:id/board" element={<BoardPage />} />
        </Route>  
      </Route>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    
  )
}
export default App
