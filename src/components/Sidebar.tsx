import { NavLink } from "react-router-dom";
function Sidebar() {
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
                <NavLink to="/profile" className="block px-4 py-2">
                    My Profile
                </NavLink>
            </div>
        </div>    

    )
}   
export default Sidebar;
