import React, { useEffect, useState } from 'react';
import Dashboard from "../Components/Dashboard"
import '../Styles/FormulaireEvenement.css'
import Message from "../Services/MessageService";
import "../Styles/Popup.css"

const FormulaireEvenement = () => {
    const [message, setMessage] = useState([]);

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

    useEffect(() => {
        fetchMessage();
    }, [])
    return (

        <>
            <div className='db-contenu-evenement'>
                <div className="db-evenement">
                    <div className='position-event'>
                        <div className="content-event-form">
                            <div className="event-content">
                                <form action="" className='form-event'>

                                    <div className='Form-event-ligne1'>
                                        <input type="text" id="titre" name="titre" required placeholder='Titre de l événement' />
                                        <input type="file" id="fichiers" name="fichiers" required className='upload-event' />
                                    </div>

                                    <div className='Form-event-message'>
                                        <textarea id="message" name="message" maxLength="380" required placeholder='Description de l’événements'></textarea>
                                    </div>
                                    <div className='Form-event-heure'>
                                        <input type="date" id="date" name="date" required />
                                        <input type="time" id="heureDebut" name="heureDebut" required />
                                        <input type="time" id="heureFin" name="heureFin" required />
                                    </div>


                                    <input type="submit" value="Modifier" className='Form-send-button'/>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>               
            </div>
        </>
    );
}

export default FormulaireEvenement;