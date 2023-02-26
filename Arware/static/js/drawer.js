let seccion = document.querySelectorAll('.servicios')
let seccion_rev = document.querySelectorAll('.servicios-revers')
let titulo = document.querySelectorAll('.ses')
let titulo_rev = document.querySelectorAll('.ses-rev')
let img = document.querySelectorAll('.serv-img')
let img_rev = document.querySelectorAll('.serv-img-rev')

for (let i = 0; i < seccion.length; i++) {
    seccion[i].addEventListener('click',function(){
        seccion[i].classList.toggle('open');
        titulo[i].classList.toggle('open');
        img[i].classList.toggle('open');
    })

}

for (let i = 0; i < seccion_rev.length; i++) {
    
    seccion_rev[i].addEventListener('click',function(){
        seccion_rev[i].classList.toggle('open');
        titulo_rev[i].classList.toggle('open');
        img_rev[i].classList.toggle('open');
    })

}
