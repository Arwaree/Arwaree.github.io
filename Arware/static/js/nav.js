window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    var hero = document.getElementById('hero');
    header.classList.toggle('scroll',window.scrollY>0);
    hero.classList.toggle('scroll',window.scrollY>0);
    console.log(Window.scroll());
})

