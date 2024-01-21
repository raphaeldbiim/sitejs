//alert('les débuts en js!')
//console.log("Bonjour la console")
//console.warn("Attention!!")
//console.error ("L'ERREUR")
let title = document.getElementById('title')
  console.log(title)
  title.innerHTML ="IIM"
  let image = document.getElementById('images')
  image.src = 'images/images/apex.png'
let title = document.querySelector ('#main-title')
title.addEventListener ('click',function(){
    this.classList.add('red')
})
let accordions= querySelectorAll('accordéons')
let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('Envoi du dorm detecté !')
})

form.addEventListener('submit', function(event){
    event.preventDefault()
    let email = document.querySelector('#email')
    if(email.value == ''){
        console.log('invalide')
    } else {
        console.log('valide')
        email.classList.add('success')
    }
})
let pseudo = document. querySelector ('#pseudo')
if(pseudo. value. length < 6) {
    errorContainer.classList.add('visible')
    pseudo.classList. remove('success')
    let err = document. createElement( 'li')
    err. innerText = "Le champ pseudo doit contenir au moins 6 caractères"
    errorList.appendChild(err)
}else {
    pseudo.classList.add( 'success' )
}
let passCheck = new RegExp(
    "^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[-+_!@#$%^&*.,?]);+$"
)
