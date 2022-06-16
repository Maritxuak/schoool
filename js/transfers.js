var sl1 = document.querySelector('.slot_1')
var sl1g = document.querySelector('.b1')
var sl2 = document.querySelector('.slot_2')
var sl2g = document.querySelector('.b2')
var sl3 = document.querySelector('.slot_3')
var sl3g = document.querySelector('.b3')
var sl4 = document.querySelector('.slot_4')
var sl4g = document.querySelector('.b4')
var sl5 = document.querySelector('.slot_5')
var sl5g = document.querySelector('.b5')
var sl6 = document.querySelector('.slot_6')
var sl6g = document.querySelector('.b6')
var sl7 = document.querySelector('.slot_7')
var sl7g = document.querySelector('.b7')
sl1g.onclick = function(){
    sl1.classList.remove('activation_withdraw')
    sl1c.classList.remove('active_b')
    sl1g.classList.toggle('active_b')
    sl1.classList.toggle('activation')
}
sl2g.onclick = function(){
    sl2.classList.remove('activation_withdraw')
    sl2c.classList.remove('active_b')
    sl2g.classList.toggle('active_b')
    sl2.classList.toggle('activation')
}
sl3g.onclick = function(){
    sl3.classList.remove('activation_withdraw')
    sl3c.classList.remove('active_b')
    sl3g.classList.toggle('active_b')
    sl3.classList.toggle('activation')
}
sl4g.onclick = function(){
    sl4.classList.remove('activation_withdraw')
    sl4c.classList.remove('active_b')
    sl4g.classList.toggle('active_b')
    sl4.classList.toggle('activation')
}
sl5g.onclick = function(){
    sl5.classList.remove('activation_withdraw')
    sl5c.classList.remove('active_b')
    sl5g.classList.toggle('active_b')
    sl5.classList.toggle('activation')
}
sl6g.onclick = function(){
    sl6.classList.remove('activation_withdraw')
    sl6c.classList.remove('active_b')
    sl6g.classList.toggle('active_b')
    sl6.classList.toggle('activation')
}
sl7g.onclick = function(){
    sl7.classList.remove('activation_withdraw')
    sl7c.classList.remove('active_b')
    sl7g.classList.toggle('active_b')
    sl7.classList.toggle('activation')
}
function scrollTo(element){
    window.scroll({
        left: 0,
        top: window.pageYOffset,
        behavior: 'smooth'
    })
}
var sl1c = document.querySelector('#b1c')
var sl2c = document.querySelector('#b2c')
var sl3c = document.querySelector('#b3c')
var sl4c = document.querySelector('#b4c')
var sl5c = document.querySelector('#b5c')
var sl6c = document.querySelector('#b6c')
var sl7c = document.querySelector('#b7c')
sl1c.onclick = function(){
    sl1.classList.remove('activation')
    sl1g.classList.remove('active_b')
    sl1c.classList.toggle('active_b')
    sl1.classList.toggle('activation_withdraw')
}
sl2c.onclick = function(){
    sl2.classList.remove('activation')
    sl2g.classList.remove('active_b')
    sl2c.classList.toggle('active_b')
    sl2.classList.toggle('activation_withdraw')
}
sl3c.onclick = function(){
    sl3.classList.remove('activation')
    sl3g.classList.remove('active_b')
    sl3c.classList.toggle('active_b')
    sl3.classList.toggle('activation_withdraw')
}
sl4c.onclick = function(){
    sl4.classList.remove('activation')
    sl4g.classList.remove('active_b')
    sl4c.classList.toggle('active_b')
    sl4.classList.toggle('activation_withdraw')
}
sl5c.onclick = function(){
    sl5.classList.remove('activation')
    sl5g.classList.remove('active_b')
    sl5c.classList.toggle('active_b')
    sl5.classList.toggle('activation_withdraw')
}
sl6c.onclick = function(){
    sl6.classList.remove('activation')
    sl6g.classList.remove('active_b')
    sl6c.classList.toggle('active_b')
    sl6.classList.toggle('activation_withdraw')
}
sl7c.onclick = function(){
    sl7.classList.remove('activation')
    sl7g.classList.remove('active_b')
    sl7c.classList.toggle('active_b')
    sl7.classList.toggle('activation_withdraw')
}
function scrollTo(element){
    window.scroll({
        left: 0,
        top: window.pageYOffset,
        behavior: 'smooth'
    })
}

let posTop = window.pageYOffset;
var block_1 = document.querySelector('.section_lower_bottom')
var block_2 = document.querySelector('.section_lower_history')
var btm_1 = document.querySelector('.section_upper_down_left_btm1')
var btm_2 = document.querySelector('.section_upper_down_left_btm2')
btm_1.onclick = function(){
    btm_1.classList.add('active')
    btm_2.classList.remove('active')
    block_1.classList.add('only')
    block_2.classList.remove('only')
}
btm_2.onclick = function(){
    btm_2.classList.add('active')
    btm_1.classList.remove('active')
    block_2.classList.add('only')
    block_1.classList.remove('only')
}
