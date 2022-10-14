// API - Data Load
const loadPhones = async (searchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataLimit);
};

// Display Phones
const displayPhones = (phones, dataLimit) => {
  // get phones container
  const phonesContainer = document.getElementById('phones-container');
  // Clear Content
  phonesContainer.textContent = ``;

  // display 12 phones only
  const showAll = document.getElementById('show-all');
  if (dataLimit && phones.length > 9) {
    phones = phones.slice(0, 9);
    showAll.classList.remove('d-none');
  } else {
    showAll.classList.add('d-none');
  }

  // Display No Phones Found
  const noPhoneFound = document.getElementById('no-found-msg');
  if (phones.length === 0) {
    noPhoneFound.classList.remove('d-none');
  } else {
    noPhoneFound.classList.add('d-none');
  }

  phones.forEach((phone) => {
    // Create div container and add class name divContainer
    const divContainer = document.createElement('div');
    divContainer.classList.add('col');
    // divContainer push HTML
    divContainer.innerHTML = `
    <div class="card h-80 p-2 bg-light">
      <img src="${phone.image}" class="card-img-top img-fluid" alt="">
      <div class="card-body">
        <h3 class="card-title bg-success text-center text-white p-2 round">${phone.brand}</h3>
        <div class="text-center text-dark p-2 round">
          <h4 class="card-text">${phone.phone_name}</h4>
          <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Detail</button>
        </div>
      </div>
    </div>
    `;
    // phonesContainer appendChild divContainer
    phonesContainer.appendChild(divContainer);
  });
  // Stop Loader or Loader
  toggleSpinner(false);
};

const processSearch = (dataLimit) => {
  // start Loader
  toggleSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhones(searchText, dataLimit);
};

// Search Phone or Click Button
document.getElementById('btn-search').addEventListener('click', function () {
  processSearch(10);
});

// Search input Field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    processSearch(10);
  }
})

// Spinner
const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById('loader');
  if (isLoading) {
    loaderSection.classList.remove('d-none');
  } else {
    loaderSection.classList.add('d-none');
  }
};

// Not the best way to load  show all
document.getElementById('btn-show-all').addEventListener('click', function () {
  processSearch();
});

const loadPhoneDetails = async(id) =>{
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
}

const displayPhoneDetails = (phone) => {
  console.log(phone);
  const modalTitle = document.getElementById('phoneDetailModalLabel');
  modalTitle.innerText = phone.name;
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
    <p>Release Data: ${phone.releaseDate ? phone.releaseDate : "Date Not Found"}</p>
    <p>Others: ${phone.mainFeatures ? phone.mainFeatures.storage : "Not Found"}</p>
    <p>Others: ${phone.others ? phone.others.Bluetooth : "Not Found"}</p>
    <p>Others: ${phone.mainFeatures.sensor ? phone.mainFeatures.sensor[0] : "No Sensor"}</p>
  `
}

// function Call
loadPhones('apple');
