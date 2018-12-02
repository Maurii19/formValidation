$(document).ready(function () {
  $('#formulario').validate({
    rules: {
      nif:{
        required: true,
        minlength: 8,
        maxlength: 8,
        number: true
      },
      nombre: {
        required: true,
        minlength: 3
      },
      apellidos:{
        required: true,
        minlength: 3
      },
      sexo:{
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefono:{
        minlength: 9,
        number: true
      },

      cp:{
        required: true,
        number: true,
        maxlength: 5,
        minlength: 5
      },
      municipio: {
        required: true
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

 function municipioFunction(){
        if(document.getElementById("cp") != null && document.getElementById("cp").value.length == 5){
          document.getElementById("municipio").disabled = false;
        }else{
          document.getElementById("municipio").disabled = true;
        }
      }

$(document).ready(function(){
      $("#cp").keyup(function(){
        let cp = $("#cp").val();
        switch (cp) {
          case '20720':
            $("#municipio").val("Azkoitia");
            break;
          case '20730':
            $("#municipio").val("Azpeitia");
            break;
          case '20800':
            $("#municipio").val("Zarautz");
            break;
          case '20100':
            $("#municipio").val("Renteria");
            break;
          case '20750':
            $("#municipio").val("Zumaia");
            break;
          case '20700':
            $("#municipio").val("Zumarraga");
            break;
          default:
            $("#municipio").val("Otros");
        }
      });
    });


