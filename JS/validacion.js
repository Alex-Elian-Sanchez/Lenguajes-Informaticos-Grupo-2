/* Espero que cargue todo el contenido del html */
document.addEventListener("DOMContentLoaded", function() {
    
    /* Guardo el formulario y el parrafo del mensaje. Uso querySelector para buscar el form dentro del section */
    const formulario = document.querySelector("#formulario form");
    const mensajeValidacion = document.getElementById("mensaje-formulario");

    /* Verifico que existe el formulario primero que nada */
    if (formulario) {
        
        /* Escucho el evento "submit" cuando el usuario da click en el boton */
        formulario.addEventListener("submit", function(evento) {
            
            /* Con preventDefault evito que la pagina se recargue por defecto y me borre los mensajes */
            evento.preventDefault();

            /* Agarro lo que el usuario escribio en cada campo. Uso .trim para quitar los espacios en blanco */
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefono = document.getElementById("telefono").value.trim(); 
            const asunto = document.getElementById("asunto").value; 
            const mensaje = document.getElementById("mensaje").value.trim();

            /* Reviso que los campos obligatorios no esten vacios. 
               Uso el operador logico OR para chequear que si al menos uno esta vacio, entre al error. */
            if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
                mensajeValidacion.textContent = "Error: Por favor, complete todos los campos obligatorios (*).";
                
                /* Aca uso clases de Bootstrap: "text-success" es verde y "text-danger" es rojo. Las cambio con classList */
                mensajeValidacion.classList.remove("text-success"); 
                mensajeValidacion.classList.add("text-danger"); 
                
                /* Hago visible el parrafo sacandole el atributo "hidden" */
                mensajeValidacion.hidden = false; 
            } 
            
            /* Si no estan vacios, reviso que el email tenga formato valido con .includes() 
               El signo ! me asegura que si no esta el @ o el punto, entra al error */
            else if (!email.includes("@") || !email.includes(".")) {
                mensajeValidacion.textContent = "Error: Por favor, ingrese un correo electronico valido (debe contener @ y un punto).";
                
                /* Colores de Bootstrap */
                mensajeValidacion.classList.remove("text-success");
                mensajeValidacion.classList.add("text-danger");
                mensajeValidacion.hidden = false; 
            }
            
            /* Validacion del telefono que es opcional. Primero compruebo que el usuario haya escrito algo. 
               Si escribio, uso isNaN para comprobar si lo ingresado NO es un numero */
            else if (telefono !== "" && isNaN(telefono)) {
                mensajeValidacion.textContent = "Error: El telefono solo puede contener numeros.";
                
                /* Colores de Bootstrap */
                mensajeValidacion.classList.remove("text-success");
                mensajeValidacion.classList.add("text-danger");
                mensajeValidacion.hidden = false; 
            }
            
            /* Si paso todas las validaciones, aparece el mensaje de éxito */
            else {
                mensajeValidacion.textContent = "¡Consulta enviada con exito! El cuervo ya esta en camino.";
                
                /* Le saco el rojo y le pongo el verde usando las clases de Bootstrap */
                mensajeValidacion.classList.remove("text-danger"); 
                mensajeValidacion.classList.add("text-success"); 
                mensajeValidacion.hidden = false; 
                
                /* Limpio los campos del formulario despues de enviar */
                formulario.reset();
            }
        });
    }
});