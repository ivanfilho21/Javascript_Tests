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
}