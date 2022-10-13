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

function Counter(incrementButton, decrementButton, inputField, minCount = 1, maxCount = 5) {
    this.domRefs = { // объект, который будет иметь ссылку на dom элемент
        incrementButton,
        decrementButton,
        inputField,
    };
    this.toggleButtonState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementButton.disabled = count <= minCount;
        this.domRefs.incrementButton.disabled = count >= maxCount;
    }

    this.toggleButtonState();

    this.increment = function() {
        console.log(this);
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
    }

    this.decrement = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
    }
    // console.log(this);

    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
}


let counter1 = new Counter(
    incrementButtons[0],
    decrementButtons[0],
    productQuantity[0],
)

let counter2 = new Counter(
    incrementButtons[1],
    decrementButtons[1],
    productQuantity[1],
)

let counter3 = new Counter(
    incrementButtons[2],
    decrementButtons[2],
    productQuantity[2],
)

let counter4 = new Counter(
    incrementButtons[3],
    decrementButtons[3],
    productQuantity[3],
)

let counter5 = new Counter(
    incrementButtons[4],
    decrementButtons[4],
    productQuantity[4],
)

let counter6 = new Counter(
    incrementButtons[5],
    decrementButtons[5],
    productQuantity[5],
)

let counter7 = new Counter(
    incrementButtons[6],
    decrementButtons[6],
    productQuantity[6],
)

let counter8 = new Counter(
    incrementButtons[7],
    decrementButtons[7],
    productQuantity[7],
)

let counter9 = new Counter(
    incrementButtons[8],
    decrementButtons[8],
    productQuantity[8],
)



// console.log(counter1)