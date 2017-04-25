;
(function() {

    const data = [1, 4, 2, 6, 3, 8, 0, 9]
    const worker = new Worker('worker.js')
    worker.postMessage(data)

    worker.onmessage = e => {
        let data = e.data
        console.log(data)
    }

    worker.onerror = e => {
        console.log(e.filename);
    }
})()
