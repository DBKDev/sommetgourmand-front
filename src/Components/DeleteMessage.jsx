import React from 'react';
import MessageService from '../Services/MessageService';

const DeleteMessage = ({tableau}) => {
    
    const handleDeleteMessage = async (e) => {
        try {
            const response = await MessageService.deleteMessage(tableau.Id_M);
            console.log(response);
        } catch (error) {
            console.log(e);
        }
    }

    return ( 
        <>
        <i class='bx bx-x message-croix' onClick={handleDeleteMessage}></i>
        </>
     );
}
 
export default DeleteMessage;