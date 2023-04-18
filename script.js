// Crie um programa que peça ao usuário para inserir o seu nome e sua cor favorita e imprima a mensagem: 
// "A cor favorita de FULANO é COR"
// Faça o exercício duas vezes, utilizando template strings e concatenação

//const nome = prompt ("Digite o seu nome: ");
//const cor = prompt ("Digite a sua cor favorita: ");

//console.log ("A cor favorita de " + nome + " é " + cor)
//console.log (`A cor favorita de ${nome} é ${cor}`);


// Uppercase e Lowercase
//let texto = "Grêmio vai sair campeão";
//alert(texto.length + texto );
//alert(nome.toUpperCase());
//alert(nome.toLowerCase());

// Trim

//let espaco = "      Grêmio tem 12 desfalques         ";
//alert(espaco.trim());

// Includes

//const frase = "Hoje comi cenoura";
//alert(frase.includes("cenoura")); // true
//alert(frase.includes("batata")); // false

// Replace all

//const frase = "Hoje comi cenoura, adoro cenoura";
//const novaFrase = frase.replaceAll("cenoura","batata");
//alert (frase);
//alert (novaFrase);
// novaFrase = Hoje comi batata, adoro batata

// Peça para o usuário escrever uma frase e imprima no console a frase alterada, com:
// Todas as letras maiúsculas;
// Na língua do i (substituindo a vogal "o" por "i");
// O tamanho da frase.

// let fraseUsuario = prompt ("Digite uma frase: ");
// let novaFrase = fraseUsuario.replaceAll("o","i");
// alert(fraseUsuario.length);
// alert(novaFrase.toUpperCase());

// Crie um array com pelo menos 5 raças de cachorro
// Peça para o usuário inserir um número de 0 a 4
// Imprima no console a raça correspondente à posição escolhida pelo usuário

const raças = ["Beagle", "Labrador", "Golden Retrivier", "Pastor Alemão", "Border Collie"];
let escolha = parseFloat(prompt("Digite uma opção de 0 a 4"));
console.log(raças[escolha]);


