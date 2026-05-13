const tiempo = document.getElementById('tiempoInput');
const btnIniciar = document.getElementById('botonIniciar');
const reloj = document.getElementById('reloj');
const cohete = document.getElementById('cohete');

let cuentaRegresiva;

btnIniciar.addEventListener('click', () => {
    let tiempoRestante = parseInt(tiempo.value);

    if (isNaN(tiempoRestante) || tiempoRestante <= 0 || tiempoRestante > 60) {
        alert("Por favor, ingresa un número entre 1 y 60.");
        return;
    }
   
    clearInterval(cuentaRegresiva); // resetear estados previos (por si ya despegó)
    cohete.classList.remove('despegar');
    reloj.innerText = tiempoRestante; 

    cuentaRegresiva = setInterval(() => {// Iniciar el temporizador
        tiempoRestante--;
        reloj.innerText = tiempoRestante;

        if (tiempoRestante <= 0) { // Cuando llegue a cero
            clearInterval(cuentaRegresiva);
            lanzamiento();
        }
    }, 1000);
});

function lanzamiento() {
    reloj.innerText = "¡IGNICIÓN!";
    reloj.style.color = "#2ecc71";
    
    cohete.classList.add('despegar');
}