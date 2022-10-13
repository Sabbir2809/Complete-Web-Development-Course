const displayCounties = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => loadCountry(data))
}

const loadCountry = (counties) =>{
  const divContainer = document.getElementById('country-container');
  counties.forEach(country => {
    const divCountry = document.createElement('div');
    divCountry.classList.add('country');
    divCountry.innerHTML = `
      <h3>Country Name: ${country.name.common} </h3>
      <h3>Capital: ${country.capital}</h3>
      <button onclick="loadCountryDetail('${country.cca2}')">Details Info</button>
    `;
    divContainer.appendChild(divCountry);
  });
}

const loadCountryDetail = (code) => {
  // https://restcountries.com/v2/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = (country) => {
  const countryContainer = document.getElementById('country-detail');
  countryContainer.innerHTML = `
    <img src='${country.flags.svg}'>
    <h4>Capital: ${country.capital}</h4>
  `;
}

displayCounties();
