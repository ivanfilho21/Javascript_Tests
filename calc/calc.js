var lpA = 8000;
var lpB = 8000;

document.querySelector('.lp_container.a .result').innerHTML = lpA;
document.querySelector('.lp_container.b .result').innerHTML = lpB;

window.onload = () => {
    let btnsA = document.querySelectorAll('.lp_container.a .btn');
    let btnsB = document.querySelectorAll('.lp_container.b .btn');
    let values = document.querySelectorAll('input[name=value]');

    for (let btn of btnsA) {
        btn.onclick = () => updateLifePoints(btn, true);
    }

    for (let btn of btnsB) {
        btn.onclick = () => updateLifePoints(btn, false);
    }

    for (let v of values) {
        v.onfocus = () => selectAll(v);
    }
}

function selectAll(input) {
    input.selectionStart = 0;
    input.selectionEnd = input.value.length;
}

function updateLifePoints(btn, firstPlayer = false) {
    let src = firstPlayer ? 'a' : 'b';
    let lp = firstPlayer ? lpA : lpB;
    let op = btn.dataset ? btn.dataset.operation : (btn.hasAttribute('data-operation') ? btn.getAttribute('data-operation') : null);
    let value = document.querySelector(`.lp_container.${src} input[name=value]`).value;
    value = parseInt(value);
    let res = document.querySelector(`.lp_container.${src} .result`);

    if (! op) return;

    switch (op) {
        case 'sum':
            lp += value;
            break;
        case 'subtract':
            lp -= value;
            break;
    }
    res.innerHTML = lp;

    lpA = firstPlayer ? lp : lpA;
    lpB = firstPlayer ? lpB : lp;
}
