function apresentar(nome){
    return `Meu nome é: ${nome}`;
}

const apresentarArrow = nome => `Meu nome é: ${nome}`;

console.log(apresentar('Rafael Oliveira'));
console.log(apresentarArrow('Rafael Oliveira'));

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10 ) {
        return "Somente Numeros de 1 a 9"
    }else{
        return num1 + num2
    }
}

console.log(somaNumerosPequenos(2,20));