/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/

exports.sum = (num1, num2) => {
    return num1 + num2;
};

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
exports.fullname = (nome, sobrenome) => {
    return `${nome} ${sobrenome}`;
};

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
exports.calculate = (num1, num2, num3) => {

    if (!num1 || !num2 || !num3) {
        return 'Preencha todos os valores corretamente!';
    }
    
    return (num1 * num2 * num3) + 2;
}

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
exports.calculatev2 = (num1, num2, num3) => {

	const fullParams = [num1, num2, num3].filter(item => item);	
	let value = false;
	
	switch (fullParams.length) {
		case 3:
			value = (num1 + num2) / num3;
			break;
	
		case 2:
			value = fullParams[0] + fullParams[1];
			break;

		case 1:
			value = fullParams[0];
			break;
	}

	return value;
}

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
exports.isPair = (number) => {

	return !(number % 2);
}
