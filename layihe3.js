const rub1 = document.getElementById('rub1')
const usd1 = document.getElementById('usd1')
const eur1 = document.getElementById('eur1')
const gbp1 = document.getElementById('gbp1')
let input1 = document.getElementById('input1')
let p1 = document.getElementById('p1')

const rub2 = document.getElementById('rub2')
const usd2 = document.getElementById('usd2')
const eur2 = document.getElementById('eur2')
const gbp2 = document.getElementById('gbp2')
let input2 = document.getElementById('input2')
let p2 = document.getElementById('p2')







usd2.addEventListener('click', () => {
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
        .then(res => res.json())
        .then((item) => {
            p2.innerText = `1 USD = ${item.rates.RUB} RUB`
            input1.value = input2.value * item.rates.RUB
        })
    usd2.style.backgroundColor = "#833AE0"
    usd2.style.color = "white"
})

eur2.addEventListener('click', () => {
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
        .then(res => res.json())
        .then((item) => {
            p2.innerText = `1 RUB = ${item.rates.EUR} EUR`
            input1.value = input2.value * item.rates.EUR
        })
    eur2.style.backgroundColor = "#833AE0"
    eur2.style.color = "white"
})

rub1.addEventListener('click', () => {
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
        .then(res => res.json())
        .then((item) => {
            p1.innerText = `1 RUB = ${item.rates.USD} USD`
            input2.value = input1.value * item.rates.USD
        })
    rub1.style.backgroundColor = "#833AE0"
    rub1.style.color = "white"
})







fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR')
    .then(res => res.json())
    .then((item) => {
        console.log(item.rates.EUR)
    })
fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP')
    .then(res => res.json())
    .then((item) => {
        console.log(item.rates.GBP)
    })





fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
    .then(res => res.json())
    .then((item) => {
        console.log(item.rates.EUR)
    })
fetch('https://api.exchangerate.host/latest?base=RUB&symbols=GBP')
    .then(res => res.json())
    .then((item) => {
        console.log(item.rates.GBP)
    })




fetch('https://api.exchangerate.host/latest?base=EUR&symbols=USD')
    .then(res => res.json())
    .then((item) => {
        console.log(item.rates.USD)
    })
fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
    .then(res => res.json())
    .then((item) => {
        console.log(item.rates.RUB)
    })
fetch('https://api.exchangerate.host/latest?base=EUR&symbols=GBP')
    .then(res => res.json())
    .then((item) => {
        console.log(item.rates.GBP)
    })




fetch('https://api.exchangerate.host/latest?base=GBP&symbols=RUB')
    .then(res => res.json())
    .then((item) => {
        console.log(item.rates.RUB)
    })
fetch('https://api.exchangerate.host/latest?base=GBP&symbols=USD')
    .then(res => res.json())
    .then((item) => {
        console.log(item.rates.USD)
    })
fetch('https://api.exchangerate.host/latest?base=GBP&symbols=EUR')
    .then(res => res.json())
    .then((item) => {
        console.log(item.rates.EUR)
    })



