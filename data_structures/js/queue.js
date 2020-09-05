const queue = [];
const queueData = document.querySelector('input[name=queue_data]');

function enqueue() {
    let value = queueData.value;
    if (! value) return;

    queue.push(value);
    updateQueue();
}

function dequeue() {
    queue.splice(0, 1);
    updateQueue();
}

function updateQueue() {
    let queueDOM = document.querySelector('.queue');
    let content = '';

    for (let data of queue) {
        content += `
            <div class="element">
                <div class="data">${data}</div>
            </div>
        `;
    }

    queueDOM.innerHTML = content;
}