window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('scroll',window.scrollY>0);
})

// window.addEventListener('click', function(){
//     var section = document.getElementById('serv');
//     var titulo = document.getElementById('titulo');
//     var img = document.getElementById('img');
//     section.classList.toggle('open');
//     titulo.classList.toggle('open');
//     img.classList.toggle('open');
// })
