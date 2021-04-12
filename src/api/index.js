import axios from "axios";

const BASE_URL = "https://disease.sh/"

const api = axios.create({
    baseURL: BASE_URL
})

export const getWorldData = async () => {
 try {
    const {data: {cases, active, deaths}} = await api.get("v3/covid-19/all");
    return {cases, active, deaths};
 }
 catch(err) {
    console.log(err);
 }
}