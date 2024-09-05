import axios from "axios";

function getReservation() {
    return axios.get("http://127.0.0.1:8080/reservation")
}

function DeleteReservation(id) {
    return axios.delete(`http://127.0.0.1:8080/reservation/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

function addReservation(ajoutreservation) {
    return axios.post("http://127.0.0.1:8080/reservation", ajoutreservation, {
        headers: {
            "Content-Type" : 'application/json'
        }})
};

function updateReservation(updatereservation) {
    return axios.patch(`http://127.0.0.1:8080/reservation/${updatereservation.id}`, updatereservation, {
        headers : {
            'Content-Type' : "application/json"
        }
    })
}



export default {
    getReservation,
    DeleteReservation,
    addReservation,
    updateReservation
}