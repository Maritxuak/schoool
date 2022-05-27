var slider = document.querySelector('.crypto_map_main')
var s1 = document.querySelector('.slide_first')
var s2 = document.querySelector('.slide_second')
var s3 = document.querySelector('.slide_third')
var s4 = document.querySelector('.slide_fourth')
var slide_first = document.querySelector('.crypto_map_number_slider_first')
var slide_second = document.querySelector('.crypto_map_number_slider_second')
var slide_third = document.querySelector('.crypto_map_number_slider_third')
var slide_fourth = document.querySelector('.crypto_map_number_slider_fourth')
var active = document.querySelector('.active')
slide_first.onclick = function(){
    slide_first.classList.add('active')
    slide_second.classList.remove('active')
    slide_third.classList.remove('active')
    slide_fourth.classList.remove('active')
    s1.style.transform = 'translateY(0%)';
    s2.style.transform = 'translateY(0%)';
    s3.style.transform = 'translateY(0%)';
    s4.style.transform = 'translateY(0%)';
}
slide_second.onclick = function(){
    slide_second.classList.add('active')
    slide_first.classList.remove('active')
    slide_third.classList.remove('active')
    slide_fourth.classList.remove('active')
    s1.style.transform = 'translateY(-110%)';
    s2.style.transform = 'translateY(-110%)';
    s3.style.transform = 'translateY(-110%)';
    s4.style.transform = 'translateY(-110%)';
}
slide_third.onclick = function(){
    slide_third.classList.add('active')
    slide_first.classList.remove('active')
    slide_second.classList.remove('active')
    slide_fourth.classList.remove('active')
    s1.style.transform = 'translateY(-211%)';
    s2.style.transform = 'translateY(-211%)';
    s3.style.transform = 'translateY(-211%)';
    s4.style.transform = 'translateY(-211%)';
}
slide_fourth.onclick = function(){
    slide_fourth.classList.add('active')
    slide_first.classList.remove('active')
    slide_second.classList.remove('active')
    slide_third.classList.remove('active')
    s1.style.transform = 'translateY(-311%)';
    s2.style.transform = 'translateY(-311%)';
    s3.style.transform = 'translateY(-311%)';
    s4.style.transform = 'translateY(-311%)';
}