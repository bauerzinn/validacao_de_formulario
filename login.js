const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')



form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()


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

document.getElementById("entrar").addEventListener("click", function(){
    window.location.href = "to_do_list.html"
})