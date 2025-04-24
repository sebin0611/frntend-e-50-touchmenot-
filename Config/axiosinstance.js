import axios from "axios";



const API_URL = import.meta.env.VITE_API_URL
console.log(API_URL,"APIIIURLL")

export  const axiosinstance = axios.create({baseURL: `${API_URL}/api`,withCredentials:true})