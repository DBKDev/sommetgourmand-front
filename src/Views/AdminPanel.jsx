import { Routes, Route } from "react-router-dom";
import DashboardEvenement from "./DashboardEvenement.jsx"
import DashboardMenu from "./DashboardMenu.jsx"
import DashboardReservation from "./DashboardReservation.jsx";
import FormulaireEvenement from "./FormulaireEvenement.jsx";
import Dashboard from "../Components/Dashboard.jsx";

const AdminPanel = () => {

    return <>

        <Dashboard />
        <Routes>
            <Route path={"/evenement"} element={<DashboardEvenement />} />
            <Route path={"/menu"} element={<DashboardMenu />} />
            <Route path={"/reservation"} element={<DashboardReservation />} />
        </Routes>
    </>;
}

export default AdminPanel;