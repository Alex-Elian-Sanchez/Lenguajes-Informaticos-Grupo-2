(() => {
    const clave = 'turismo-tema';
    const sistema = window.matchMedia('(prefers-color-scheme: dark)');
    const selector = document.getElementById('modo-tema');
    const opciones = ['system', 'light', 'dark'];
    let preferencia = 'system';
    try {
        const guardada = localStorage.getItem(clave);
        if (opciones.includes(guardada)) preferencia = guardada;
    } catch (error) { /* El selector funciona aunque el almacenamiento esté bloqueado. */ }

    function aplicarTema() {
        const oscuro = preferencia === 'dark' || (preferencia === 'system' && sistema.matches);
        const tema = oscuro ? 'dark' : 'light';
        const ciudad = oscuro ? 'Minas Morgul' : 'Minas Ithil';
        document.documentElement.dataset.bsTheme = tema;
        selector.value = preferencia;
        document.title = ciudad + ' | Portal de Turismo';
        document.querySelector('header h1').textContent = ciudad;
        document.getElementById('descripcion-ciudad').textContent = oscuro
            ? 'La Torre de la Hechicería: brumas y luces verdosas al pie de las Montañas de la Sombra.'
            : 'La Torre de la Luna Naciente: mármol blanco y jardines bajo la luz de la luna.';
        document.getElementById('estado-tema').textContent = 'Modo ' + (oscuro ? 'oscuro' : 'claro') + ' · ' + ciudad;
        const imagen = document.getElementById('imagen-ciudad');
        imagen.src = oscuro ? 'IMG/minas_morgul.jpeg' : 'IMG/minas_ithil.jpg';
        imagen.alt = oscuro ? 'Minas Morgul entre brumas y resplandores verdes' : 'Minas Ithil y sus terrazas de mármol blanco bajo la luna';
        document.getElementById('nombre-imagen').textContent = ciudad;
        document.querySelectorAll('[data-ciudad-tema]').forEach(elemento => {
            elemento.hidden = elemento.dataset.ciudadTema !== tema;
        });
    }

    function guardarTema(valor) {
        preferencia = valor;
        try { localStorage.setItem(clave, valor); } catch (error) { /* Preferencia válida durante esta visita. */ }
        aplicarTema();
    }

    // Los enlaces directos también deben permitir ver la ciudad de destino.
    function seguirEnlaceCiudad() {
        const tema = { '#minas-ithil': 'light', '#minas-morgul': 'dark' }[location.hash];
        if (tema) {
            guardarTema(tema);
            document.querySelector(location.hash)?.scrollIntoView();
        }
    }

    selector.addEventListener('change', () => guardarTema(selector.value));
    sistema.addEventListener('change', () => {
        if (preferencia === 'system') aplicarTema();
    });
    window.addEventListener('storage', evento => {
        if (evento.key === clave || evento.key === null) {
            preferencia = opciones.includes(evento.newValue) ? evento.newValue : 'system';
            aplicarTema();
        }
    });
    window.addEventListener('hashchange', seguirEnlaceCiudad);
    aplicarTema();
    seguirEnlaceCiudad();
})();
