const linkedList = [];
const data = document.querySelector('input[name=list_data]');
var currentIndex = -1;

function insert() {
    let value = data.value;
    if (! value) return;

    linkedList.push(value);
    updateList();
}

function remove() {
    let value = data.value;
    if (! value) return;

    let i = linkedList.indexOf(value);
    if (i == -1) return;

    linkedList.splice(i, 1);
    currentIndex = -1;

    updateList();
}

function list_find() {
    let value = data.value;
    if (! value) return;

    currentIndex = linkedList.indexOf(value);
}

function list_replace() {
    let value = data.value;
    if (! value) return;
    if (currentIndex < 0) return;

    linkedList[currentIndex] = value;
    currentIndex = -1;

    updateList();
}

function updateList() {
    let list = document.querySelector('.linked-list');
    let content = '<div class="head"><div class="next">Head</div></div>';

    for (let data of linkedList) {
        content += `
            <div class="link"></div>
            <div class="node">
                <div class="data">${data}</div>
                <div class="next"></div>
            </div>
        `;
    }
    content += '<div class="link"></div><div class="null"></div>';
    list.innerHTML = content;
}