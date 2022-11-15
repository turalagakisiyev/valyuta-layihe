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


rub1.addEventListener('click',changeActive(rub1))
usd1.addEventListener('click',changeActive(usd1))
eur1.addEventListener('click',changeActive(eur1))
gbp1.addEventListener('click',changeActive(gbp1))
 

function changeActive(e){
    if(e.className == "currency-item"){
        const currencies = [...e.parentElement.children];
        currencies.forEach(e => {
            if(e.className == "active"){
                e.classList.remove("active");
            }
        })
        e.classList.add("active");
    }
}

































