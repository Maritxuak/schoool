function myFunction11() {
  document.getElementById("myDropdown11").classList.toggle("show");
  document.getElementById("spikol").classList.toggle("joi")
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn11')) {
      var dropdowns = document.getElementsByClassName(".dropdown-content11");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}