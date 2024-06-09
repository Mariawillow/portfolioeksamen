
// Når man klikker på "Projekt oversigt" knappen, skiftes der mellem at skjule go vise indholdet i rullemenu.
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
//   Nedenfor vises hvordan man får rullemenuen væk igen, ved at klikke udenfor boksen
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }