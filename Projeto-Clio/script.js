const botao = document.querySelectorAll('.button');

botao.forEach(function(button) {
    button.addEventListener('click', function() {
        window.open('https://wa.me/5511931481338?text=Tenho interesse em saber mais sobre o Clio!', '_blank'); 
    });
});