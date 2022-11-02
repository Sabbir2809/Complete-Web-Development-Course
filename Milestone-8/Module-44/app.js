const loadCountries = () => {
  const url = `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCounties(data));
};

const displayCounties = (counties) => {
  const allCountiesHTML = counties.map((country) => getCountryHTML(country));
  console.log(allCountiesHTML[0]);
  const container = document.getElementById("countries");
  container.innerHTML = allCountiesHTML.join(" ");
};

// --------------- Option-1 --------------------
// const getCountryHTML = (country) => {
//   const { name, flags, subregion } = country;
//   return `
//     <div class="country">
//       <img src="${flags.png}" alt="Flag">
//       <h3>${name.common}</h3>
//       <p>${subregion}</p>
//     </div>
//   `;
// };

// --------------- Option-2 --------------------
const getCountryHTML = ({ name, flags, subregion }) => {
  return `
    <div class="country">
      <img src="${flags.png}" alt="Flag">
      <h3>${name.common}</h3>
      <h4>${subregion}</h4>
    </div>
  `;
};

loadCountries();
