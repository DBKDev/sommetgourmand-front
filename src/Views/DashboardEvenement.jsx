import React, { useEffect, useState } from 'react';
import Dashboard from '../Components/Dashboard';
import "../Styles/dashboardEvenement.css"
import Message from "../Services/MessageService";
import EvenementService from "../Services/EvenementService";
import DeleteEvenementByID from '../Components/DeleteEvenementByID';
import "../Styles/FormulaireEvenement.css"
import { Link } from 'react-router-dom';
import ModificationEvenement from '../Components/ModificationEvenement';
import DeleteMessage from '../Components/DeleteMessage';


const DashboardEvenement = () => {

    const [message, setMessage] = useState([]);


    // Déclaration de l'état pour la liste des événements et l'événement actuellement sélectionné
    const [evenement, setEvenement] = useState([]);
    const [currentEvenement, setCurrentEvenement] = useState({});

    // Déclaration de l'état pour les données d'un nouvel événement à ajouter en base de données
    const [ajoutevenement, setAjoutevenement] = useState({
        Nom: "",
        Description: "",
        Date: "",
        Hdebut: "",
        Hfin: "",
        Image: ""
    });

    // Fonction appelée à chaque fois qu'un champ du formulaire est modifié
    const handleChange = (e) => {
        // Extraction du nom et de la valeur du champ modifié à partir de l'événement
        const { name, value } = e.currentTarget;
        // Mise à jour de l'état ajoutevenement avec le nouveau nom et la nouvelle valeur du champ
        setAjoutevenement({ ...ajoutevenement, [name]: value });
    }

    // Fonction appelée lors de la soumission du formulaire
    const handleAjoutEvenement = async (e) => {
        // Empêcher le comportement par défaut du formulaire
        e.preventDefault();
        // Mettre à jour la liste des événements
        fetchEvenement();
        try {
            // Ajouter un nouvel événement en envoyant une requête HTTP à EvenementService.addEvenement
            const response = await EvenementService.addEvenement(ajoutevenement);
        } catch (error) {
            // Afficher l'erreur dans la console en cas d'échec
            console.log(error);
        }
    };

    //! Fin de l'ajout du formulaire en BDD

    const fetchMessage = async () => {
        try {
            const response = await Message.getMessage();
            setMessage(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchEvenement = async () => {
        try {
            const response = await EvenementService.getEvenement();

            setEvenement(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchMessage();
        fetchEvenement();
    }, [])


    return (
        <>
            <div id='body-couleur'>

                <div className='db-contenu-evenement'>
                    <div className="db-evenement">
                        {evenement.map((event) => {
                            return (
                                <div className="db-card-event">
                                    <img src={process.env.PUBLIC_URL + `/Assets/evenement/${event.Image_E.replace(/^.*[\\\/]/, '')}`} className='db-img-event' alt="" />
                                    <DeleteEvenementByID key={event.Id_E} evenement={event} setCurrentEvenement={setCurrentEvenement} fetchEvenement={fetchEvenement} />
                                </div>
                            )
                        })}
                    </div>

                    <div className="db-message">
                        <div className='message-gestion'>
                            {message.map(tableau => {
                                return (
                                    <div className="message">
                                        <DeleteMessage key={tableau.Id_M} tableau={tableau} />
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
                        <h2>Ajouter un Evenement</h2>
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                            <div className="content-event-form">
                                <div className="event-content">
                                    <form action="" className='form-event'>
                                        <div className='Form-event-ligne1'>
                                            <input type="text" id="titre" name={"Nom"} required placeholder='Titre de l événement' value={ajoutevenement.Nom} onChange={handleChange} />
                                            <input type="file" id="fichiers" name={"Image"} required className='upload-event' value={ajoutevenement.Image} onChange={handleChange} />
                                        </div>

                                        <div className='Form-event-message'>
                                            <textarea id="message" name={"Description"} maxLength="380" required placeholder='Description de l’événements' value={ajoutevenement.Description} onChange={handleChange}></textarea>
                                        </div>
                                        <div className='Form-event-heure'>
                                            <input type="date" id="date" name={"Date"} required value={ajoutevenement.Date} onChange={handleChange} />
                                            <input type="time" id="heureDebut" name={"Hdebut"} required value={ajoutevenement.Hdebut} onChange={handleChange} />
                                            <input type="time" id="heureFin" name={"Hfin"} required value={ajoutevenement.Hfin} onChange={handleChange} />
                                        </div>


                                        <input type="submit" className='Form-send-button' value={'Ajouter'} onClick={handleAjoutEvenement} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModificationEvenement fetchEvenement={fetchEvenement} evene={currentEvenement} setCurrentEvenement={setCurrentEvenement} />


            </div>
        </>
    );
}


export default DashboardEvenement;