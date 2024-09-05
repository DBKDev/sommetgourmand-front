import React, { useEffect, useState } from 'react';
import Dashboard from '../Components/Dashboard';
import MenuService from "../Services/MenuService"
import '../Styles/dashboardMenu.css'
import Message from "../Services/MessageService";
import DeletePlatByID from '../Components/DeletePlatByID';
import ModificationPlat from '../Components/ModificationPlat';
import DeleteMessage from '../Components/DeleteMessage';

const DashboardMenu = () => {

    const [plat, setPlat] = useState([]);
    const [message, setMessage] = useState([]);
    const [currentPlat, setCurrentPlat] = useState({});


    //! Ajout du formulaire en BDD
    const [ajoutplat, setAjoutplat] = useState({
        Nom: "",
        Description: "",
        Prix: "",
        Categorie: "",
        Image: "",
        Favori: "0"
    });

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setAjoutplat({ ...ajoutplat, [name]: value });
    }    

    const handleAjoutPlat = async (e) => {
        e.preventDefault()
        console.log(ajoutplat);
        fetchPlat();
        try {
            const response = await MenuService.addPlat(ajoutplat);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    //! Fin de l'ajout du formulaire en BDD

    const fetchPlat = async () => {
        try {
            const response = await MenuService.getPlat();
            console.log(response);
            setPlat(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

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
        fetchPlat();
        fetchMessage();
    }, [])


    return (
        <>
            
            <div className='db-contenu-evenement'>
                <div className="db-evenement">
                    <table className='Table-Plat'>
                        <thead>
                            <tr className='tr-class'>
                                <th data-type="numeric">ID<span class="resize-handle"></span></th>
                                <th data-type="text-short">Nom du Plat<span class="resize-handle"></span></th>
                                <th data-type="text-short">Description <span class="resize-handle"></span></th>
                                <th data-type="text-short">Prix <span class="resize-handle"></span></th>
                                <th data-type="text-short">Categorie<span class="resize-handle"></span></th>
                                <th data-type="text-long">Image<span class="resize-handle"></span></th>
                                <th data-type="text-short">Favori<span class="resize-handle"></span></th>
                                <th data-type="text-short"><span class="resize-handle"></span></th>

                            </tr>
                        </thead>
                        <tbody>

                            {plat.map((menu) => {
                                return (

                                    <tr>
                                        <td className='td-class'>{menu.Id_P}</td>
                                        <td className='td-class'>{menu.Nom_P}</td>
                                        <td className='td-class'>{menu.Description_P}</td>
                                        <td className='td-class'>{menu.Prix_P}€</td>
                                        <td className='td-class'>{menu.Categorie_P}</td>
                                        <td className='td-class'>{menu.Image_P}</td>
                                        <td className='td-class'>{menu.Favori}</td>
                                        <DeletePlatByID key={menu.Id_P} plat={menu} setCurrentPlat={setCurrentPlat} fetchPlat={fetchPlat}/>
                                        {/* <td><button className='td-button'><i class='bx bx-edit'></i> <i class='bx bx-x'></i></button></td> */}
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

            <div className='add-menu'>
                <button className='button-add-menu'><a href="#popup1">Ajouter</a></button>
            </div>

            <div id="popup1" class="overlay">
                <div class="popup">
                    <h2>Ajouter un Plat</h2>
                    <a class="close" href="#" >&times;</a>
                    <div class="content">
                        <div className="content-event-form">
                            <div className="event-content">
                                <form action="" className='form-event'>
                                    <div className='Form-event-ligne1'>
                                        <input type="text" id="titre" name={"Nom"} required placeholder='Nom du Plat' value={ajoutplat.Nom} onChange={handleChange}/>
                                        <input type="file" id="fichiers" name={"Image"} required className='upload-event' value={ajoutplat.Image} onChange={handleChange}/>
                                    </div>

                                    <div className='Form-event-message'>
                                        <textarea id="message" name={"Description"} maxLength="380" placeholder='Description du plat' value={ajoutplat.Description} onChange={handleChange}></textarea>
                                    </div>
                                    <div className='Form-event-heure'>
                                        <input type="text" id="date" name={"Prix"} required maxLength="5" placeholder='Prix 00.00' value={ajoutplat.Prix} onChange={handleChange}/>
                                        <select id="choix" name={"Categorie"} value={ajoutplat.Categorie} onChange={handleChange}>
                                            <option value={"Pâtes du Sommet"}>Pâtes du Sommet</option>
                                            <option value={"Viandes du Sommet"}>Viandes du Sommet</option>
                                            <option value={"Sandwichs"}>Sandwichs</option>
                                            <option value={"Salades"}>Salades</option>
                                            <option value={"Wraps"}>Wraps</option>
                                            <option value={"Appéritifs"}>Appéritifs</option>
                                        </select>
                                    </div>


                                    <input type="submit" className='Form-send-button' value={'Ajouter'} onClick={handleAjoutPlat} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
                        <ModificationPlat setCurrentPlat={setCurrentPlat} fetchPlat={fetchPlat} plat={currentPlat}/>


        </>
    );
}

export default DashboardMenu;