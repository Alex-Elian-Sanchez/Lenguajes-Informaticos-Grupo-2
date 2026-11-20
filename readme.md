# Portal de Turismo: Minas Ithil y Minas Morgul

Bienvenido al repositorio oficial del Portal de Turismo de nuestra ciudad ficticia. Este proyecto fue desarrollado para la materia Lenguajes Informáticos 1 (UNAHUR, 2do Cuatrimestre 2026).

Esta web esta tematicamente inspirada en el universo de El Senor de los Anillos y explora el contraste entre dos ciudades de una misma region: Minas Ithil (la Ciudadela de la Luna) y Minas Morgul (la Torre de la Hechiceria).

---

## Integrantes del Equipo

*   Cutri Angel
*   Heredia Matias  
*   Alex Sanchez

---

## La Evolucion del Proyecto (Etapas)

El trabajo practico se construyo de forma incremental a lo largo del cuatrimestre, superando cuatro etapas clave:

### Etapa 1: Estructura y Semantica (HTML)
Comenzamos creando los cimientos del sitio. Desarrollamos una estructura puramente semantica utilizando etiquetas como header, nav, main, article, section, aside y footer. Cada integrante creo una vista diferente, asegurandonos de tener una navegacion fluida mediante rutas relativas, un formulario de contacto con sus respectivos enlaces de correo y telefono, y un codigo validado bajo los estandares de la W3C.

### Etapa 2: Identidad Visual (CSS Puro)
Le dimos vida a la ciudad. Implementamos una hoja de estilos centralizada (CSS/estilos.css) para mantener la consistencia visual. Usamos variables CSS para definir una paleta de colores basada en las dos ciudades, aplicamos tipografias personalizadas de Google Fonts, y establecimos el box-model, espaciados y estados hover para hacer el sitio interactivo y legible.

### Etapa 3: Responsividad y Layouts (Bootstrap + CSS Avanzado)
Modernizamos el sitio para que se vea bien en cualquier dispositivo. Incorporamos Bootstrap 5.3 mediante CDN, integrando un Navbar responsive con menu de hamburguesa, la grilla de Bootstrap para organizar las tarjetas de lugares y datos de contacto, y componentes como Cards, Badges y Buttons. Ademas, ampliamos nuestro CSS propio aplicando Flexbox para alinear elementos y Posicionamiento para superponer etiquetas y textos sobre las imagenes principales.

### Etapa 4: Interactividad (JavaScript)
Para cerrar, agregamos dinamismo al sitio con JavaScript en dos areas principales:
1. Modo Oscuro/Claro (Minas Morgul / Minas Ithil): Logica desarrollada para alternar no solo los colores y estilos de toda la pagina, sino tambien adaptar los textos y contenidos segun la ciudad seleccionada, ofreciendo una experiencia de usuario inmersiva.
2. Validacion de Formulario (contacto.html): Un script encargado de interceptar el envio del formulario, validar que los campos obligatorios esten completos, verificar el formato del correo electronico y comprobar que el telefono (si se ingresa) contenga solo numeros. Todo con mensajes de retroalimentacion dinamicos para el usuario.

---

## Tecnologias Utilizadas

*   HTML5 (Estructura semantica)
*   CSS3 (Variables, Flexbox, Posicionamiento)
*   Bootstrap 5.3 (Grillas, Componentes, Responsive Design)
*   JavaScript (Manipulacion del DOM y eventos)
*   Git & GitHub (Trabajo colaborativo y control de versiones)

---

## Como visualizar el proyecto

No se necesita instalar nada. Simplemente:
1. Clonar este repositorio en tu computadora.
2. Abrir el archivo index.html en cualquier navegador web. Se recomienda usar la extension Live Server de VS Code para una mejor experiencia.