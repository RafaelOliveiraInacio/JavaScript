// String

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senha1123Segura123456";
const stringdenumeros = "345721";
const citacao = 'Este texto é uma "citacao"';

console.log(texto1);
console.log(texto2);
console.log(senha);
console.log(stringdenumeros);
console.log(citacao);

const texto3 = "Sabrina amor da minha vida!";

console.log(texto3);

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres