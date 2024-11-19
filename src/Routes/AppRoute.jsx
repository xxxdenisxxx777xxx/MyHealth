import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import DeputatsPage from "../DeputatsPage"
import AdminPage from "../pages/admin/AdminPage"
import SecurityPage from "../pages/admin/SecurityPage"
import Note from "../pages/admin/Note"

const AppRoute = () => {

    return (
        <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/infodep/:id" element={<DeputatsPage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="admin/security" element={<SecurityPage />} />
            <Route path="admin/note" element={<Note />} />
        </Routes>
    )
}
export default AppRoute;
