// Primero realizamos esta captura de id de los botones del menu 
// que nos llevan a los formularios, estos los almecenamos en variables

var linkFormulario1 = document.getElementById("mostrar-formulario1");
var linkFormulario2 = document.getElementById("mostrar-formulario2");

// Fue necesario capturar el id del contenedor que aloja los formularios
// ya que este contenedor es el que se mantiene con un display:block 
// en las media querie
var contFormulario = document.getElementById("cont-formulario");

// ahora si obtenemos las id de los contenedores que alojan a los formularios
//  los que los contienen individualmente
var formulario1 = document.getElementById("formulario1");
var formulario2 = document.getElementById("formulario2");

// aqui vienen dos eventos "addEventListener"
// primer evento:
linkFormulario1.addEventListener("click", function() {
  // display block para contenedor de los formularios (los dos)
  contFormulario.style.display = "block";
  // display:block para el formulario1 (el seleccionado))
  formulario1.style.display = "block";
  // display:none para el formulario que no esta siendo seleccionado
  formulario2.style.display = "none";
});
// segundo evento:
linkFormulario2.addEventListener("click", function() {
  // tambienasigna display:block para el contenedor principal
  contFormulario.style.display = "block";
  // display:none para el formulario que no esta siendo seleccionado
  formulario1.style.display = "none";
  // display:block para el formulario2 (el seleccionado)
  formulario2.style.display = "block";
});


// VALIDACIONES PRIMER FORMULARIO

// primero obtener el boton de enviar formulario
var btnEnviar = document.getElementById("enviar-formulario");

// evento click que validara los datos del formulario
btnEnviar.addEventListener("click", function() {
  // almacena los valores ingresados por los usuarios en var ...
  // nombre, correo, mensaje
  // Esto se hace mediante las id de los input!!!!
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("mensaje").value;

  // validar que los campos obligatorios esten completos
  if (nombre === "") {
    alert("El campo 'Nombre' es obligatorio");
    return false;
  }
  
  // validar que el correo tenga un formato válido
  if (!/^\S+@\S+\.\S+$/.test(correo)) {
    alert("El correo electrónico no es válido");
    return false;
  }
  
  // validar que el mensaje no este vacio
  if (mensaje === "") {
    alert("El campo 'Mensaje' es obligatorio");
    return false;
  }
  
  // mostrar un mensaje de agradecimiento por el envio del formulario
  var mensajeExito = "Muchas gracias " + nombre + ", hemos recibido su " + 
                     "sugerencia y enviaremos una pronta respuesta al correo " + 
                     correo;
  //  usando este alert!
  alert(mensajeExito);
  
  // limpiar los valores de los campos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("mensaje").value = "";
  
  // volver a ocultar el contenedor que aloja los formularios
  contFormulario.style.display = "none";
});


// VALIDACIONES SEGUNDO FORMULARIO "jquery"

///////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  // Obtener el botón de enviar formulario
  var btnEnviar2 = $("#enviar-formulario2");

  // evento click que validara los datos del formulario
  btnEnviar2.on("click", function() {
    // Almacenar los valores ingresados por los usuarios en variables ...
    var nombre2 = $("#nombre-reserva").val();
    var correo2 = $("#email-reserva").val();
    var fecha2 = $("#fecha").val();

    // Validar que los campos obligatorios estén completos
    if (nombre2 === "") {
      alert("El campo 'Nombre' es obligatorio");
      return false;
    }

    // Validar que el correo tenga un formato válido
    if (!/^\S+@\S+\.\S+$/.test(correo2)) {
      alert("El correo electrónico no es válido");
      return false;
    }

    // Validar que la fecha no esté vacía
    if (fecha2 === "") {
      alert("El campo 'Fecha' es obligatorio");
      return false;
    }
    var asistentes2 = $("#asistentes").val();

    // Mostrar un mensaje de agradecimiento por el envío del formulario
    var mensajeExito = "Estimado: " + nombre2 + " agradecemos por reservar con nosotros. Hemos registrado  " + asistentes2 + " asistentes. Se ha enviado el código de confirmación al correo " + correo2 + " Gracias por preferirnos ";
    alert(mensajeExito);

    // Limpiar los valores de los campos del formulario
    $("#nombre-reserva").val("");
    $("#email-reserva").val("");
    $("#fecha").val("");
    $("#telefono").val("");
    $("#hora").val("");
    $("#asistentes").val("");

    // Volver a ocultar el contenedor que aloja los formularios
    contFormulario.style.display = "none";
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////


// VALIDACIONES SEGUNDO FORMULARIO

// igual al anterior; primero obtener el boton de enviar formulario
// var btnEnviar2 = document.getElementById("enviar-formulario2");

// evento click que validara los datos del formulario
// btnEnviar2.addEventListener("click", function() {
  // almacena los valores ingresados por los usuarios en var ...
  // nombre, correo, mensaje
  // Esto se hace mediante las id de los input!!!!
  // var nombre2 = document.getElementById("nombre-reserva").value;
  // var correo2 = document.getElementById("email-reserva").value;
  // var fecha2 = document.getElementById("fecha").value;

  // validar que los campos obligatorios esten completos
  // if (nombre2 === "") {
  //   alert("El campo 'Nombre' es obligatorio");
  //   return false;
  // }
  
  // validar que el correo tenga un formato valid
  // if (!/^\S+@\S+\.\S+$/.test(correo2)) {
    // alert("El correo electrónico no es válido");
    // return false;
  // }
  
  // validar que la fecha no etes vacia
  // if (fecha2 === "") {
    // alert("El campo 'Fecha' es obligatorio");
    // return false;
  // }
  
  // mostrar un mensaje de agradecimiento por el envio del formulario
  // var mensajeExito = "Muchas gracias " + nombre2 + ", hemos recibido su " + 
                    //  "reserva y enviaremos una pronta confirmación al correo " + 
                    //  correo2;
  // alert(mensajeExito);
  
  // limpiar los valores de los campos del formulario
  // document.getElementById("nombre-reserva").value = "";
  // document.getElementById("email-reserva").value = "";
  // document.getElementById("fecha").value = "";
  // document.getElementById("telefono").value = "";
  // document.getElementById("hora").value = "";
  // document.getElementById("asistentes").value = "";
  
  // volver a ocultar el contenedor que aloja los formularios
  // contFormulario.style.display = "none";
// });