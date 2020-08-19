var x = 10;
var y = 15;
var z = x + y;
// window.alert(z);


// Encontra um elemento por Id e altera seu conteúdo interno
document.getElementById('alterar_conteudo').innerHTML = 'Olá mundo';

// Constante
const grid_width = 120;

// Hoisting: var fica acessível em toda a janela
var age = 100

// let fica disponível apenas no escopo atual (dentro do if, por exemplo)
if (age <= 100) {
    let name = 'Martin';
}
// Adiciona conteúdo no documento
document.write('Idade: ' + window.age + ' anos');

// Mostra mensagens no Console
console.log('Mensagem comum exibida no Console.');
console.warn('Mensagem de aviso exibida no Console.');
console.error('Mensagem de erro exibida no Console.');
console.exception('Exceção no console');