import React from 'react';
import { Link } from 'react-router-dom'
import EvenementService from '../Services/EvenementService';


const DeleteEvenementByID = ({ evenement, setCurrentEvenement , fetchEvenement}) => {

        const handleDeleteEvenement = async (e) => {
            try {
                const response = await EvenementService.DeleteEvenement(evenement.Id_E);                
                fetchEvenement()
            } catch (error) {
                console.log(e);
            }
        }
        

    return (
        <>
            <div className='button-event'><a href="#popup2">
                <div className='button-edit' onClick={() => {
                setCurrentEvenement(evenement);
            }}>Modifier</div></a><br />
                <div className='button-edit' onClick={handleDeleteEvenement} >Supprimer</div>
            </div>
        </>
    );
}

export default DeleteEvenementByID;