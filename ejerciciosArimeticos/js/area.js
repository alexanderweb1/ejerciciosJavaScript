const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    // Convertimos los valores a números decimales con parseFloat
    const base = parseFloat(document.getElementById('base').value) || 0;
    const alturaa = parseFloat(document.getElementById('altura').value) || 0;

    // Hacemos la multiplicación
    const area = base * alturaa;

    // Mostramos el resultado en el span correcto
    document.getElementById('textoResultado').textContent = area.toFixed(2);
});