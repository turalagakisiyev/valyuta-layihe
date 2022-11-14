

fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
    })