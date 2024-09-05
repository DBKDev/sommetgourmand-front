import React, { useState } from 'react';
import "../Styles/header.css"
import { Link } from 'react-router-dom';

const Header = () => {

    const [currentPage, setCurrentPage] = useState("accueil");
    const [menuactif, setMenuactif] = useState(true);

    return (
        <>
            <div id='burgerMenu'>
                <i className='bx bx-menu burgerMenu' onClick={() => setMenuactif(true)}></i>
            </div>
            
            
                <div className={menuactif == false ? "header-block-active" : "header-block"}>

                    <Link to="/" onClick={() => {
                        setCurrentPage("accueil")
                    }} className={currentPage === "accueil" && "active"}>
                        <img src={process.env.PUBLIC_URL + `/Assets/Logo.png`} className='sb-img' />
                        
                    </Link>
                    <i class='bx bx-x croix-header' onClick={() => setMenuactif(false)}></i>
                    <Link to="/" onClick={() => {
                        setCurrentPage("accueil")
                    }} className={currentPage === "accueil" && "active"}>
                        <button className="button-accueil">accueil</button>
                    </Link>
                    <Link to="/menu" onClick={() => {
                        setCurrentPage("menu")
                    }} className={currentPage === "menu" && "active"}>
                        <button className="button-menu">Menu</button>
                    </Link>
                    <Link to="/evenement" onClick={() => {
                        setCurrentPage("evenement")
                    }} className={currentPage === "evenement" && "active"}>
                        <button className="button-evenement">évenement</button>
                    </Link>
                    <Link to="/histoire" onClick={() => {
                        setCurrentPage("histoire")
                    }} className={currentPage === "histoire" && "active"}>
                        <button className="button-histoire">histoire</button>
                    </Link>
                    <Link to="/contact" onClick={() => {
                        setCurrentPage("contact")
                    }} className={currentPage === "contact" && "active"}>
                        <button className="button-contact">contact</button>
                    </Link>
                </div >
        </>
    );
}

export default Header;