const stack = [];
const stackData = document.querySelector('input[name=stack_data]');
var currentIndex = -1;

function push() {
    let value = stackData.value;
    if (! value) return;

    updateStack();
}

function updateStack() {}