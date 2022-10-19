// Do Not show API KEY on your JS File
const API_KEY = `c41e48d76269f002c43d3cc9db0cc09d`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  setInnerTextById('temperature', data.main.temp);
  setInnerTextById('condition', data.weather[0].main);
};

const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};

document.getElementById('btn-search').addEventListener('click', function () {
  const searchField = document.getElementById('input-field');
  const city = searchField.value;
  document.getElementById('city').innerText = city;
  loadTemperature(city);
});

loadTemperature('dhaka');
