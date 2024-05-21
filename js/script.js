let divisa1 = 0;    //Divisa original
let divisa2 = 0;    //Divisa a convertir
let cantidad = 0;   //Cantidad a convertir
let valorFinal = 0; //Valor Final
let ref1;           //referencia
let ref2;           //referencia
let divs = 8;       // Cantidad de divisas convertibles

const ARS = 884.4156;       // Peso Argentino
const USD = 1;              // Dolar Americano
const CAD = 1.36;           // Constantes de Precio en base dolar
const EUR = 0.9198;         // Euro
const JPY = 155.7460;       // Yen
const CHF = 0.9103          // Franco Suizo
const GBP = 0.7869          // Libra esterlina
const INR = 83.3013         // Rupia India


//////////////////////////////TOMA DE DATOS//////////////////////////////

do {
    divisa1 = prompt( "Seleccion Divisa a cambiar 1-" + divs +"\n1. Peso Argentinos \n2. Dolar \n3. Dolar Canadiense \n4. Euro\n5. Yen\n6. Franco Suizo \n7. Libra esterlina\n8. Rupia India");
    if (divisa1 == 0 || divisa1 > divs){
        alert("La opcion ingresada es incorrecta \nChequee los datos con la lista de Divisas");
    }
}while (divisa1 == 0 || divisa1 > divs);

do {
    divisa2 = prompt( "Seleccione Divisa de cambio \n1. Peso Argentinos \n2. Dolar \n3. Dolar Canadiense \n4. Euro\n5. Yen\n6. Franco Suizo \n7. Libra esterlina\n8. Rupia India");
    if (divisa2 == 0 || divisa2 > divs){
        alert("La opcion ingresada es incorrecta \nChequee los datos con la lista de Divisas");
    }
}while (divisa2 == 0 || divisa2 > divs);

ref1 = referencia(parseInt(divisa1));
ref2 = referencia(parseInt(divisa2));
divisa1 = conversion(parseInt(divisa1));
divisa2 = conversion(parseInt(divisa2));

do {
    cantidad = prompt( "Usted eligio convertir de " + ref1 + " a " + ref2 + "\nSeleccione cantidad");
    if (cantidad < 0) {
        alert("Solo puede ingresar numeros mayores a 0");
    }
}while (cantidad < 0 );

//////////////////////////////CONVERSION DE DATOS//////////////////////////////

valorFinal = resultado(divisa1,divisa2,cantidad);
alert("Te quedarian " + valorFinal + " " + ref2);


//////////////////////////////FUNCIONES//////////////////////////////
// conversion devuelve el precio en base dolar de la divisa para usarse en resultado()
function conversion (entrada){
    switch(entrada){
        case 1:
            return ARS;
        case 2:
            return USD;
        case 3:
            return CAD;
        case 4:
            return EUR;
        case 5:
            return JPY;
        case 6:
            return CHF;
        case 7:
            return GBP;
        case 8:
            return INR;
    }
}

//referencia para mostrar divisas seleccionadas

function referencia (entrada){
    switch(entrada){
        case 1:
            return "ARS";
        case 2:
            return "USD";
        case 3:
            return "CAD";
        case 4:
            return "EUR";
        case 5:
            return "JPY";
        case 6:
            return "CHF";
        case 7:
            return "GBP";
        case 8:
            return "INR";
    }
}

//Regla de 3

function resultado (div1, div2, cant){
    let res = ((cant * div2 )/div1);
    return res;
}
