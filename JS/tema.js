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

    // Solo index.html y ciudad.html tienen descripción de ciudad.
    // La imagen del encabezado se conserva únicamente en index.html.
    const descripcion = document.getElementById('descripcion-ciudad');
    const imagen = document.getElementById('imagen-ciudad');
    const nombreImagen = document.getElementById('nombre-imagen');
    const esPaginaCiudad = Boolean(descripcion);

    function aplicarTema() {
        const oscuro = preferencia === 'dark' || (preferencia === 'system' && sistema.matches);
        const tema = oscuro ? 'dark' : 'light';
        const ciudad = oscuro ? 'Minas Morgul' : 'Minas Ithil';

        document.documentElement.dataset.bsTheme = tema;

        if (selector) selector.value = preferencia;

        if (esPaginaCiudad) {
            document.title = ciudad + ' | Portal de Turismo';

            const h1 = document.querySelector('header h1');
            if (h1) h1.textContent = ciudad;

            descripcion.textContent = oscuro
                ? 'La Torre de la Hechicería: brumas y luces verdosas al pie de las Montañas de la Sombra.'
                : 'La Torre de la Luna Naciente: mármol blanco y jardines bajo la luz de la luna.';

            if (imagen) {
                imagen.src = oscuro ? 'IMG/minas_morgul.jpeg' : 'IMG/minas_ithil.jpg';
                imagen.alt = oscuro
                    ? 'Minas Morgul entre brumas y resplandores verdes'
                    : 'Minas Ithil y sus terrazas de mármol blanco bajo la luna';
            }

            if (nombreImagen) nombreImagen.textContent = ciudad;
        } else {
            // lugares.html y contacto.html definen un título para cada ciudad.
            const tituloClaro = document.documentElement.dataset.tituloClaro;
            const tituloOscuro = document.documentElement.dataset.tituloOscuro;
            if (tituloClaro && tituloOscuro) {
                document.title = oscuro ? tituloOscuro : tituloClaro;
            }
        }

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
        const tema = {
            '#minas-ithil': 'light',
            '#minas-morgul': 'dark',
            '#torre-central': 'light',
            '#arbol-blanco': 'light',
            '#murallas-luna': 'light',
            '#jardines-ciudadela': 'light',
            '#murallas-morgul': 'dark',
            '#terrazas-silenciosas': 'dark',
            '#torre-morgul': 'dark',
            '#puerta-morgul': 'dark'
        }[location.hash];

        if (!tema) return;

        guardarTema(tema);

        const destino = document.getElementById(location.hash.slice(1));
        if (destino) destino.scrollIntoView();
    }

    if (selector) selector.addEventListener('change', () => guardarTema(selector.value));

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
