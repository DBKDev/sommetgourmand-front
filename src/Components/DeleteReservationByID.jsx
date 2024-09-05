import React from 'react';
import { Link } from 'react-router-dom';
import ReservationService from '../Services/ReservationService';

const DeleteReservationByID = ({ reservation, setCurrentReserv ,fetchReservation }) => {

    const handleDeleteReservation = async () => {
        try {
            const response = await ReservationService.DeleteReservation(reservation.Id_R);
            
            fetchReservation()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <td><div className='td-button'><a href="#popup2"><i class='bx bx-edit' onClick={() => {
                setCurrentReserv(reservation);
            }}></i></a> <i class='bx bx-x croix-plat' onClick={handleDeleteReservation}></i></div></td>
        </>

    );
}

export default DeleteReservationByID;