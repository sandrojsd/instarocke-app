import axios from 'axios';

const api = axios.create({
    //simulador ios
    baseURL: 'http://localhost:3333'
    //dipositivo físico via usb, tenho que pegar o meu IP de rede
    //baseURL: 'http://192.168.0.5:3333'
    //simulador android genymotion
    //baseURL: 'http://10.0.3.2:3333'
});

export default api;

