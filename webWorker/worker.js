self.onmessage = e => {
    let data = e.data
    data.sort(function(a, b) {
    	console.log('worker is running.');
        return a - b
    })
    self.postMessage(data)
}
