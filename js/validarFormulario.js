$(document).ready(function () {
  $('#formulario').validate({ // initialize the plugin
    rules: {
      nif:{
        minlength: 8,
        maxlength: 8
      },
      nombre: {
        required: true
      },
      apellidos:{
        required: true
      },
      sexo:{
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefono:{
        minlength: 8,
        maxlength: 9,
        digits: true
      },
      cp:{
        required: true,
        digits: true
      }
    },

    messages: {
      nombre: "Introduce tu nombre",
      apellidos: "Introduce tus apellidos",
      sexo: "Selecciona una de estas opciones",
      email: "Introduce un email valido",
      telefono: "Introduce un telefono",
      cp: "Introduce un codigo postal"
    }
  });



});



