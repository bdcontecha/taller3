var numero1 = 5;
var numero2 = 8;

if(numero1<numero2) {
    console.log("numero1 no es mayor que numero2");
    if(numero2>0) {
        console.log("numero2 es positivo");
        if(numero1<=0) {
            console.log("numero1 es negativo o distinto de cero");
            }
        else{
            console.log("numero1 es positivo y distinto de cero");
            numero1=numero1+1;
            if(numero1<=numero2) {
                console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2 ");
                }
            else{
                console.log("Incrementar en 1 unidad el valor de numero1  lo hace mayor o igual que numero2 ");
                }
            }
        }
    else{
        console.log("numero2 es negativo");
        }
    }
else {
    console.log("numero1  es mayor que numero2");
}