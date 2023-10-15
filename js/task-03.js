
// const ul = document.querySelector(".gallery")
// ul.classList.add("galery")

// images.forEach(image => {
//   const imgHTML = `<img class="img" src="${image.url}" alt="${image.alt}">`;
//   ul.insertAdjacentHTML("beforeend", `<li>${imgHTML}</li>`);
// });

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery")

images.forEach(image => {

  const img = `<li><img class="img" src="${image.url}" alt="${image.alt}"></img><p class="text">${image.alt}</p></li>`;
  gallery.insertAdjacentHTML("beforeend", img);

});


console.log(gallery);
