let array = ['Texto', 15, false, true, 90.5, [0, 1, 2]];
let valores = document.getElementsByClassName('valor');
let i = 0;

// let i será os índices
for (let i in array) {
    console.log('index ' + i + '\n');
}

// let v será os valores
for (let v of array) {
    valores[i].innerHTML = v + ' (' + typeof(v) + ')';
    i++;
}

var nome = document.getElementById('campo_nome');
let btn = document.getElementById('botao');

btn.onclick = function() {
    if (nome.value) {
        window.alert('Seja bem vindo(a), ' + nome.value);
    }
};

let btnHora = document.getElementById('botao_hora');

function atualizarDataHora() {
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const dateLocal = new Date(now.getTime() - offsetMs);
    const str = dateLocal.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    // alert(str);
    document.getElementById('data_hora').innerHTML = str;
}

atualizarDataHora();