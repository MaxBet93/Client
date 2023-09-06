let clientName = prompt(`Введите ваше имя`)
let clientNameRes = clientName.trim()


let clientSecondName = prompt(`Введите вашу фамилию`)
let clientSecondNameRes = clientSecondName.trim()

let clientAdress = prompt(`Введите ваш адресс`)
let clientAdressRes = clientAdress.toLowerCase().replace(/ /gi, '')

let firstSymbol = clientAdress[0]
let lastSymbol = clientAdress[clientAdress.length - 1]

if (firstSymbol === '@'){
  clientAdressRes = `not valid email <b>${clientAdress}</b> symbol @ find in first place`
}
if ( lastSymbol === '@'){
  clientAdressRes = `not valid email <b>${clientAdress}</b> (symbol @ find in first place`
}
let clientAge = prompt('Ваш год рождения')
let clientAgeRes = 2023 - Number(clientAge.replace(/ /gi, ''))
const totalTag = document.querySelector('.total')
totalTag.innerHTML = `
<ul>
<li>Full name:${clientNameRes} ${clientSecondNameRes}</li>
<li>Email:${clientAdressRes}</li>
<li>Age:${clientAgeRes}</li>
</ul`