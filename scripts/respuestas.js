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
        setTimeout(comparacion, 1000, a)
    }
}
let res
let saludos = (/buenas/, /hola/);   
let hoarios = (/horarios/, /horario/)
function comparacion(a){
    let cadena = a.innerText
    if(saludos.test(cadena) == true)res = 1
    if(hoarios.test(cadena) == true)res = 2
    si()
}

s = "hola mundo", l = /mundo/
console.log(l.test(s))


function respuesta(a){
    let x = a.innerText
    x = x.toLowerCase()
    console.log("x es " + x)
    
    if(x.includes("hola") || x.includes("buenas")){
        respuestas("Hola!! :)")
    }
    else if(x.includes("horario") || x.includes("horarios")){
        respuestas("El local esta abierto de 8:00 a 12:00 hs y de 16:00 hasta 20:00 hs")
    }
    else if(x.includes("stock") || x.includes("stocks")){
        respuestas("Puedes ver el stock disponible en:...")
    }
    else{
        respuestas("Disculpa, no eh podido entender tu consulta :(")
    }}


function si(){
    switch (res) {
        case 1:
            console.log("hola")
            break;

        case 2:
            console.log("horarios")
            break;
        default:
            console.log("que")
            break;
    }
}