function ajax(url, callback) {
    let request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open("GET", url, true);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status == "200") {
            callback(request.responseText);
        }
    };
    request.send(null);
}