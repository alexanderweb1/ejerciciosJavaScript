let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    let horas = document.getElementById('horas').value;
    let minutos = document.getElementById('minutos').value;
    let segundos = document.getElementById('segundos').value;

    let seg_totales = (horas * 3600) + (minutos * 60) + segundos;

    document.getElementById('resultado').textContent = "El resultado es: " + seg_totales;
});




// const boton = document.querySelector("button");

//     document.addEventListener("mousemove", function(event) {
//         const rect = boton.getBoundingClientRect();

//         const centroX = rect.left + rect.width / 2;
//         const centroY = rect.top + rect.height / 2;

//         const distanciaX = event.clientX - centroX;
//         const distanciaY = event.clientY - centroY;

//         const distancia = Math.sqrt(
//             distanciaX ** 2 + distanciaY ** 2
//         );

//         if (distancia < 100) {
//             const moverX = distanciaX > 0 ? -60 : 60;
//             const moverY = distanciaY > 0 ? -40 : 40;

//             boton.style.transform =
//                 `translate(${moverX}px, ${moverY}px) scale(1.2)`;
//         } else {
//             boton.style.transform = "translate(0, 0) scale(1)";
//         }
//     });