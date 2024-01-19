import axios from "./axios" ;

export const registerRequest = user => axios.post(`/register` , user ) ;

export const loguinRequest = user => axios.post(`/loguin` , user ) ;

export const verifyTokenRequest = () => axios.get(`/verify`) ;

