import "../styles/components/form.css";

export function renderForm(onSubmit) {
    const header = document.getElementById("header");
    const form = document.createElement("form");
    form.id = "weather-form";
    form.innerHTML = `
        <label for="city_name">City:</label>
        <input type="text" id="city_name" name="city_name">
        <button type="submit">Submit</button>
    `;
    
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // stop the default page reload
        const cityName = form.querySelector("#city_name").value.trim();
        
        if(cityName) onSubmit(cityName);
    });
    
    header.appendChild(form);
}