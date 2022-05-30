let peticiones = ["horarios", "stock", "pago"]
function prioridades(x){
    var a = 0
    var b 
    if(separarFrase(x, "hola") == true){
        for(let i = 0; i < peticiones.length; i++){
            b = separarFrase(x, peticiones[i])
            if(b == true){
                a =+ 1
            }
        }

    }
    console.log("si es "+ a)
    return a
}