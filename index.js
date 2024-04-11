const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === ''){
      
        errorValidation(username, 'campo obrigatorio')
    } else {
        successValidation(username)
    }


    if(emailValue === ''){
        errorValidation(email, 'campo obrigatorio')
    } else {
        successValidation(email)
    }

    if(passwordValue === ''){
        errorValidation(password, 'campo obrigatorio')
    } else if (passwordValue.length < 6) {
        errorValidation(password, 'senha tem que conter pelo menos 7 caracteres')
    } else {
        successValidation(password)
    }

    if(passwordtwoValue === ''){
        errorValidation(passwordtwo, 'campo obrigatorio')
    } else if(passwordValue !== passwordtwoValue) {
        errorValidation(passwordtwo, 'senha nao coresponde a senha original')
    } else {
        successValidation(passwordtwo)
    }


}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}


document.getElementById("login").addEventListener("click", function(){
    window.location.href = "page_login.html"
})