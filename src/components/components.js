const languages = (obj = {}) => {
    const ul = document.createElement('ul');
    ul.className = 'languages';
    Object.keys(obj).forEach(lang => {
        const li = document.createElement('li');
        li.innerHTML = obj[lang];
        ul.appendChild(li);
    });
    return ul;
}

const getName = (name = '') => {
    const h1 = document.createElement('h1');
    h1.innerHTML = name;
    h1.className = 'country-name';
    return h1;
}

const getCapital = (name = '') => {
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Capital: ' + name;
    return h2;
}

const getCurrency = (value = {}) => {
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Currency: '
    Object.keys(value).forEach(cur => h2.innerHTML += `${value[cur].name} (${value[cur].symbol}); `)
    return h2;
}

const getFlag = (link = '') => {
    const img = document.createElement('img');
    img.src = link.png || link.svg;
    img.alt = link.alt || 'flag';
    return img;
}

const getPopulation = (number) => {
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Current population size: ' + String(number);
    return h2;
}

export const countryBox = (data = {}) => {
    const container = document.createElement('div');
    container.className = 'country-box';
    
    const name = getName(data.name.official || data[0].name.common);
    const capital = getCapital(data.capital || data.capital[0]);
    const currency = getCurrency(data.currencies);
    const lang = languages(data.languages);
    const population = getPopulation(data.population);
    const flag = getFlag(data.flags);

    container.append(name, capital, currency, lang, population, flag);
    return container;
}




