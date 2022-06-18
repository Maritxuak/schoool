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
    s1.classList.add('fir')
    s2.classList.add('fir')
    s3.classList.add('fir')
    s4.classList.add('fir')
    console.log('Z')
}
slide_second.onclick = function(){
    slide_second.classList.add('active')
    slide_first.classList.remove('active')
    slide_third.classList.remove('active')
    slide_fourth.classList.remove('active')
    s1.style.transform = 'translateY(-106%)';
    s2.style.transform = 'translateY(-106%)';
    s3.style.transform = 'translateY(-106%)';
    s4.style.transform = 'translateY(-106%)';
}
slide_third.onclick = function(){
    slide_third.classList.add('active')
    slide_first.classList.remove('active')
    slide_second.classList.remove('active')
    slide_fourth.classList.remove('active')
    s1.style.transform = 'translateY(-213%)';
    s2.style.transform = 'translateY(-213%)';
    s3.style.transform = 'translateY(-213%)';
    s4.style.transform = 'translateY(-213%)';
}
slide_fourth.onclick = function(){
    slide_fourth.classList.add('active')
    slide_first.classList.remove('active')
    slide_second.classList.remove('active')
    slide_third.classList.remove('active')
    s1.style.transform = 'translateY(-322%)';
    s2.style.transform = 'translateY(-322%)';
    s3.style.transform = 'translateY(-322%)';
    s4.style.transform = 'translateY(-322%)';
}