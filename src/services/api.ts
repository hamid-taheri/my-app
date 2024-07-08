import axios from "axios";
import { statSync } from "fs";

const APIKey = "750e69ff0d6367480464b29bf2a07b5a"

const client = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
})

export async function getCurrentWeather({lat, lon}:{lat: string, lon: string}){
   const {data} = await client(`/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`)
   return data
}
