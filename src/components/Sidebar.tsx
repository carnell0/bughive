import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
function Sidebar() {
    const navigate = useNavigate()
    async function handleLogout() {
        await supabase.auth.signOut()
        navigate("/login")
    }
    return (
        <div className="flex flex-col w-64 h-screen bg-gray-800 text-white">
            <div className="logo h-16 flex items-center px-4">
                Bughive
            </div>
            <div className="flex flex-1 flex-col">
                <NavLink to="/projects" className={({ isActive }) => 
                    isActive ? "block px-4 py-2 bg-gray-700" : "block px-4 py-2"}>
                    Projects
                </NavLink>
                <NavLink to="/my-issues" className={({ isActive }) => 
                    isActive ? "block px-4 py-2 bg-gray-700" : "block px-4 py-2"}>
                    My issues
                </NavLink>
            </div>
            <div className="flex justify-between">
                <button onClick={handleLogout} className="block px-4 py-2 bg-red-600 hover:bg-red-700 w-full text-center">
                    Logout
                </button>
            </div>
        </div>    

    )
}   
export default Sidebar;
