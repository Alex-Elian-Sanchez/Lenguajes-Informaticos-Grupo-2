# Consignas del trabajo

## Archivos minimos
`index.html`
Presentación general de la ciudad, su identidad y características principales.
Debe incluir un resumen visual de los lugares de interés, propuestas culturales, actividades o eventos destacados.

`ciudad.html`
Historia e identidad de la ciudad, características principales, barrios o zonas, costumbres y un `< dl >` con datos clave de la ciudad (por ejemplo: población ficticia, año de fundación, clima, gentilicio, etc.).

`lugares.html`
Al menos 3 lugares de interés o atractivos de la ciudad. Cada uno debe incluir nombre, descripción, ubicación o zona, qué se puede hacer allí y por qué se recomienda visitarlo. Puede incluir propuestas culturales actividades y eventos relacionados.

`contacto.html`
Información de contacto de la oficina de turismo o centro de información de la ciudad: dirección, teléfono (enlace tel:), email (enlace mailto:) y al menos un enlace externo a una red social ficticia.

## Estructura y semántica
- Declaración DOCTYPE y elemento `< html lang="es" >` en todas las páginas.
- < head > completo: `charset UTF-8, viewport, title` descriptivo y único por página.
- Estructura semántica obligatoria: `< header >, < nav >, < main > y < footer >` en todas las páginas.
- El `< nav >` debe contener los enlaces de navegación entre páginas (usando rutas relativas).
- Usar `< section >, < article > y < aside >` donde corresponda semánticamente.
- Los headings deben respetar la jerarquía: un solo `< h1 >` por página, seguido de `< h2 >, < h3 >`, etc.

## Etiquetas de contenido
- Etiquetas de texto: usar `< strong >` y `< em >` con criterio semántico, no solo decorativo.
- Listas: al menos una `< ul >`, una `< ol >` y una `< dl >` en el sitio (no todas en la misma página necesariamente).
- Imágenes: al menos 2 imágenes con atributos `src` y `alt` descriptivos. Pueden usar imágenes de placeholder (ej. picsum.photos).
- Enlace de correo (`mailto:`) y de teléfono (`tel:`) en la página de contacto.
- Al menos un enlace externo con `target="_blank"` y `rel="noopener noreferrer"`.
- Al menos un enlace interno (`#id`) que salte a una sección dentro de la misma página.

## Navegación y vínculos
- Todas las páginas deben estar vinculadas entre sí mediante el `< nav >`.
- Usar rutas relativas para los enlaces entre páginas (`href="nosotros.html"`, no rutas absolutas).
- El sitio debe poder navegarse completamente sin usar el botón "atrás" del navegador.

## Validación
- Todas las páginas deben ser válidas según el validador de la W3C (validator.w3.org).
- No se aceptan errores de estructura. Las advertencias (warnings) son aceptables pero deben poder justificarse.