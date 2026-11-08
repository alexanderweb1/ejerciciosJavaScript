let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const cateto1 = parseFloat(document.getElementById('cateto1').value) || 0;
    const cateto2 = parseFloat(document.getElementById('cateto2').value) || 0;

    const hipotenusa = (cateto1 * cateto1) + (cateto2 * cateto2);

    document.getElementById('textoResultado').textContent = hipotenusa.toFixed(2);

});