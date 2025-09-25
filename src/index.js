import "./styles/styles.css";
import { renderForm } from "./ui/renderForm";
import { getWeatherIn } from "./api/weatherService";
import { displayCurrentWeather } from "./ui/renderCurrent";
import {renderForecast } from "./ui/renderForecast";
const apiKey = process.env.API_KEY;

renderForm(onSubmit);

async function onSubmit(cityName) {
    const dataModel = await getWeatherIn(cityName);
    await displayCurrentWeather(dataModel);
    await renderForecast(document.getElementById("forecast"), dataModel.forecast);
}