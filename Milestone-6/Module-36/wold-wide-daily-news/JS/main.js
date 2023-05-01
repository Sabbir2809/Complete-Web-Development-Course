//
const loadData = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.data.news_category))
    .catch((error) => console.log(error));
};

//
const displayData = (categories) => {
  const navbar = document.getElementById('navbar');
  categories.forEach((category) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <a onclick="loadNewsInfo('${category.category_id}')" href="#" class="nav-link">${category.category_name}</a>
  `;
    navbar.appendChild(li);
  });
};

//
const loadNewsInfo = (category_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNewsInfo(data.data))
    .catch((error) => console.log(error));
};

const displayNewsInfo = (newsInfo) => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.textContent = '';

  // News Not Found
  const noPhoneFound = document.getElementById('no-found-msg');
  if (newsInfo.length === 0) {
    noPhoneFound.classList.remove('d-none');
  } else {
    noPhoneFound.classList.add('d-none');
  }

  newsInfo.forEach((news) => {
    const div = document.createElement('div');
    div.classList.add('col-md-6');
    div.innerHTML = `
    <div class="col">
      <div class="card shadow-sm">
        <img src="${news.image_url}" class="img-fluid" alt="">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details.slice(0, 300) + '....'}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div>
              <img class="mr-3 rounded-circle img-fluid" src="${
                news.author.img
              }" style="max-width: 50px" />
              <small>${news.author.name}</small>         
            </div>
            
            <small><i class="fa-regular fa-eye"></i> ${news.total_view}</small>
            <small><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i> ${
              news.rating.number
            }</small>
            <div class="btn-group">
              <button onclick="loadNewsDetails('${
                news._id
              }')" type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">Details</button>
            </div>
        </div>
      </div>
    </div>
    `;
    cardContainer.appendChild(div);
  });
};

//
const loadNewsDetails = (news_id) => {
  const url = ` https://openapi.programming-hero.com/api/news/${news_id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNewsDetails(data.data))
    .catch((error) => console.log(error));
};

//
const displayNewsDetails = (news) => {
  const modalTitle = document.getElementById('newsDetailModalLabel');
  modalTitle.innerText = news[0].title;
  const newsDetails = document.getElementById('news-details');
  newsDetails.innerHTML = `
    <p>Today Pick: ${
      news[0].others_info.is_todays_pick ? news[0].others_info.is_todays_pick : 'Date Not Found'
    }</p>
    <p>Tending: ${
      news[0].others_info.is_trending ? news[0].others_info.is_trending : 'Date Not Found'
    }</p>
  `;
};

loadData();
