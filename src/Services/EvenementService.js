import axios from "axios";

function getEvenement(){
    return axios.get("http://127.0.0.1:8080/evenement/date")
}

function getEvenementlimited() {
    return axios.get("http://127.0.0.1:8080/evenement/limited")
}

function DeleteEvenement(id) {
    return axios.delete(`http://127.0.0.1:8080/evenement/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

function addEvenement(ajoutevenement) {
    return axios.post("http://127.0.0.1:8080/evenement", ajoutevenement, {
        headers: {
            "Content-Type" : 'application/json'
        }})
};

function updateEvenement(updateevenement) {
    return axios.patch(`http://127.0.0.1:8080/evenement/${updateevenement.id}`, updateevenement, {
        headers : {
            'Content-Type' : "application/json"
        }
    })
}

export default{
    getEvenement,
    DeleteEvenement,
    addEvenement,
    updateEvenement,
    getEvenementlimited,
}