ajax('properties.json', (json) => {
    json = JSON.parse(json);
    // console.log(json);
    let array = [];
    for (let i = 0; i < json.size; i++) {
        let group = json[i];
        for (let j = 0; j < group.properties; j++) {
            let prop = group[j];
            prop['color'] = group['color'];
            prop['image'] = !prop['image'] ? group['image'] : prop['image'];
            array.push(prop);
        }
    }

    buildBoard(array);
});

function buildBoard(array) {
    // console.log(array);
    let board = document.querySelector('.board');
    for (let prop of array) {
        let name = prop['name'];
        board.innerHTML += `<div class="property">
            <div class="color" style="background: ${prop['color']};"></div>
            <div class="name">${name}</div>
            <div class="image">
                <img src="${prop['image']}" alt="">
            </div>
            <div class="price">price $<span class="value">${prop['price']}</span></div>
        </div>`;
    }
}