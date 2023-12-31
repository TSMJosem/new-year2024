var audio = document.getElementById('Carry-Me-Home');
var audio1 = document.getElementById('Andar-Conmigo');
var audio2 = document.getElementById('Limon-Sal');
var video = document.getElementById('video');
var contador = document.getElementById('conteo');
var verificar = false;

window.onload = function() {
        var imagenes = document.getElementsByTagName('img');
        for (var i = 0; i < imagenes.length; i++) {
            imagenes[i].style.display = 'block'; // Asume que inicialmente el display es 'none'
        }// Ajusta el tiempo según tus necesidades
}

// var swiper = new Swiper('.mySwiper', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: verificar,
//     },
//     coverflowEffect: {
//         rotate: 15,
//         stretch: 0,
//         depth: 300,
//         modifier: 1,
//         slideShadows: true,
//     },
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//     },
// });
// const titulo = document.getElementById('titulo');
// const mensajecorto = document.getElementById('mensajecorto'); 

const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2500,
        disableOnInteraction: verificar,
    },
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});
//Variables generadas por Copilot en forma de arreglo
const [titulo, mensajecorto] = [document.getElementById('titulo'), document.getElementById('mensajecorto')];
const mensajelargo = document.getElementById('section2024');
var swipercontenedor = document.querySelector('.mySwiper');
var swiperfotos = document.getElementsByTagName('img');

if (swiper.on('slideChange', function () {
    verificar = true;
    })) {
}

document.body.onclick = play;

// function play() { //Código generado por mí para la muestra del Conteo
//         document.body.onclick = null;
//         audio.currentTime = 130;
//         audio1.currentTime = 0.0;
//         audio1.volume = 0.1;
//         audio.volume = 0.2;
//         audio.play();

//         setTimeout(function() {
//             contador.innerHTML = 'Espera...';
//             contador.style.animation = 'aparecerDesaparecer 2.3s infinite';
//         }, 1000);
//         setTimeout(function() {
//             video.play(); 
//          }, 7000);
//         setTimeout(function() {
//             contador.style.animation = 'none';
//             video.playbackRate = 0.2;
//             contador.innerHTML = 'Te demostraré que todo es posible, si te lo propones.';
//          }, 7500);
//         setTimeout(function() {
//             contador.innerHTML = '¿Estás lista?';
//          }, 10500);
//         setTimeout(function() {
//             contador.innerHTML = '1';
//          }, 11500);
//         setTimeout(function() {
//             contador.innerHTML = '2';
//          }, 12500);
//         setTimeout(function() {
//             contador.innerHTML = '1';
//          }, 13500);
//         setTimeout(function() {
//             contador.innerHTML = '2';
//          }, 14000);
//         setTimeout(function() {
//             contador.innerHTML = '3';
//          }, 14500);
//         setTimeout(function() {
//             contador.style.display = 'none';
//             video.playbackRate = 1;
//          }, 14900);
//         setTimeout(function() {
//             titulo.style.display = 'block';
//             mensajecorto.style.display = 'block';
//             mensajelargo.style.display = 'block';
//             swipercontenedor.style.display = 'block';
//          }, 15100);
//         setTimeout(function() {  
//             audio1.play();
//             setInterval(function() {
//                 audio.volume -= 0.05;
                
//                 while (audio1.volume <= 0.5) {
//                     audio1.volume += 0.001;
//                 }

//             }, 500);
//          }, 60000);
// }

function play() {//Código generado por Copilot para la muestra del Conteo
    document.body.onclick = null;
    contador.style.animation = 'none';
    video.playbackRate = 0.2;
    audio.currentTime = 2047;
    audio1.currentTime = 0.0;
    audio2.currentTime = 0.0;
    audio1.volume = 0.5;
    audio.volume = 0.2;
    audio.play();

    const setCountdown = (message, delay) => {
        setTimeout(() => {
            contador.innerHTML = message;
        }, delay);
    };

    setTimeout(() => {
        contador.style.animation = 'aparecerDesaparecer 2.3s infinite';
    }, 1000);

    setTimeout(() => {
        contador.style.animation = 'none';
    }, 7500);

    setTimeout(() => {
        video.play(); 
    }, 5800);

    setCountdown('Espera...', 1000);
    setCountdown('Espera...', 3200);
    setCountdown('Espera...', 5500);
    setCountdown('Te demostraré que todo es posible, si te lo propones.', 7500);
    setCountdown('¿Estás lista?', 10500);
    setCountdown('1', 11400);
    setCountdown('2', 12400);
    setCountdown('1', 13200);
    setCountdown('2', 13700);
    setCountdown('3', 14180);
    //setCountdown('Vamos', 14600);

    setTimeout(() => {
        contador.style.display = 'none'; 
        video.playbackRate = 1;
        titulo.style.display = 'block';
        mensajecorto.style.display = 'block';
        mensajelargo.style.display = 'block';
    }, 14800);

    setTimeout(() => {
        titulo.style.animation = 'none';
        mensajecorto.style.animation = 'none';
        mensajelargo.style.animation = 'none';
    }, 15000);

    setTimeout(() => {
        mensajecorto.style.display = 'none';
        contador.style.display = 'block';
        contador.style.marginTop = '20%';
    }, 30000);

    setCountdown('Espera a la sorpresa', 30000);
    setTimeout(() => {
        contador.style.animation = 'aparecerDesaparecer 3s linear infinite';
    }, 30000);
    setCountdown('Aquí viene jsjs', 57000);
    setCountdown('Espero y te guste^^', 60000);

    setTimeout(() => {
        audio.volume = 0.08;
        audio1.play();
        document.querySelector('.mySwiper').style.animationPlayState = 'running';
        swipercontenedor.style.display = 'block';
    }, 58000);

    setTimeout(() => {
        contador.style.display = 'none';
    }, 63000);

    setTimeout(() => {
        audio1.volume = 0.08;
    }, 246750);

    setTimeout(() => {
        audio2.volume = 0.5;
        audio2.play();
    }, 246750);
}