let productsCount = document.getElementById("products-count") // getElementById потому что элемент один
console.log(productsCount)

let addToCartButtons = document.querySelectorAll(".add-to-cart") // querySelectorAll потому что элементов много
console.log(addToCartButtons);

addToCartButtons.forEach((item) => {
    item.addEventListener("click", function () {
        productsCount.textContent = +productsCount.textContent + 1;
    });
})


let like = document.querySelectorAll(".like")
console.log(like)

like.forEach((item) => {
    item.addEventListener("click", function () {
        item.classList.toggle("liked") // если есть класс like - ставит liked, если нет - ставит like
    })
})

let modal = document.querySelector(".modal") // querySelector потому что элемент один
let moreDetailsButton = document.querySelectorAll(".more-details") // querySelectorAll потому что элементов more-details много
let closeButton = document.querySelector(".buttonClose")

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

moreDetailsButton.forEach((item) => {
    item.addEventListener("click", openModal)
})

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeButton.addEventListener("click", closeModal)

modal.addEventListener("click", function (event) {
    // event.preventDefault()
    if(event.target === modal) {
        closeModal();
    }
})

// взято и скачано с сайта https://kenwheeler.github.io/slick/
$(".slider").slick( {
    dots: true,
});


function showModalByScroll () {
    if (window.pageYOffset > document.body.scrollHeight/2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll)
    }
}

window.addEventListener("scroll", showModalByScroll)

AOS.init();


// change product quantity

// обычные функции (с большим количеством данных не удобно)
// let audi = {
//     year:"2012",
//     color:"black",
//     model: "A4",
// }

// let bmw = {
//     year:"2008",
//     color:"grey",
//     model: "328",
// }

// функция конструктор (более удобная)
// function Car(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     console.log("this", this);
//     this.hi = function() {
//         this.model
//     }
// }

// let audi = new Car("A4", 2012, "black")
// let bmw = new Car("328", 2009, "grey")
// console.log(audi);

let incrementButtons = document.querySelectorAll(".increment")
let decrementButtons = document.querySelectorAll(".decrement")
let productQuantity = document.querySelectorAll(".product-quantity input")

function Counter(incrementButton, decrementButton, inputField, minCount = 1, maxCount = 5) { // функция конструктор, которая принимает информацию по кнопкам инкремент, декремент, полю (input) и задаём информацию по минимальному и максимальному значению
    this.domRefs = { // объект, который будет иметь ссылку на dom элемент (запись данных функции в объект)
        incrementButton,
        decrementButton,
        inputField,
    };
    this.toggleButtonState = function () { // метод отключения кнопки минус и плюс, если они заходят в минимум или максимум
        let count = this.domRefs.inputField.value; // записываем в count значение input
        this.domRefs.decrementButton.disabled = count <= minCount; // отключаем минус, если он доходит до минимума
        this.domRefs.incrementButton.disabled = count >= maxCount; // отключаем плюс, если он доходит до максимума
    }

    this.toggleButtonState(); // вызываем функцию отключения

    this.increment = function() { // функция инкремент увеличивает значение input на 1 при нажатии на плюс
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1; // при нажатии на плюс увеличивает значение input на 1
        this.toggleButtonState(); // проверка, является ли значение минимальным или максимальным
    }

    this.decrement = function() { // функция декремент уменьшает значение input на 1 при нажатии на минус
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1; // при нажатии на минус уменьшает значение input на 1
        this.toggleButtonState(); // проверка, является ли значение минимальным или максимальным
    }

    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this)); // при нажатии на плюс запускаем функцию инкремент
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this)); // при нажатии на минус запускаем функцию декремент
}


let counters = [];
productQuantity.forEach((item, i) => (
    counters[i] = new Counter(incrementButtons[i], decrementButtons[i], item)
))


// function test() {
//     console.log(this);
// }

// test();

function hi(surname) {
    console.log(this);
    console.log(this.name, surname);
}

// hi();

let ivan = {
    name: "Ivan",
}

// методы привязки контекста

hi.call(ivan, "Call") // первый метод привязки контекста (нужно записывать surname как текст)
hi.apply(ivan, ["Apply"]) // второй метод привязки контекста (нужно записывать surname как массив)

let test = hi.bind(ivan, "Bind") // третий метод привязки контекста
test()