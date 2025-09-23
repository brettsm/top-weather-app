import "./styles.css";
import { renderForm } from "./ui/renderForm";
const apiKey = process.env.API_KEY;

const app = document.getElementById("app");

const cityForm = renderForm(tempOnSubmit);

app.appendChild(cityForm);

function tempOnSubmit(cityName) {
    console.log(cityName);
}