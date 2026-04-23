const homeBtn = document.getElementById('homeBtn');
const gamesBtn = document.getElementById('gamesBtn');
const libraryBtn = document.getElementById('libraryBtn');
const buttons = document.querySelectorAll('#homeBtn, #gamesBtn, #libraryBtn');
const search = document.getElementById('search');
const btnbuy = document.getElementById('btnbuy');
const buttonbuy = document.getElementById('buttonbuy');
const buttonbuys = document.getElementById('buttonbuys');





buttonbuy.addEventListener('mouseover', () => {
    buttonbuy.style.backgroundColor = '#8ea6ff';
});

buttonbuy.addEventListener('mouseout', () => {
    buttonbuy.style.backgroundColor = '#5865F2';
});

buttonbuys.addEventListener('mouseover', () => {
    buttonbuys.style.backgroundColor = '#8ea6ff';
});

buttonbuys.addEventListener('mouseout', () => {
    buttonbuys.style.backgroundColor = '#5865F2';
});


const images1 = [
    "WhatsApp Image 2026-03-01 at 11.00.11.jpeg",
    "WhatsApp Image 2026-03-01 at 10.59.24.jpeg"
];

const prices1 = [
    "₸12999",
    "₸9800"
];

const images2 = [
    "https://cdn.alza.cz/Foto/ImgGalery/Image/resident-evil-4-remake-recenze-cover.jpg",
    "https://i.ytimg.com/vi/WaXHnQq_HPg/maxresdefault.jpg"
];

const prices2 = [
    "₸17999",
    "₸8700"
];

const slider1 = document.getElementById("slider1");
const price1 = document.getElementById("price1");

const slider2 = document.getElementById("slider2");
const price2 = document.getElementById("price2");

let index1 = 0;
let index2 = 0;

function changeSlider1(){
    slider1.src = images1[index1];
    price1.textContent = prices1[index1];

    index1++;

    if(index1 >= images1.length){
        index1 = 0;
    }
}

function changeSlider2(){
    slider2.src = images2[index2];
    price2.textContent = prices2[index2];

    index2++;

    if(index2 >= images2.length){
        index2 = 0;
    }
}

setInterval(changeSlider1, 2000);
setInterval(changeSlider2, 2000);



const buyButtons = document.querySelectorAll('.buy-btns');
buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;

        let library = JSON.parse(localStorage.getItem('library')) || [];

        if (!library.includes(game)) {
            library.push(game);
            localStorage.setItem('library', JSON.stringify(library));
            alert('Игра куплена и добавлена в библиотеку ✅');
        } else {
            alert('У тебя уже есть эта игра ');
        }
    });
});


const screenshots = document.querySelectorAll('.photos img');

screenshots.forEach(img => {
    img.addEventListener('click', () => {
        const game = img.dataset.game;

        let library = JSON.parse(localStorage.getItem('library')) || [];

        if (!library.includes(game)) {
            library.push(game);
            localStorage.setItem('library', JSON.stringify(library));
            alert('Куплено ✅');
        } else {
            alert('Уже есть 😎');
        }
    });
});














