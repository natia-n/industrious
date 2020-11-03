const menuSia=document.getElementById('menuSia'); //gamochndes//
const divMenu=document.getElementById('divMenu'); //movusminot//

divMenu.addEventListener('click', menu);

function menu (e){
    e.preventDefault(); //a ლინკზე რომ არ გადავიდეს ან განახლება არ გააკეთოს//
    menuSia.classList.toggle("show"); //თუ აქვს show კლასი - გაუქროს, თუ არა - გაუაქტიუროს//
};