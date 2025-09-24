import "./styles.css";
import { renderForm } from "./ui/renderForm";
import { getWeatherIn } from "./api/weatherService";
import { displayWeather } from "./ui/renderData";
const apiKey = process.env.API_KEY;

const app = document.getElementById("app");

const cityForm = renderForm(onSubmit);
app.appendChild(cityForm);

async function onSubmit(cityName) {
    const dataModel = await getWeatherIn(cityName);
    displayWeather(dataModel);
}