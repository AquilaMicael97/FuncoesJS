/*
2) O IMC - é um critério da OMS para dar uma indicação e condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e altura de um adulto, mostre a condição de acordo com a tabela:

IMC em adultos Condições:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
if (imc < 18.5) {                        //IF = SE O (IMC) FOR < (MENOR) QUE 18.5 
    return 'Abaixo do Peso';
} else if (imc >= 18.5 && imc < 25) {     // ELSE IF = SE NÃO.
    return 'Peso normal';
} else if (imc >= 25 && imc <= 30) {       //&& sempre colocar quando tiver + uma soma (E)
    return 'Acima do peso';
} else if (imc >= 31 && imc <= 40) {
    return 'Obeso';
} else {                                 // finaliza só com ELSE, pq É O ULTIMO CALCULO, DIRETO PRO CONSOLE
    console.log('Obesidade grave');
}
}


function main() {
    const peso = 54;
    const altura = 1.53;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();