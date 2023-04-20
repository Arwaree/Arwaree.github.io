var imga = document.getElementById('imga');

var number = document.getElementById('ses');

$('#ses').on('input change',function(){
    var shis = $(this).val();

    if(shis >= 100){
        imga.src = 'static/animaciones/app/0' + shis + '.png';
    }
    else if (shis > 9 && shis <= 99){
        imga.src = 'static/animaciones/app/00' + shis + '.png';
    }
    else{
        imga.src = 'static/animaciones/app/000' + shis + '.png';
    }
    
    console.log(shis);
})

function siguiente(numero) {
    console.log(imga.src);
    if(numero >= 100){
        imga.src = 'static/animaciones/app/0' + numero + '.png';
    }
    else if (numero > 9 && numero <= 99){
        imga.src = 'static/animaciones/app/00' + numero + '.png';
    }
    else{
        imga.src = 'static/animaciones/app/000' + numero + '.png';
    }
    numero++;

}

