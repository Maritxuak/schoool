var slider = document.querySelector('.crypto_map')
var slide_first = document.querySelector('.crypto_map_number_slider_first')
var slide_second = document.querySelector('.crypto_map_number_slider_second')
var slide_third = document.querySelector('.crypto_map_number_slider_third')
var slide_fourth = document.querySelector('.crypto_map_number_slider_fourth')
var active = document.querySelector('.active')
slide_first.onclick = function(){
    slide_first.classList.toggle('active')
}
slide_first.onclick = function(){
    slide_second.classList.toggle('active')
}
slide_third.onclick = function(){
    slide_first.classList.toggle('active')
}
slide_fourth.onclick = function(){
    slide_first.classList.toggle('active')
}