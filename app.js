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