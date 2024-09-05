import axios from "axios";

function AddConnexion(connexion) {
    return axios.post("http://127.0.0.1:8080/connexion",{connexion}, {
        headers : {
        'Content-Type': 'application/json'
    }})
}
function ChangeLogin(change){
    return axios.patch("http://127.0.0.1:8080/connexion",change, {
        headers : {
        'Content-Type': 'application/json'
    }})
}
function ModifyConnexion(connexion) {
    return axios.post("http://127.0.0.1:8080/connexion/Modification",{connexion}, {
        headers : {
        'Content-Type': 'application/json'
    }})
}

export default {
    AddConnexion,
    ChangeLogin,
    ModifyConnexion,
}