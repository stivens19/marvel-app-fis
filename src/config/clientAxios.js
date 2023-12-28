import axios from 'axios';
import { md5 } from 'md5js';

const hash=md5(`100${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`,32);

const clientAxios = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
    params:{
        apikey:process.env.REACT_APP_PUBLIC_KEY,
        hash,
        ts:100
    }
});

export default clientAxios;