import dom from "../dom.js";
import getData from "../api-calls.js";
import { countryBox } from "../components/components.js";

const clickHandler = async(e) => {
    dom.output.innerHTML = '';
    e.preventDefault();
    const value = dom.input.value.trim().toLowerCase();
    if (!value) {
        dom.error.innerText = 'Please enter a country name';
        dom.error.classList.add('error');
        return;
    }

    if (dom.error.innerHTML !== '') {
        dom.error.innerHTML = '';
        dom.error.classList.remove('error');
    }

    const data = await getData(value);
    const names = data === null ? [] : data[0].altSpellings;
    const nameExists = names.filter(name => value === name);
    if (!data || nameExists.length !== 0) {
        dom.error.innerText = 'Country not found';
        dom.error.classList.add('error');
        return;
    }
    if (data.length > 1 && value !== 'china') {
        dom.error.innerText = 'Country not found';
        dom.error.classList.add('error');
        return;
    }
    
    let country;
    value === 'china' ? country = countryBox(data[1]) : country = countryBox(data[0]);
    
    dom.output.appendChild(country);
} 

export default clickHandler;