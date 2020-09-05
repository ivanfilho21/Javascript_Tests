const stack = [];
const stackData = document.querySelector('input[name=stack_data]');

function push() {
    let value = stackData.value;
    if (! value) return;

    // Adds 'value' to the 'last+1' index of array, deleting '0' elements
    stack.splice(stack.length, 0, value);
    updateStack();
}

function pop() {
    // Remove 1 element starting from the last position of array
    stack.splice(stack.length -1, 1);
    updateStack();
}

function updateStack() {
    let stackDOM = document.querySelector('.stack');
    let content = '';
    let stackCopy = stack.slice().reverse();

    for (let data of stackCopy) {
        content += `
            <div class="element">
                <div class="data">${data}</div>
            </div>
        `;
    }

    stackDOM.innerHTML = content;
}