const loadQuote = () => {
  fetch('https://api.kanye.rest')
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  const newQuote = document.getElementById('quote');
  newQuote.innerText = '" ' + quote.quote + ' "';
};
