import React, { useState } from 'react';
import '../Styles/dashboard.css'
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [currentPage, setCurrentPage] = useState("dashboard")

    return (
        <>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

            <div className="sidebar">
                <div className="sb-logo"><img src={process.env.PUBLIC_URL + `/Assets/Logo.png`} className='sb-img' /></div>

                <Link to="/admin/evenement" onClick={() => {
                    setCurrentPage("evenement")
                }} class={currentPage === "evenement" && "active"}>
                    <button className="sb-evenement"><i className='bx bx-calendar-event'></i>Evenements</button>
                </Link>

                <Link to="/admin/menu" onClick={() => {
                    setCurrentPage("menu")
                }} class={currentPage === "menu" ? "active" : ''}>
                    <button className="sb-menu"><i className='bx bx-food-menu'></i>Menu</button>
                </Link>

                <Link to="/admin/reservation" onClick={() => {
                    setCurrentPage("reservation")
                }} class={currentPage === "reservation" && "active"}>
                    <button className="sb-reservation"><i class='bx bx-library'></i>Réservation</button>
                </Link>


                <button>Déco</button>
            </div>
        </>
    )
}

export default Dashboard;