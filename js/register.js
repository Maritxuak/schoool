const input = document.querySelector('.passo');
const button = document.querySelector('.password__btn');



button.addEventListener('click', function () {
    if(input.type == 'text')
     return input.type = 'password';
  return input.type = 'text';
});

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("anar1").classList.toggle("joi")

    document.getElementById("Anna_ipolitovna").classList.toggle("Love")
    document.getElementById("Anna_ipolitovna2").classList.toggle("Love2")


}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn1')) {
        var dropdowns = document.getElementsByClassName(".dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("anar2").classList.toggle("joi")

    document.getElementById("Anna_ipolitovna2z").classList.toggle("Love21")
    document.getElementById("Anna_ipolitovna22").classList.toggle("Love22")
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn2')) {
        var dropdowns = document.getElementsByClassName(".dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
    document.getElementById("anar3").classList.toggle("joi")


    document.getElementById("Anna_ipolitovna31").classList.toggle("Love31")
    document.getElementById("Anna_ipolitovna32").classList.toggle("Love32")
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn3')) {
        var dropdowns = document.getElementsByClassName(".dropdown-content3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}