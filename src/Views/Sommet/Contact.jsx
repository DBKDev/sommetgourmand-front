import React, { useState } from 'react';
import "../../Styles/Contact.css"
import Footer from "../../Components/Footer";
import ReservationService from '../../Services/ReservationService';
import MessageService from '../../Services/MessageService';

const Contact = () => {

    const [currentForm, setCurrentForm] = useState("reserver");
    const [formActive1, setFormActive1] = useState(true);
    const [formActive2, setFormActive2] = useState(false);


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
        } catch (error) {
            console.log(error);
        }
    };

    const [ajoutmessage, setAjoutmessage] = useState({
        Nom : "",
        Mail : "",
        Message : ""
    });

    const HandleChangeMessage = (e) => {
        const { name, value } = e.currentTarget;
        setAjoutmessage({...ajoutmessage, [name]: value });
    }

    const HandleAjoutMessage = async (e) => {
        e.preventDefault()
        console.log(ajoutmessage);
        try {
            const response = await MessageService.ajoutMessage(ajoutmessage);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>

            {/* //! Block 1  */}
            <div className='block1-contact'>
                <img src={process.env.PUBLIC_URL + `/Assets/Contact.jpg`} />
                <h1>Contact</h1>
            </div>
            {/* //! Fin du Block 1  */}
            {/* //! Block 2  */}
            <div className='block2-contact'>

                <div className='block2-contact-contact'>
                    <div className='block2-contact-contact1'>
                        <img src={process.env.PUBLIC_URL + `/Assets/Local.png`} />
                        <p>Contacts</p>
                    </div>
                    <div className='block2-contact-contact2'>
                        <p>
                            12 Rue des Sommets <br />
                            Chamonix-Mont-Blanc<br />
                            Alpes françaises, 74400
                        </p>
                    </div>
                </div>

                <div className='block2-contact-formulaire'>
                    <div className='block2-contact-formulaire-contour'>

                        <div className='block2-contact-formulaire1'>
                            <p onClick={() => {
                                setCurrentForm("reserver")
                                setFormActive1(true)
                                setFormActive2(false)
                            }} className={currentForm === "reserver" && "activeform"}>réserver</p>

                            <p onClick={() => {
                                setCurrentForm("ecrire")
                                setFormActive2(true)
                                setFormActive1(false)
                            }} className={currentForm === "ecrire" && "activeform"}>écrire</p>
                        </div>

                        {/* //! Formulaire 1 */}
                        <div className='block2-contact-content'>

                            <form className={formActive1 == true ? "block2-contact-form1-active" : "block2-contact-form1"}>
                                <div className='block2-contact-formulaire2'>
                                    <h2>Faites Votre Réservation</h2>
                                    <p>pour d'autres questions, veuillez appeler</p>
                                </div>
                                <div className='block2-contact-formulaire3'>
                                    <div className='block2-contact-formulaire3-1'>
                                        <label htmlFor="Date">Date</label>
                                        <input type="Date" id='Date' name={"Date"} required onChange={handleChange}/>
                                    </div>
                                    <div className='block2-contact-formulaire3-2'>
                                        <label htmlFor="Heure">Heure</label>
                                        <input type="Time" id='Heure' name={"Heure"} required onChange={handleChange}/>
                                    </div>
                                    <div className='block2-contact-formulaire3-3'>
                                        <label htmlFor="Nombre">Personnes</label>
                                        <input type="Number" id='Nombre' placeholder='0' name={"Nombre"} required max='20' min="1" onChange={handleChange} />
                                    </div>

                                </div>
                                <div className='block2-contact-formulaire4'>
                                    <div className='block2-contact-formulaire4-1'>
                                        <label htmlFor="Nom">VOTRE NOM</label>
                                        <input type="text" id='Nom' name={"Nom"} required placeholder='Nom de Famille' onChange={handleChange}/>
                                    </div>
                                    <div className='block2-contact-formulaire4-2'>
                                        <label htmlFor="Email">ADRESSE EMAIL</label>
                                        <input type="email" id='Email' name={"Mail"} required placeholder='Adresse Email' onChange={handleChange}/>
                                    </div>
                                    <div className='block2-contact-formulaire4-3'>
                                        <label htmlFor="Numero">NUMERO DE TELEPHONE</label>
                                        <input type="Number" id='Numero' name={"Numero"} placeholder="Numéro de Téléphone" required maxLength="10" className='numero-tel-form' onChange={handleChange}/>
                                    </div>
                                    <button className='block2-contact-formulaire4-4' value={"Ajouter"} onClick={handleAjoutReservation}>Réserver Maintenant</button>
                                </div>
                            </form>

                            {/* //! Formulaire 2 */}
                            {/* <div className='block3-contact-formulaire1'>
                                <p onClick={() => {
                                    setCurrentForm("reserver")
                                }} className={currentForm === "reserver" && "activeform"}>réserver</p>

                                <p onClick={() => {
                                    setCurrentForm("ecrire")
                                }} className={currentForm === "ecrire" && "activeform"}>écrire</p>
                            </div> */}

                            <form className={formActive2 == true ? "block2-contact-form2-active" : "block2-contact-form2"}>
                                <div className='block3-contact-formulaire2'>
                                    <h2>Nous Écrire un Message</h2>
                                    <p>pour d'autres questions, veuillez appeler</p>
                                </div>
                                <div className='block3-contact-formulaire4'>
                                    <div className='block3-contact-formulaire4-1'>
                                        <label htmlFor="message">VOTRE MESSAGE</label>
                                        <textarea type="text" id='message' name={"Message"} required placeholder='Votre Message à nous transmettre' onChange={HandleChangeMessage}/>
                                    </div>
                                    <div className='block3-contact-formulaire4-2'>
                                        <label htmlFor="Nom">VOTRE NOM</label>
                                        <input type="text" id='Nom' name={"Nom"} required placeholder='Nom de Famille' onChange={HandleChangeMessage}/>
                                    </div>
                                    <div className='block3-contact-formulaire4-3'>
                                        <label htmlFor="Email">ADRESSE EMAIL</label>
                                        <input type="email" id='Email' name={"Mail"} required placeholder='Adresse Email' onChange={HandleChangeMessage}/>
                                    </div>
                                    <button className='block3-contact-formulaire4-4'  value={"Ajouter"} onClick={HandleAjoutMessage}>Envoyer Un Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='block2-contact-horaire'>

                    <div className='block2-horaire-horaire1'>
                        <img src={process.env.PUBLIC_URL + `/Assets/Server.png`} />
                        <p>Horaires</p>
                    </div>
                    <div className='block2-horaire-horaire2'>
                        <p>Semaine</p>
                        <p>11h30 - 14h00 / 18h30 - 23h30</p>
                    </div>
                    <div className='block2-horaire-horaire3'>
                        <p>.</p>
                    </div>
                    <div className='block2-horaire-horaire4'>
                        <p> Week-end</p>
                        <p>11h00 - 15h00 / 18h30 - 1h00</p>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Contact;