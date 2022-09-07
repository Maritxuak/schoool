function Burger(){
    document.getElementById("wrapper_okno").classList.toggle("zaktito")
    document.getElementById("wrapper2_zak").classList.toggle("close")
}
function krestik(){
    document.getElementById("wrapper_okno").classList.remove("zaktito")
    document.getElementById("wrapper2_zak").classList.remove("close")
}

function spisok(){
    document.getElementById("xoxol").classList.toggle("xaxol")
    document.getElementById("xoxol2").classList.toggle("xaxol")
    document.getElementById("xoxol3").classList.toggle("xaxol")
    
}

function spisok2(){
    document.getElementById("kykold").classList.toggle("xaxol2")
    document.getElementById("xoxol2").classList.toggle("xaxol2")
    document.getElementById("xoxol3").classList.toggle("xaxol2")
}

function spisok3(){
    document.getElementById("kykold").classList.toggle("xaxol2")
    document.getElementById("xoxol").classList.toggle("xaxol2")
    document.getElementById("xoxol3").classList.toggle("xaxol2")
}

function spisok4(){
    document.getElementById("kykold").classList.toggle("xaxol2")
    document.getElementById("xoxol2").classList.toggle("xaxol2")
    document.getElementById("xoxol").classList.toggle("xaxol2")
}
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
