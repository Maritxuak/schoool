function showPassword(){
    const btn = document.querrySelector('.password__btn')
    const input = document.querrySelector('.rad')

    btn.addEventListener('click',() => {
        btn.classList.toggle('active')

        if(input.getAttribute('type') === 'password'){
            input.setAttribute('type','text')
        } else{
            input.setAttribute('type','password')
        }
    })
}
showPassword()