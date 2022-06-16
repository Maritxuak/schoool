var s1 = document.querySelector('.slider_fact_first')
var s2 = document.querySelector('.slider_fact_second')
var s3 = document.querySelector('.slider_fact_third')
var s4 = document.querySelector('.slider_fact_fourth')
var s5 = document.querySelector('.slider_fact_fifth')
var ar_top = document.querySelector('.navigation_top')
var ar_down = document.querySelector('.navigation_down')
var number = document.querySelector('.number_fact_number')
var turn = 1
ar_top.onclick = function(){
    if( turn >= 1 && turn <= 4){
        turn = turn + 1
        number.innerHTML = '0' + turn
    } 
    if( turn == 1){
        s1.classList.add('turn')
        s2.classList.remove('turn')
        s3.classList.remove('turn')
        s4.classList.remove('turn')
        s5.classList.remove('turn')
    } else if( turn == 2){
        s1.classList.remove('turn')
        s2.classList.add('turn')
        s3.classList.remove('turn')
        s4.classList.remove('turn')
        s5.classList.remove('turn')
    } else if( turn == 3){
        s1.classList.remove('turn')
        s2.classList.remove('turn')
        s3.classList.add('turn')
        s4.classList.remove('turn')
        s5.classList.remove('turn')
    } else if( turn == 3){
        s1.classList.remove('turn')
        s2.classList.remove('turn')
        s3.classList.add('turn')
        s4.classList.remove('turn')
        s5.classList.remove('turn')
    } else if( turn == 4){
        s1.classList.remove('turn')
        s2.classList.remove('turn')
        s3.classList.remove('turn')
        s4.classList.add('turn')
        s5.classList.remove('turn')
    } else if( turn == 5){
        s1.classList.remove('turn')
        s2.classList.remove('turn')
        s3.classList.remove('turn')
        s4.classList.remove('turn')
        s5.classList.add('turn')
    }
}
ar_down.onclick = function(){
    if( turn >= 2 && turn <= 5){
        console.log(turn)
        turn = turn - 1
        number.innerHTML = '0' + turn
    }
    if( turn == 1){
        s1.classList.add('turn')
        s2.classList.remove('turn')
        s3.classList.remove('turn')
        s4.classList.remove('turn')
        s5.classList.remove('turn')
    } else if( turn == 2){
        s1.classList.remove('turn')
        s2.classList.add('turn')
        s3.classList.remove('turn')
        s4.classList.remove('turn')
        s5.classList.remove('turn')
    } else if( turn == 3){
        s1.classList.remove('turn')
        s2.classList.remove('turn')
        s3.classList.add('turn')
        s4.classList.remove('turn')
        s5.classList.remove('turn')
    } else if( turn == 3){
        s1.classList.remove('turn')
        s2.classList.remove('turn')
        s3.classList.add('turn')
        s4.classList.remove('turn')
        s5.classList.remove('turn')
    } else if( turn == 4){
        s1.classList.remove('turn')
        s2.classList.remove('turn')
        s3.classList.remove('turn')
        s4.classList.add('turn')
        s5.classList.remove('turn')
    } else if( turn == 5){
        s1.classList.remove('turn')
        s2.classList.remove('turn')
        s3.classList.remove('turn')
        s4.classList.remove('turn')
        s5.classList.add('turn')
    }
}