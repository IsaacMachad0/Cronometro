function CriarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        // hour12: false,
        timeZone: 'GMT'
    });
}

const cronometro = document.querySelector(".cronometro");
const iniciar = document.querySelector(".iniciar");
const parar = document.querySelector(".parar");
const reiniciar = document.querySelector(".reiniciar");
let segundos = 0;
let timer;

function iniciarCronometro() {
    timer = setInterval(function() {
        segundos++;
        cronometro.innerHTML = CriarHoraDosSegundos(segundos);
    }, 1000);
}


iniciar.addEventListener("click", function() {
    cronometro.classList.remove("pausado");
    clearInterval(timer);
    iniciarCronometro();
});

parar.addEventListener("click", function() {
    cronometro.classList.add("pausado");
    clearInterval(timer);
});

reiniciar.addEventListener("click", function() {
    clearInterval(timer);
    cronometro.innerHTML = '00:00:00';
    segundos = 0;
});

