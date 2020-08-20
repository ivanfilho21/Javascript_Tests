function generateDigit(e) {
    const digitSize = 48;

    let parent = document.querySelector('.area_digitos');
    
    let digit = document.createElement('div');
    digit.className = 'digit';
    digit.style.width = digitSize + 'px';
    digit.style.height = digitSize + 'px';

    let xmax = parent.offsetWidth - digitSize;
    let ymax = parent.offsetHeight - digitSize;
    let x = Math.floor((Math.random() * xmax) + 1);
    let y = Math.floor((Math.random() * ymax) + 1);

    let ileft = parent.offsetLeft + x;
    let itop = parent.offsetTop + y;

    digit.style.backgroundColor = generateRandomColor();
    digit.style.position = 'absolute';
    digit.style.left = ileft + 'px';
    digit.style.top = itop + 'px';

    let key = e.key;
    switch(key) {
        case ' ': key = 'Space'; break;
        case 'CapsLock': key = 'CL'; break;
        case 'Control': key = 'Ctrl'; break;
        case 'Escape': key = 'Esc'; break;
    }
    digit.innerHTML = key.substring(0, 6);

    console.log(e);
    parent.appendChild(digit);
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        color += letters[index];
    }

    return color;
}