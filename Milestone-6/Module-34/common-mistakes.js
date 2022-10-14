// synchronous VS asynchronous

// synchronous
const fetchDataLoad = () => {
  const url = ``;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(error => console.log(error));
};

// asynchronous
const loadDataAsync = async () => {
  const url = ``;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//
console.log(1);
setTimeout(() => {
  console.log(2);
}, [3000]);
console.log(3);

