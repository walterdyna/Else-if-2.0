/* Else if

IF -> (SE) -> O if é usado para verificar uma condição.
              Se a condição for verdadeira, o código dentro do if será executado.

Else -> (SE NÃO) -> O else é usado para dizer o que fazer caso a condição no if seja falsa.

Else If -> O else if permite verificar outra condição quando a primeira não for verdadeira.
           Ele funciona como um intermediário entre o if e o else.
*/

const temperature = 41

if (temperature === 36) {

    console.log("Você está saudável")

} else if (temperature > 36 && temperature <= 40) {

    console.log("Está com febre")
    
} else if (temperature > 40) {

    console.log(" Está com febre alta")
    
}else{

    console.log("Está com hipotermia")
}