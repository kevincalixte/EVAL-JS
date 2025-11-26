import { menuContent } from "./lib/menuContent.js";

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
        selectCategory.append(option)    
    });

})

// IMAGE
const slider = document.getElementById("container")
const img = slider.getElementsByClassName("img")
const nbImg = img.length
// TEXTE
const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")

let current = 0;

// DELETE ACTIVE
const deleteActive = () => {

    for (let i = 0; i < nbImg; i++) {
        img[i].classList.remove("active")
    }
}

setInterval(() => {
    current++
    if (current >= nbImg) {
        current = 0;
    }
    deleteActive()
    img[current].classList.add("active")
}, 5000);