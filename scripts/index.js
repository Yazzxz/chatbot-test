/* Links utiles
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let lugar = document.querySelector('.mensajes')

//Funcion que permite mostrar y esconder el chat
$("#si").hide();
$(document).ready(function(){
    $("#aveces").click(function(){
        $("#si").toggle(250);
    });
});

//Cambiar texto de pagina principal

$(document).ready(function(){
    function cambiarTexto(){
        if(document.getElementById("textoPrincipal").innerText == ("Encontra Lo Que Queres")){
            document.getElementById("textoPrincipal").innerText = ("Encontralo Al Mejor Precio")
        }
        else{
            document.getElementById("textoPrincipal").innerText = ("Encontra Lo Que Queres")
        }
    }
    setInterval(cambiarTexto, 3000);
})

//Permite mandar los mensajes con enter y no solo los botones
var wage = document.getElementById("mensaje");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        mandarMensaje();
    }
});

