const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const base = parseFloat(document.getElementById('base').value) || 0;
    const altura = parseFloat(document.getElementById('altura').value) || 0;

    const area = base * altura;

    document.getElementById('textoResultado').textContent = area.toFixed(2);
});