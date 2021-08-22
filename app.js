// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return Math.floor(valueInDollar);
}
// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    //convertimos el valor a yenes
    let euro=(valueInDollar/1.2);
    let valueInYen=  euro *oneEuroIs.JPY;
    //retomamos el valor
    return Math.floor(valueInYen);

}
const fromYenToPound= function(valueInYen){
   let  euro =(valueInYen/127.9)
   valueInYen= euro*oneEuroIs.GBP;
   return Math.floor(valueInYen);

}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3));

// exporta la funcion para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar ,  fromDollarToYen, fromYenToPound  }