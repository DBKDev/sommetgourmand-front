import axios from "axios";

function getMessage (){
    return axios.get("http://127.0.0.1:8080/message")
}

function ajoutMessage(ajoutMessage) {
    return axios.post("http://127.0.0.1:8080/message", ajoutMessage, {
        headers: {
            "Content-Type" : 'application/json'
        }})
};

function deleteMessage(id) {
    return axios.delete(`http://127.0.0.1:8080/message/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
export default{
    getMessage,
    ajoutMessage,
    deleteMessage,
}