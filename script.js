const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    title: "Пвх материал 2й сорт 1",
    price: "171 Р",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-image.png",
  },
  {
    id: 1,
    title: "Пвх материал 2й сорт 2",
    price: "172",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-image.png",
  },
  {
    id: 2,
    title: "Пвх материал 2й сорт 3",
    price: "173",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-image.png",
  },
  {
    id: 3,
    title: "Пвх материал 2й сорт 4",
    price: "174",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-image.png",
  },
  {
    id: 4,
    title: "Пвх материал 2й сорт 5",
    price: "175",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-image.png",
  },
  {
    id: 5,
    title: "Пвх материал 2й сорт 6",
    price: "176",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-image.png",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";

  cardList.forEach((item, id) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <a href="/product.html" class="content-main__list-item">
            <div class="content-main__list-item--img">
                <img src="${item.img}" alt="card-image" />
            </div>
            <h5 class="content-main__list-item--title">
                ${item.title}
            </h5>
            <strong class="content-main__list-item--price">${item.price} ₽</strong>
            <div class="content-main__list-item--desc-box">
                <span class="content-main__list-item--desc">${item.address}</span>
                <span class="content-main__list-item--desc">${item.date}</span>
            </div>
        </a>
            `
    );
  });
};

const filteredArray = (array, value) => {
  return array.filter((itemm) => {
    return itemm.title.includes(value) || itemm.price.includes(value);
  });
};

cardWrapper.style.justifyContent = "flex-start";
cardWrapper.style.gap = "30px";

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filteredArray(cardArray, searchInput.value));
});
