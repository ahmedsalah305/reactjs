import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://itipythonapi.herokuapp.com/',
});
export default instance