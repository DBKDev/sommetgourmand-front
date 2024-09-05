import React, { useEffect, useState } from 'react';
import MenuService from "../Services/MenuService"

const ModificationPlat = ({ plat, fetchPlat, setCurrentPlat }) => {

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setCurrentPlat({ ...plat, [name]: value });
    }


    const handleModifierPlat = async (e) => {
        e.preventDefault()
        try {
            const response = await MenuService.updatePlat(plat);
            fetchPlat()
        } catch (error) {
            console.log(error);
        }
    }

    console.log(plat);

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
                                    <div className='Form-event-ligne1'>
                                    <input type="hidden" name={"Id_P"} value={plat.Id_P} onChange={handleChange}/>
                                        <input type="text" id="titre" name={"Nom_P"} required placeholder='Nom du Plat' value={plat.Nom_P} onChange={handleChange} />
                                        <input type="file" id="fichiers" name={"Image_P"} required className='upload-event' onChange={handleChange} />
                                    </div>

                                    <div className='Form-event-message'>
                                        <textarea id="message" name={"Description_P"} maxLength="380" placeholder='Description du plat' value={plat.Description_P} onChange={handleChange}></textarea>
                                    </div>
                                    
                                    <div className='Form-event-heure'>
                                        <input type="text" id="date" name={"Prix_P"} required maxLength="5" placeholder='Prix 00.00' value={plat.Prix_P} onChange={handleChange} />
                                        <select id="choix" name={"Categorie_P"} value={plat.Categorie_P} onChange={handleChange}>
                                            <option value={"Pâtes du Sommet"}>Pâtes du Sommet</option>
                                            <option value={"Viandes du Sommet"}>Viandes du Sommet</option>
                                            <option value={"Sandwichs"}>Sandwichs</option>
                                            <option value={"Salades"}>Salades</option>
                                            <option value={"Wraps"}>Wraps</option>
                                            <option value={"Appéritifs"}>Appéritifs</option>
                                        </select>
                                    </div>



                                    <input type="submit" value={"Modifier"} className='Form-send-button' onClick={handleModifierPlat} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ModificationPlat;