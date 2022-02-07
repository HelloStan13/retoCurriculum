'use strick'
// Funcion para abrir y cerrar boton con datos de referencias, estudios.
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// cambiar colores 

//colores para bar
var divsprogressbar = document.getElementsByClassName('progressbar');
var div;
for(div in divsprogressbar){
  if(divsprogressbar[div].className == 'progressbar'){
  divsprogressbar[div].style.background = ""; //modificar aca color que prefieres para el bar
}
}

//modificar aca color que prefieres para botones
var divscollapsible = document.getElementsByClassName('collapsible');
var divc;
for(divc in divscollapsible){
  if(divscollapsible[divc].className == 'collapsible'){
  divscollapsible[divc].style.background = ""; //modificar aca color que prefieres para titulos estudios, certificaciones, experiencia y referencias
}
}


//modificar color d efondo de los iconos

var divsicono = document.getElementsByClassName('icono');
var divi;
for(divi in divsicono){
  if(divsicono[divi].className == 'icono'){
    divsicono[divi].style.background = ""; //cambia aca el color del fondo de los iconos
    divsicono[divi].style.width = "33px"; //atributos para tamaño de iconos
    divsicono[divi].style.height = "30px";  //atributos para tamaño de iconos
}
}
  






 



