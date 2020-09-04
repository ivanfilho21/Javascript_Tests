const linkedList = [];
var currentIndex = -1;

function selectAll() {
    this.selectionStart = 0;
    this.selectionEnd = this.value.length;
}

function push() {
    let data = document.querySelector('input[name=data]').value;
    if (! data) return;

    linkedList.push(data);

    updateList();
}

function remove() {
    let data = document.querySelector('input[name=data]').value;
    if (! data) return;

    for (d of linkedList) {
        if (d == data) {
            let i = linkedList.indexOf(data);
            linkedList.splice(i, 1);
        }
    }

    updateList();
}

function find() {
    let data = document.querySelector('input[name=data]').value;
    if (! data) return;

    for (d of linkedList) {
        if (d == data) {
            currentIndex = linkedList.indexOf(data);
        }
    }

    console.log(currentIndex);
}

function replace() {
    let data = document.querySelector('input[name=data]').value;
    if (! data) return;
    if (currentIndex < 0) return;

    linkedList[currentIndex] = data;
    currentIndex = -1;

    updateList();
}

function updateList() {
    let list = document.querySelector('.linked-list');
    let content = '<div class="head"><div class="next">Head</div></div>';

    for (data of linkedList) {
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