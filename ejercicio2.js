var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero =46;
var resultado;
if (numero>=0 && numero<=99999999){
    resultado=numero%23
    console.log("la letra es "+letras[resultado])
    console.log("el numero es "+numero)
    console.log("el resto es "+resultado)
    if (resultado<=23){
        console.log("el número y la letra del documento de Identidad son correctos")
    }else{
        console.log("la letra que ha indicado no es correcta")
    }
}else {
    console.log("número proporcionado no es válido")
}