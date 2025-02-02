// Dev by Vitor
function somar(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const valor1 = parseFloat(document.getElementById('valor01').value);
    const valor2 = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (valor1 === '' || valor2 === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
            <li>O resultado da operação é ${valor1} + ${valor2} = <span>${(valor1 + valor2).toFixed(2)}</span> </li>
        </ul>
        `
    }
};

function subtrair(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const valor1 = parseFloat(document.getElementById('valor01').value);
    const valor2 = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (valor1 === '' || valor2 === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>SUBTRAÇÃO</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
            <li>O resultado da operação é ${valor1} - ${valor2} = <span>${(valor1 - valor2).toFixed(2)}</span> </li>
        </ul>
        `
    }
};

function multiplicar(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const valor1 = parseFloat(document.getElementById('valor01').value);
    const valor2 = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (valor1 === '' || valor2 === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>MULTIPLICAÇÃO</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
            <li>O resultado da operação é ${valor1} * ${valor2} = <span>${(valor1 * valor2).toFixed(2)}</span> </li>
        </ul>
        `
    }
};

function dividir(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const valor1 = parseFloat(document.getElementById('valor01').value);
    const valor2 = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (valor1 === '' || valor2 === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>DIVISÃO</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
            <li>O resultado da operação é ${valor1} / ${valor2} = <span>${(valor1 / valor2).toFixed(2)}</span> </li>
        </ul>
        `
    }
};

function porcentagem(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const valor1 = parseFloat(document.getElementById('valor01').value);
    const valor2 = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (valor1 === '' || valor2 === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>PORCENTAGEM</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
            <li>O resultado da operação é ${valor1}% de ${valor2} = <span>${(valor1*valor2/100).toFixed(2)}</span> </li>
        </ul>
        `
    }
};

function desconto(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const preco = parseFloat(document.getElementById('valor01').value);
    const desconto = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // conta para calcular o desconto
    let valor_desconto = preco * (desconto/100);
    let valor_pagar = preco - valor_desconto;
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (preco === '' || desconto === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>DESCONTO</span> </li>
            <li>Valor 01 valor da compra: <span>R$${preco} </span> </li>
            <li>Valor 02 valor de desconto: <span>${valor_desconto}%</span> </li>       
            <li>O resultado da operação é R$${preco} - ${valor_desconto}% = <span>R$${(valor_pagar).toFixed(2)}</span> </li>
        </ul>
        `
    }
};

function acrescimo(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const preco = parseFloat(document.getElementById('valor01').value);
    const acrescimo = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // conta para calcular o acrescimo
    let valor_acrescimo = preco * (acrescimo/100);
    let valor_pagar = preco + valor_acrescimo;
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (preco === '' || desconto === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>ACRESCIMO</span> </li>
            <li>Valor 01 valor da compra: <span>R$${preco} </span> </li>
            <li>Valor 02 valor de acréscimo: <span>${valor_acrescimo}%</span> </li>       
            <li>O resultado da operação é R$${preco} + ${valor_acrescimo}% = <span>R$${(valor_pagar).toFixed(2)}</span> </li>
        </ul>
        `
    }
};

function potencia(){
    // pegando os valores do campo preenchido
    const base = parseFloat(document.getElementById('valor01').value);
    const expoente = parseFloat(document.getElementById('valor02').value);
    // transformando o container resultado em flex para exibi-lo
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');

    // Verificando se os campos estão preenchidos
    if (base === '' || expoente === '') {
        alert('Valor 1 ou Valor 2 está em branco, digite novamente');
    }
    else{
        // Calculando a exponenciação (usando a biblioteca do math para facilitar o calculo)
        resultado.innerHTML = `
        <ul>
        <li>Operação: <span>POTÊNCIA</span></li>
        <li>Base digitada pelo usuário: <span>${base}</span></li>
        <li>Expoente digitado pelo usuário: <span>${expoente}</span></li>
        <li>O resultado da operação é ${base}^${expoente} = <span>${Math.pow(base, expoente).toFixed(2)}</span></li>
        </ul>
        `;
    }
};

function limpar(){
    //  o conteiner que esta com o id resultado ele vai deixar de ser flex e vai ser none, ou seja vai sumir
    document.getElementById('resultado').style.display = 'none';
    //  os campos do formularios serão armenezados
    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';
};