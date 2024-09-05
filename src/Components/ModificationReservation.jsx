import React, { useEffect, useState } from 'react';
import ReservationService from "../Services/ReservationService"

const ModificationReservation = ({ reserva, fetchReservation, setCurrentReserv}) => {   

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setCurrentReserv({ ...reserva, [name]: value });
    }


    const handleModifierReservation = async (e) => {
        e.preventDefault()
        try {
            const response = await ReservationService.updateReservation(reserva);
            
            fetchReservation()
        } catch (error) {
            console.log(error);
        }
    }

    console.log(reserva);

        return (
            <>

                <div id="popup2" class="overlay">
                    <div class="popup">
                        <h2>Modifier Une Réservation</h2>
                        <a class="close" href="#" >&times;</a>
                        <div class="content">
                            <div className="content-event-form">
                                <div className="event-content">
                                    <form action="" className='form-event'>
                                        <input type="hidden" name={"Id_R"} value={reserva.Id_R} onChange={handleChange}/>
                                        <div className='Form-event-ligne1'>
                                            <input type="text" id="titre" name={"Nom_R"} required placeholder='Nom de Famille' value={reserva.Nom_R} onChange={handleChange} />
                                            <input type="mail" id="titre" name={"Mail_R"} required placeholder='Adresse Email' value={reserva.Mail_R} onChange={handleChange} />
                                        </div>

                                        <div className='Form-event-heure'>
                                            <input type="date" id="date" name={"Date_R"} required value={reserva.Date_R} onChange={handleChange} />
                                            <input type="time" id="heureDebut" name={"Heure_R"} required value={reserva.Heure_R} onChange={handleChange} />
                                            <input type="number" id="nbpers" name={"Nombre_R"} required placeholder='Personnes' className='pers-form' max='20' min="1" value={reserva.Nombre_R} onChange={handleChange} />
                                        </div>

                                        <div>
                                            <input type="text" id="telephone" name={"Numero_R"} placeholder="Numéro de Téléphone" required maxlength="10" className='numero-tel-form' value={reserva.Numero_R} onChange={handleChange} />
                                        </div>



                                        <input type="submit" value={"Modifier"} className='Form-send-button' onClick={handleModifierReservation} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        );
    }

    export default ModificationReservation;