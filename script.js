const tiempoInput = document.getElementById('tiempoInput');
const botonIniciar = document.getElementById('botonIniciar');
const relojDisplay = document.getElementById('reloj');
const cohete = document.getElementById('cohete');

let cuentaRegresiva;

botonIniciar.addEventListener('click', () => {
    let tiempoRestante = parseInt(tiempoInput.value);

    if (isNaN(tiempoRestante) || tiempoRestante <= 0 || tiempoRestante > 60) {
        alert("Por favor, ingresa un número entre 1 y 60.");
        return;
    }
   
    clearInterval(cuentaRegresiva); // resetear estados previos (por si ya despegó)
    cohete.classList.remove('despegar');
    relojDisplay.innerText = tiempoRestante;

    cuentaRegresiva = setInterval(() => {// Iniciar el temporizador
        tiempoRestante--;
        relojDisplay.innerText = tiempoRestante;

        if (tiempoRestante <= 0) { // Cuando llegue a cero
            clearInterval(cuentaRegresiva);
            lanzamiento();
        }
    }, 1000);
});

function lanzamiento() {
    relojDisplay.innerText = "¡IGNICIÓN!";
    relojDisplay.style.color = "#2ecc71";
    
    cohete.classList.add('despegar');
}