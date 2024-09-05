import { Routes, Route } from "react-router-dom";
import Header from "../../Components/Header";
import Accueil from "../Sommet/Accueil"
import Histoire from "../Sommet/Histoire";
import Menu from "../Sommet/Menu"
import Evenement from "../Sommet/Evenement";
import Contact from "../Sommet/Contact";

const SommetGourmand = () => {
    return <>

        <Header />
        <Routes>
            <Route path={"/"} element={<Accueil />} />
            <Route path={"/histoire"} element={<Histoire />} />
            <Route path={"/menu"} element={<Menu />} />
            <Route path={"/evenement"} element={<Evenement />} />
            <Route path={"/contact"} element={<Contact />} />
        </Routes>

    </>;
}

export default SommetGourmand;