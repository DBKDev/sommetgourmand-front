import React, { useEffect, useState } from 'react';
import EvenementService from "../Services/EvenementService"

const ModificationEvenement = ({ evene, fetchEvenement, setCurrentEvenement }) => {

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setCurrentEvenement({ ...evene, [name]: value });
    }


    const handleModifierEvenement = async (e) => {
        e.preventDefault()
        try {
            const response = await EvenementService.updateEvenement(evene);
            fetchEvenement()
        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <>

            <div id="popup2" class="overlay">
                <div class="popup">
                    <h2>Modifier Un Evenement</h2>
                    <a class="close" href="#" >&times;</a>
                    <div class="content">
                        <div className="content-event-form">
                            <div className="event-content">
                                <form action="" className='form-event'>
                                    <div className='Form-event-ligne1'>
                                        <input type="hidden" name={"Id_E"} value={evene.Id_E} onChange={handleChange} />
                                        <input type="text" id="titre" name={"Nom_E"} required placeholder='Titre de l événement' value={evene.Nom_E} onChange={handleChange} />
                                        <input type="file" id="fichiers" name={"Image_E"} required className='upload-event' onChange={handleChange} />
                                    </div>

                                    <div className='Form-event-message'>
                                        <textarea id="message" name={"Description_E"} maxLength="380" required placeholder='Description de l’événements' value={evene.Description_E} onChange={handleChange}></textarea>
                                    </div>
                                    <div className='Form-event-heure'>
                                        <input type="date" id="date" name={"Date_E"} required value={evene.Date_E} onChange={handleChange} />
                                        <input type="time" id="heureDebut" name={"Hdebut_E"} required value={evene.Hdebut_E} onChange={handleChange} />
                                        <input type="time" id="heureFin" name={"Hfin_E"} required value={evene.Hfin_E} onChange={handleChange} />
                                    </div>




                                    <input type="submit" value={"Modifier"} className='Form-send-button' onClick={handleModifierEvenement} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ModificationEvenement;