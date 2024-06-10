
// Når man klikker på "Projekt oversigt" knappen, skiftes der mellem at skjule go vise indholdet i rullemenu.
// Funktionen finder id elementet "myDropdown" og toggler klassen "show". 
// Altså tilføjer "show" hvis den ikke er tilstede, og fjerne hvis den er. 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
//   Nedenfor vises hvordan man får rullemenuen væk igen, ved at klikke udenfor boksen
// "window.onclick" lytter efter klik.
// Funktionen lytter om det element ("event.target") hvor der klikkes, ikke har klassen "dropbtn"
// Hvis der klikkes udenfor knappen, hentes alle elementer med klassen "dropdown-content".

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
// "if" et element har klassen Show, fjernes den.
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }