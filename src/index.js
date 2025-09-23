import "./styles.css";
import { renderForm } from "./ui/renderForm";
import { getWeatherIn } from "./api/weatherService";
const apiKey = process.env.API_KEY;

const app = document.getElementById("app");

const cityForm = renderForm(tempOnSubmit);

app.appendChild(cityForm);

async function tempOnSubmit(cityName) {
    const dataModel = await getWeatherIn(cityName);
    console.log(dataModel);
}