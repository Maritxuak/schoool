var menuf = document.querySelector('.osm_right_wrapper_profile')
var menus = document.querySelector('.osm_right_wrapper_change')
var mainf = document.querySelector('.osn_middle_wrapper_first')
var mains = document.querySelector('.osn_middle_wrapper_second')
menuf.onclick = function (){
    menuf.classList.add('active')
    menus.classList.remove('active')
    mainf.classList.add('action')
    mains.classList.remove('action')
}
menus.onclick = function (){
    menus.classList.add('active')
    menuf.classList.remove('active')
    mains.classList.add('action')
    mainf.classList.remove('action')
}