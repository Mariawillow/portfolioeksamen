/* JavaScript der sætter klassen "active" på    */
/* <div class="hamburger"> og                   */
/* <ul class="nav-menu">                        */
// Der refereres til de HTML klasserne "hamburger og nav-menu".
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Event listener bliver tilføjet, så når der klikkes på "hamburger" kalder den på "mobilMenu".
hamburger.addEventListener("click", mobileMenu);

// "mobilMenu" defineres. 
// Den fortæller at "hambuger" og "navMenu" er aktive. 
// menuen vises.
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Navigationlinks i HTML vælges og der tilføjes eventlistener til dem.
/* JavaScript der sørger for at hvert (forEach) navLink - element tilføjes en 
eventlistener som kalder på "closeMenu" når man klikker på et link*/
// 
const navLink = document.querySelectorAll(".nav-link");


// Til sidst deffineres funktionen "closeMenu".
// "closeMenu" fjerner (remove) "active" i begge elementer. 
// Altså burgermenuen lukkes ned igen, når man klikker på et link.
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


