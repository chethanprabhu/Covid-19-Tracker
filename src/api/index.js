import axios from "axios";

const BASE_URL = "https://disease.sh/"

const api = axios.create({
    baseURL: BASE_URL
})

export const getWorldData = async () => {
 try {
    const {data: {cases, active, deaths, updated}} = await api.get("v3/covid-19/all");
    const lastUpdated = new Date(updated).toString().substr(4, 20);
    return {cases, active, deaths, lastUpdated};
 }
 catch(err) {
    console.log(err);
 }
}