const selectOrder = document.querySelector('.select_order');
const selectOrderMode = document.querySelector('.select_order_mode');
const props = [];

readTextFile('properties.json', (json) => {
    json = JSON.parse(json);

    // Colocar os grupos em um array
    for (let i = 0; i < json.size; i++) {
        let group = json[i];

        for (let y = 0; y < group.properties; y++) {
            group[y]['color'] = group['color'];
            props.push(group[y]);
        }
    }

    order();
});

function sortDin(key, a, b, asc = true, string = false) {
    if (string) {
        return asc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
    }
    return asc ? (a[key] - b[key]) : (b[key] - a[key]);
}

function order() {
    let array = props.slice();
    let option = selectOrder.selectedIndex;
    let mode = selectOrderMode.selectedIndex;

    switch (option) {
        case 0:
            array = mode == 1 ? array : array.slice().reverse();
            break;
        case 1:
            array = array.slice().sort((a, b) => sortDin('id', a, b, mode));
            break;
        case 2:
            array = array.slice().sort((a, b) => sortDin('name', a, b, mode, true));
            break;
        case 3:
            array = array.slice().sort((a, b) => sortDin('price', a, b, mode));
            break;
    }

    updateTable(array);
}

function filterByName(text) {
    let array = props.slice();

    array = array.filter((t) => t['name'].toLowerCase().indexOf(text.toLowerCase()) != -1);
    updateTable(array);
}

function updateTable(array) {
    let tbody = document.querySelector('#table_properties tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let p = array[i];

        let tr = document.createElement('tr');
        tr.innerHTML = '' +
        '<td style="background-color: ' + p['color'] + '"></td>' +
        '<td>' + p['id'] + '</td>' +
        '<td>' + p['name'] + '</td>' +
        '<td>' + p['price'] + '</td>';
        
        tbody.appendChild(tr);
    }
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}