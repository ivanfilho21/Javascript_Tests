const props = [];
readTextFile('properties.json', buildTable);

function sortDin(key, a, b, asc = true, string = false) {
    if (string) {
        return asc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
    }
    return asc ? (a[key] - b[key]) : (b[key] - a[key]);
}

function sort(option, asc = true) {
    let array = props.slice();

    switch (option) {
        case 0:
            array = asc ? array : array.slice().reverse();
            break;
        case 1:
            array = array.slice().sort(function (a, b) { return sortDin('id', a, b, asc); });
            break;
        case 2:
            array = array.slice().sort(function (a, b) { return sortDin('name', a, b, asc, true); });
            break;
        case 3:
            array = array.slice().sort(function (a, b) { return sortDin('price', a, b, asc); } );
            break;
    }

    updateTable(array);
}

function filterByName(text) {
    // console.log(text);

    let array = props.slice();

    array = array.filter(function (t) {
        return t['name'].toLowerCase().indexOf(text.toLowerCase()) != -1;
    });
    updateTable(array);
}

function buildTable(json) {
    json = JSON.parse(json);
    // console.log(thead,tbody);

    // Colocar os grupos em array sequencial
    for (let i = 0; i < json.size; i++) {
        let group = json[i];
        // console.log(group);

        for (let y = 0; y < group.properties; y++) {
            group[y]['color'] = group['color'];
            props.push(group[y]);
        }
    }

    // props.sort(function (a, b) { return a['id'] - b['id'] });
    // console.log(props);

    updateTable(props);
}

function updateTable(array) {
    let tbody = document.querySelector('#table_properties tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let p = array[i];
        // console.log(p);

        let tr = document.createElement('tr');
        // tr.style.backgroundColor = p['color'];
        // tr.style.color = p['color'] == 'white' || p['color'] == 'lightblue' || p['color'] == 'yellow' || p['color'] == 'darkorange' ? 'black' : 'white';
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
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}