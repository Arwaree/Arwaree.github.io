var carta = document.querySelector('.contenedor-carta');

var accion = document.querySelector('.accionar');

carta.addEventListener('click',function(){
    var cosasCartas = document.querySelectorAll('[id=carta]')

    for (let index = 0; index < cosasCartas.length; index++) {
        cosasCartas[index].classList.toggle('mostrar');
        
    }
    
})

accion.addEventListener('click',function(){
    carta = document.querySelector('.contenedor-carta')
    carta.classList.toggle('mover');

})