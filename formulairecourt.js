document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab')
    const contents = document.querySelectorAll('.content')

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('tab-active'))
            contents.forEach(c => c.classList.remove('active'))

            this.classList.add('tab-active')

            if (this.classList.contains('tab1')) {
                document.querySelector('.content1').classList.add('active')
            } 
            else if (this.classList.contains('tab2')) {
                document.querySelector('.content2').classList.add('active')
            } 
            else if (this.classList.contains('tab3')) {
                document.querySelector('.content3').classList.add('active')
            }
             else if (this.classList.contains('tab4')) {
                document.querySelector('.content4').classList.add('active')
            } 
            else if (this.classList.contains('tab5')) {
                document.querySelector('.content5').classList.add('active')
            }
        })
    })
})
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
    } 
    else {
        console.log('valide')
        email.classList.add('success')
    }
})
let pseudo = document. querySelector ('#pseudo')
if(pseudo. value. length < 6) {
    pseudo.classList. remove('success')
    let err = document. createElement( 'li')
    err. innerText = "Le champ pseudo doit contenir au moins 6 caractères"
    
}
else {
    pseudo.classList.add( 'success' )
}
let passCheck = new RegExp(
    "^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[-+_!@#$%^&*.,?]);+$"
)
document.addEventListener("DOMContentLoaded", function() {
    let darkModeToggle = document.getElementById("darkbutton")
    let body = document.body

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode")
    })
})