import React, { useEffect, useState } from 'react';
import Dashboard from "../Components/Dashboard";
import Message from "../Services/MessageService";
import "../Styles/dashboardReservation.css";
import { format } from 'date-fns';
import DeleteReservationByID from '../Components/DeleteReservationByID';
import ReservationService from '../Services/ReservationService';
import ModificationReservation from '../Components/ModificationReservation';
import DeleteMessage from '../Components/DeleteMessage';

const DashboardReservation = () => {



    const [message, setMessage] = useState([]);
    const [reservation, setReservation] = useState([]);
    const [currentReserv, setCurrentReserv] = useState({});

    //! Ajout du formulaire en BDD
    const [ajoutreservation, setAjoutreservation] = useState({
        Nom: "",
        Mail: "",
        Date: "",
        Heure: "",
        Nombre: "",
        Numero: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setAjoutreservation({ ...ajoutreservation, [name]: value });
    }

    const handleAjoutReservation = async (e) => {
        e.preventDefault()
        console.log(ajoutreservation);
        try {
            const response = await ReservationService.addReservation(ajoutreservation);
            console.log(response);
            fetchReservation()
        } catch (error) {
            console.log(error);
        }
    };
    //! Fin de l'ajout du formulaire en BDD


    const fetchMessage = async () => {
        try {
            const response = await Message.getMessage();
            console.log(response);
            setMessage(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchReservation = async () => {
        try {
            const response = await ReservationService.getReservation();
            console.log(response);
            setReservation(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }




    useEffect(() => {
        fetchMessage();
        fetchReservation();
    }, [])



    console.log("reservation :", reservation);

    return (
        <>
            
            <div className='db-contenu-evenement'>
                <div className="db-evenement">
                    <table className='table-reservation'>
                        <thead>
                            <tr className='tr-class'>
                                <th data-type="numeric">ID<span class="resize-handle"></span></th>
                                <th data-type="text-short">Nom<span class="resize-handle"></span></th>
                                <th data-type="text-short">Mail <span class="resize-handle"></span></th>
                                <th data-type="text-short">Date <span class="resize-handle"></span></th>
                                <th data-type="text-short">Heure<span class="resize-handle"></span></th>
                                <th data-type="text-long"><i class='bx bxs-user'></i><span class="resize-handle"></span></th>
                                <th data-type="text-short">Tel °<span class="resize-handle"></span></th>
                                <th data-type="text-short"><span class="resize-handle"></span></th>

                            </tr>
                        </thead>
                        <tbody>

                            {reservation.map((reserv) => {
                                return (
                                    <tr>
                                        <td className='td-class'>{reserv.Id_R}</td>
                                        <td className='td-class'>{reserv.Nom_R}</td>
                                        <td className='td-class'>{reserv.Mail_R}</td>
                                        <td className='td-class'>{format(new Date(reserv.Date_R), 'dd/MM/yyyy')}</td>
                                        <td className='td-class'>{format(new Date(`2024-01-01T${reserv.Heure_R}`), 'HH:mm')}</td>
                                        <td className='td-class'>{reserv.Nombre_R}</td>
                                        <td className='td-class'>{reserv.Numero_R}</td>
                                        <td>
                                            <DeleteReservationByID key={reserv.Id_R} reservation={reserv} setCurrentReserv={setCurrentReserv} fetchReservation={fetchReservation}/>                                            
                                        </td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>

                </div>

                <div className="db-message">
                    <div className='message-gestion'>
                        {message.map(tableau => {
                            return (
                                <div className="message">
                                    <DeleteMessage key={tableau.Id_M} tableau={tableau}/>
                                    <div className="info-message">
                                        <div className='info-message-title'><p>{tableau.Nom_M}</p></div>
                                        <div className='info-message-mail'><p>{tableau.Mail_M}</p></div>
                                        <div className='info-message-message'><p>{tableau.Message_M}</p></div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            <div className='add-evenement'>
                <button className='button-add-evenement'><a href="#popup1">Ajouter</a></button>
            </div>

            <div id="popup1" class="overlay">
                <div class="popup">
                    <h2>Ajouter une Réservation</h2>
                    <a class="close" href="#" >&times;</a>
                    <div class="content">
                        <div className="content-event-form">
                            <div className="event-content">
                                <form action="" className='form-event'>
                                    <div className='Form-event-ligne1'>
                                        <input type="text" id="titre" name={"Nom"} required placeholder='Nom de Famille' value={ajoutreservation.Nom} onChange={handleChange} />
                                        <input type="mail" id="titre" name={"Mail"} required placeholder='Adresse Email' value={ajoutreservation.Mail} onChange={handleChange} />
                                    </div>

                                    <div className='Form-event-heure'>
                                        <input type="date" id="date" name={"Date"} required value={ajoutreservation.Date} onChange={handleChange}/>
                                        <input type="time" id="heureDebut" name={"Heure"} required value={ajoutreservation.Heure} onChange={handleChange} />
                                        <input type="number" id="nbpers" name={"Nombre"} required placeholder='Personnes' className='pers-form' max='20' min="1" value={ajoutreservation.Nombre} onChange={handleChange} />
                                    </div>

                                    <div>
                                        <input type="text" id="telephone" name={"Numero"} placeholder="Numéro de Téléphone" required maxlength="10" className='numero-tel-form' value={ajoutreservation.Numero} onChange={handleChange} />
                                    </div>



                                    <input type="submit" value={"Ajouter"} className='Form-send-button' onClick={handleAjoutReservation} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <ModificationReservation reserva={currentReserv}  fetchReservation={fetchReservation} setCurrentReserv={setCurrentReserv}/>
        </>
    );
}

export default DashboardReservation;