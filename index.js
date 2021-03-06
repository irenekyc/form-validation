const form = document.querySelector('form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const inputField = [firstName, lastName, email, password]

form.addEventListener('submit', (e)=>{
    checkInputField()
    e.preventDefault()
    
})


inputField.forEach(el=>{
    el.addEventListener('input', ()=>{
        if(el.validity.patternMismatch){
            el.parentNode.classList.add('error')
        } else {
            el.parentNode.classList.remove('error')}
    
    })

})

const checkInputField= ()=>{
    inputField.forEach(el=>{
        if (!el.value){
            el.parentNode.classList.add('error')
        } 
    })
}

           