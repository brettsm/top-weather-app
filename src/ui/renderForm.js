export function renderForm(onSubmit) {
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
    return form;
}