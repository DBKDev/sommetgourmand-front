import axios from "axios";

function getPlat() {
    return axios.get("http://127.0.0.1:8080/plat")
}

function DeletePlat(id) {
    return axios.delete(`http://127.0.0.1:8080/plat/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

function addPlat(ajoutplat) {
    return axios.post("http://127.0.0.1:8080/plat", ajoutplat, {
        headers: {
            "Content-Type": 'application/json'
        }
    })
};

function updatePlat(updateplat) {
    return axios.patch(`http://127.0.0.1:8080/plat/${updateplat.id}`, updateplat, {
        headers: {
            'Content-Type': "application/json"
        }
    })
}

function getFavoris() {
    return axios.get("http://127.0.0.1:8080/plat/favoris")
}

function getPâtes() {
    return axios.get("http://127.0.0.1:8080/plat/pates")
}

function getViandes() {
    return axios.get("http://127.0.0.1:8080/plat/viandes")
}

function getSandiwchs() {
    return axios.get("http://127.0.0.1:8080/plat/sandwichs")
}

function getSalades() {
    return axios.get("http://127.0.0.1:8080/plat/salades")
}

function getWraps() {
    return axios.get("http://127.0.0.1:8080/plat/wraps")
}
function getAperitifs() {
    return axios.get("http://127.0.0.1:8080/plat/aperitifs")
}



export default {
    getPlat,
    DeletePlat,
    addPlat,
    updatePlat,
    getFavoris,
    getPâtes,
    getViandes,
    getSandiwchs,
    getSalades,
    getWraps,
    getAperitifs,
}