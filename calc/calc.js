var lpA = 8000;
var lpB = 8000;

window.onload = () => {
    let btnsA = document.querySelectorAll('.lp_container.a .btn');
    let btnsB = document.querySelectorAll('.lp_container.b .btn');
    console.log(btnsA);

    for (let btn of btnsA) {
        btn.onclick = () => updateLifePointsA(btn);
    }

    for (let btn of btnsB) {
        // btn.onclick = () => lpB();
    }
}

function updateLifePointsA(btn) {
    let op = btn.dataset ? btn.dataset.operation : (btn.hasAttribute('data-operation') ? btn.getAttribute('data-operation') : null);
    let value = document.querySelector('input[name=value_a]');
    let res = document.querySelector('.lp_container.a .result');

    if (! op) return;

    switch (op) {
        case 'sum':
            res.innerHTML = lpA + parseInt(value.value);
            break;
        case 'subtract':
            res.innerHTML = lpA - parseInt(value.value);
            break;
    }
}
/* 


function test(parent) {
    console.log(parent);
    switch (parent) {
        case 'lp_a':
            console.log('A');
            break;
        case 'lp_b':
            console.log('B');
            break;
    }
    
    let valueB = document.querySelector('input[name=value_b]').value;
    let lpA = document.querySelector('input[name=lp_a]');
    let lpB = document.querySelector('input[name=lp_b]');

    alert('');
    return false;
}


function calc() {
    let opA = document.querySelector('input[name=operator_a]').value;
    let opB = document.querySelector('input[name=operator_b]').value;
    let operation = document.querySelector('select[name=operation]').selectedIndex;
    let res = 0;

    opA = opA ? parseFloat(opA) : 0;
    opB = opB ? parseFloat(opB) : 0;

    switch(operation) {
        case 0:
            res = opA + opB;
            break;
        case 1:
            res = opA - opB;
            break;
        case 2:
            res = opA * opB;
            break;
        case 3:
            res = opB != 0 ? opA / opB : 'Cannot divide by Zero';
            break;
    }

    console.log(res);
    document.querySelector('.result .value').innerHTML = res;
} */