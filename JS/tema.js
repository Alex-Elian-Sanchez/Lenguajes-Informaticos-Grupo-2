(() => {
    const sistema = window.matchMedia('(prefers-color-scheme: dark)');
    const selector = document.getElementById('modo-tema');
    let preferencia = localStorage.getItem('preferencia-tema') || 'system';

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

    function cambiarTema(valor) {
        preferencia = valor;
        localStorage.setItem('preferencia-tema', valor);
        aplicarTema();
}

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

        cambiarTema(tema);

        const destino = document.getElementById(location.hash.slice(1));
        if (destino) destino.scrollIntoView();
    }

    if (selector) selector.addEventListener('change', () => cambiarTema(selector.value));

    sistema.addEventListener('change', () => {
        if (preferencia === 'system') aplicarTema();
    });

    window.addEventListener('hashchange', seguirEnlaceCiudad);

    aplicarTema();
    seguirEnlaceCiudad();
})();
