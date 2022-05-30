//Funcion que da una respuesta segun lo que nosotros le digamos. Se ejecuta al final de la funcion mandarMensaje()
function respuestas(mensaje){
    let e = document.createElement('div')
    e.innerText = mensaje
    e.classList.add("mensajeOtro")
    lugar.append(e)
}
//Funcion anexada al boton del escritor del chat que envia el mensaje escrito
function mandarMensaje(){
    if(document.getElementById("mensaje").value != 0){
        mensaje = document.getElementById("mensaje").value
        //console.log(mensaje)
        let a = document.createElement('div')
        a.innerText = mensaje
        a.classList.add("mensajePropio")
        lugar.appendChild(a)
        document.getElementById("mensaje").value = ""
        setTimeout(respuesta, 1000, a)
    }
}


//console.log(separarFrase("Como estas?, buenos dias", "buenos"))


function respuesta(a){
    let x = a.innerText
    x = x.toLowerCase()
    console.log("x es " + x)
    console.log("aveces con " + prioridades(x))

    if(separarFrase(x, "hola") == true && prioridades(x) == 0){
        respuestas("Hola!! :)")
    }
    else if(separarFrase(x, "horarios") == true){
        respuestas("El local esta abierto de 8:00 a 12:00 hs y de 16:00 hasta 20:00 hs")
    }

    else if(separarFrase(x, "stock") == true || separarFrase(x, "producto") == true || separarFrase(x, "descartable") == true) {
        
        if(separarFrase(x, "tipo")){
            respuestas("Tenemos a la venta descartables de plastico y carton")
        }
        else{
            respuestas("Puedes ver el stock disponible en:...")
        }
    }

    else if(separarFrase(x, "pago") == true){
        respuestas("El pago es unicamente en efectivo en el local")
    }

    else if(separarFrase(x, "ubicacion") == true || separarFrase(x, "ubicado") == true){
        respuestas("La ubicacion de la tienda es en ...")
    }
    else{
        respuestas("Disculpa, no eh podido entender tu consulta :(")
    }}


