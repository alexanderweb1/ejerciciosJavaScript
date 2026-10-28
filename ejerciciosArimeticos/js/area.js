const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    const base = (document.getElementById('base').value);
    const alturaa = (document.getElementById('altura').value);

    const area = base * alturaa;

    document.getElementById('resultado').textContent = "Resultado: " + area;

});