const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data')
    }, 5000)
})

promise
    .then((data) => {
        console.log(data)
    })