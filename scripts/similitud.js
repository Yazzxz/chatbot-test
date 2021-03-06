function similitud(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  }

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),costs[j]) + 1;
                costs[j - 1] = lastValue;
                lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }




  function separarFrase(a, palabra){
    if(palabra.length <= 5){
      limite = 0.75
    }
    else if(palabra.length <= 2){
      limite == 1
    }
    else{
        limite = 0.5
    
    }

    let c = 0
    let arr = new Array
    let palabraActual = ""
    for (let i = 0; i < a.length; i++){
        palabraActual += a[i]
        if(a[i] == " " || i == a.length - 1){
            arr.push(palabraActual)
            console.log(palabraActual)
            palabraActual = ""
            
        }
        if (isNaN(a[i]) == false) c = i
    }
    for (let x = 0; x < arr.length; x++){
        if(similitud(arr[x], palabra) > limite){
          if(c > 0){
            return [true, c]
            break
          }
          else{
            return true
            break
          } 
        }
    }
}

//console.log(separarFrase("Como estas?, hola", "estas"))