import React from 'react';
import MenuService from '../Services/MenuService';
import { Link } from 'react-router-dom'

const DeletePlatByID = ({ plat, fetchPlat,setCurrentPlat }) => {

    const handleDeletePlat = async (e) => {
        try {
            const response = await MenuService.DeletePlat(plat.Id_P);
            
            fetchPlat()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <td><div className='td-button'><a href="#popup2"><i class='bx bx-edit' onClick={() => {
                setCurrentPlat(plat);
            }}></i></a> <i class='bx bx-x croix-plat' onClick={handleDeletePlat}></i></div></td>
        </>
    );
}

export default DeletePlatByID;