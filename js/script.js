import { menuContent } from "./lib/menuContent.js";

// MENU ALL CATEGORIES
const selectCategory = document.getElementById("categorySelect")

selectCategory.addEventListener("click", () => {

    menuContent.forEach(value => {
        // console.log(value)
        const imgSrc = value.imgSrc
        const text = value.text
        const subMenu = value.subMenu
        const option = document.createElement("option")
        option.innerHTML = `
        <img src="${imgSrc}" alt="">
        <a href="">${text}</a>
        `
        const div = document.createElement("div")
        div.classList.add("absolute", "top-0", "bg-white", "text-gray-500")

        // SUB MENU
        subMenu.forEach(item => {
            // console.log(item.text)

        })

        document.body.append(div.subMenu)
        selectCategory.append(option)
    });

})

// CARROUSEL
const slider = document.getElementById("container")
const img = slider.getElementsByClassName("img")
const nbImg = img.length

// CHANGE IMAGE AND TEXT
let current = 0;
setInterval(() => {
    current++
    if (current >= nbImg) {
        current = 0;
    }
    deleteActive()
    img[current].classList.add("active")
}, 5000);

// DELETE ACTIVE
const deleteActive = () => {
    for (let i = 0; i < nbImg; i++) {
        img[i].classList.remove("active");
    }
    text1.textContent = textsa[current] || "";
    text2.textContent = textsb[current] || "";
}
// TEXT
const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")

const textsa = ["Save 30% Now!", "New arrivals every week!", "You can Lorem Ipsum!"]
const textsb = ["Summer Sale For Moto Parts", "Holidays Sale For Moto Parts", "Automn Sale For Moto Parts"]

// DISABLED SOLDOUT/SALE
const tag = document.querySelectorAll(".tag");
if (tag[1]) tag[1].style.display = "none";
if (tag[2]) tag[2].style.display = "none";
if (tag[4]) tag[4].style.display = "none";
if (tag[5]) tag[5].style.display = "none";
if (tag[7]) tag[7].style.display = "none";

// SHOPNOW HOVER PRODUCT
const product = document.querySelectorAll('.product')
for (let i = 0; i < product.length; i++) {
    product[i].classList.add("relative", "group")
    const button = document.createElement('button')
    const shadow = product[i].querySelector('.shadow');
    shadow.classList.add("group-hover:block")
    button.classList.add("py-1", "w-[50%]", "text-white", "bg-[#FFB700]", "absolute", "top-1/2", "left-1/2", "translate-x-[-50%]", "translate-y-[-50%]", "hidden", "group-hover:block")
    button.textContent = "SHOP NOW"
    button.style.zIndex = "51"
    button.addEventListener("click", () => {
        addCart()
    })
    product[i].append(button)
}

// ADD PRODUCT TO CART
const cart = document.getElementById("cart")
let count = 0;
const addCart = () => {

    count = count + 1
    cart.textContent = count

}