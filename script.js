// Respuestas de la primera pregunta 
const capital1 = document.getElementById('capital1');
const capital2 = document.getElementById('capital2');
const capital3 = document.getElementById('capital3');

// Respuestas de la segunda pregunta 
const capitalP1 = document.getElementById('capitalP1');
const capitalP2 = document.getElementById('capitalP2');
const capitalP3 = document.getElementById('capitalP3');

// Respuestas de la tercera pregunta 
const capitalS1 = document.getElementById('capitalS1');
const capitalS2 = document.getElementById('capitalS2');
const capitalS3 = document.getElementById('capitalS3');

// Respuestas de la cuarta pregunta 
const capitalC1 = document.getElementById('capitalC1');
const capitalC2 = document.getElementById('capitalC2');
const capitalC3 = document.getElementById('capitalC3');


// Contenedor de la primera pregunta 
const one_respuesta_incorrecta1 = document.getElementById('one_respuesta_incorrecta1');
const one_respuesta_incorrecta2 = document.getElementById('one_respuesta_incorrecta2');
const one_respuesta_correcta = document.getElementById('one_respuesta_correcta');

// Contenedor de la segunda pregunta 
const two_respuesta_incorrecta1 = document.getElementById('two_respuesta_incorrecta1');
const two_respuesta_incorrecta2 = document.getElementById('two_respuesta_incorrecta2');
const two_respuesta_correcta = document.getElementById('two_respuesta_correcta');

// Contenedor de la tercera pregunta 
const three_respuesta_incorrecta1 = document.getElementById('three_respuesta_incorrecta1');
const three_respuesta_incorrecta2 = document.getElementById('three_respuesta_incorrecta2');
const three_respuesta_correcta = document.getElementById('three_respuesta_correcta');

// Contenedor de la cuarta pregunta 
const forth_respuesta_incorrecta1 = document.getElementById('forth_respuesta_incorrecta1');
const forth_respuesta_incorrecta2 = document.getElementById('forth_respuesta_incorrecta2');
const forth_respuesta_correcta = document.getElementById('forth_respuesta_correcta');


let contador = 0;

const respuestas = document.getElementById("onVerificador");
respuestas.addEventListener("click", verificarQuizz);

const resetear = document.getElementById("onResetear");
resetear.addEventListener("click", resetSelection);

const resultado = document.getElementById("resultado");

// Verificar las respuestas
function verificarQuizz() {
    // Logic of the first question
    if (capital1.checked) {
        one_respuesta_incorrecta1.style.background = "#e82131"
    }
    if (capital2.checked) {
        one_respuesta_incorrecta2.style.background = "#e82131"
    }
    if (capital3.checked) {
        one_respuesta_correcta.style.background = "#4e7ffb"
        contador++
    }

    // Logic of the second question
    if (capitalP1.checked) {
        two_respuesta_incorrecta1.style.background = "#e82131"
    }
    if (capitalP2.checked) {
        two_respuesta_incorrecta1.style.background = "#e82131"
    }
    if (capitalP3.checked) {
        two_respuesta_correcta.style.background = "#4e7ffb"
        contador++
    }

    // Logic of the three question
    if (capitalS1.checked) {
        three_respuesta_incorrecta1.style.background = "#e82131"
    }
    if (capitalS2.checked) {
        three_respuesta_correcta.style.background = "#4e7ffb"
        contador++
    }
    if (capitalS3.checked) {
        three_respuesta_incorrecta2.style.background = "#e82131"
    }

    // Logic of the forth question
    if (capitalC1.checked) {
        forth_respuesta_incorrecta1.style.background = "#e82131"
    }
    if (capitalC2.checked) {
        forth_respuesta_incorrecta2.style.background = "#e82131"
    }
    if (capitalC3.checked) {
        forth_respuesta_correcta.style.background = "#4e7ffb"
        contador++
    }
    writeCount()
}
// Llamas a las funciones cuando se presione Enter
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        verificarQuizz()
    }
})

// Escribir el contador
function writeCount() {
    resultado.textContent = 'Cantidades acertadas: ' + contador
    contador = 0
}

// Resetear los checked
function resetSelection() {

    if (capital1.checked || capital2.checked || capital3.checked) {
        capital1.checked = false
        capital2.checked = false
        capital3.checked = false

        one_respuesta_incorrecta1.style.background = "#f3eeee"
        one_respuesta_incorrecta2.style.background = "#f3eeee"
        one_respuesta_correcta.style.background = "#f3eeee"
    }

    if (capitalP1.checked || capitalP2.checked || capitalP3.checked) {
        capitalP1.checked = false
        capitalP2.checked = false
        capitalP3.checked = false

        two_respuesta_incorrecta1.style.background = "#f3eeee"
        two_respuesta_incorrecta2.style.background = "#f3eeee"
        two_respuesta_correcta.style.background = "#f3eeee"
    }

    if (capitalS1.checked || capitalS2.checked || capitalS3.checked) {
        capitalS1.checked = false
        capitalS2.checked = false
        capitalS3.checked = false

        three_respuesta_incorrecta1.style.background = "#f3eeee"
        three_respuesta_incorrecta2.style.background = "#f3eeee"
        three_respuesta_correcta.style.background = "#f3eeee"
    }

    if (capitalC1.checked || capitalC2.checked || capitalC3.checked) {
        capitalC1.checked = false
        capitalC2.checked = false
        capitalC3.checked = false

        forth_respuesta_incorrecta1.style.background = "#f3eeee"
        forth_respuesta_incorrecta2.style.background = "#f3eeee"
        forth_respuesta_correcta.style.background = "#f3eeee"
    }
    writeCount()
}