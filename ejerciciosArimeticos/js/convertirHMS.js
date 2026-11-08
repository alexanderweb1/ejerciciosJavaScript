let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    let horas = Number(document.getElementById('horas').value);
    let minutos = Number(document.getElementById('minutos').value);
    let segundos = Number(document.getElementById('segundos').value);

    let seg_totales = (horas * 3600) + (minutos * 60) + segundos;

    document.getElementById('resultado').textContent = "El resultado es: " + seg_totales;
});

