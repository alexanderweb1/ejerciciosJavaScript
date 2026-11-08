const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const euros = parseFloat(document.getElementById('euros').value) || 0;
    const dolares = parseFloat(document.getElementById('dolares').value) || 0;

    const cotizacion = euros * dolares;

    document.getElementById('textoResultado').textContent = cotizacion.toFixed(2);
});