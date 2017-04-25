;
(function() {

    btn.addEventListener('click', function() {
        const fileContainer = document.getElementById('file')
        const btn = document.getElementById('btn')
        const files = fileContainer.files
        console.log('obj');
        for (var i = files.length - 1; i >= 0; i--) {
            let file = files.item(i)
            console.log(file.name, file.type, file.size)
        }
    })

})()
