const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmedPassword = document.getElementById('confirmedPassword')
const submit = document.getElementById('submit')
const success = document.getElementById('success')
const back = document.getElementById('back')




submit.addEventListener('click', (e) => {
    e.preventDefault()
    checkinputs()
})

back.addEventListener('click',(e)=>{
    e.preventDefault()
    submit.className=''
    success.className='signupSuccess notVisible'
    back.className='notVisible'
    SetNormal(username)
    SetNormal(email)
    SetNormal(password)
    SetNormal(confirmedPassword)
})

function checkinputs() {
    let name = false
    let emailInfo = false
    let pass = false

    if (username.value.trim() === '')
        SetError(username, 'Username can not be blank')
    else {
        SetSuccess(username)
        name = true;
    }

    if (email.value.trim() === '')
        SetError(email, 'email can not be blank')
    else if (!validEmail(email.value.trim()))
        SetError(email, 'enter a valid email ex: test@test.com')
    else {
        SetSuccess(email)
        emailInfo = true
    }

    if (password.value.trim() === '')
        SetError(password, 'Password can not be blank')
    else if (password.value.trim().length > 0 && password.value.trim().length < 8)
        SetError(password, 'minimum password length is 8')
    else
        SetSuccess(password)

    if (confirmedPassword.value.trim() === '')
        SetError(confirmedPassword, 'Password can not be blank')
    else if (confirmedPassword.value.trim() !== password.value.trim())
        SetError(confirmedPassword, 'Password does not match')
    else if (password.value.trim().length > 0 && password.value.trim().length < 8)
        SetError(password, 'minimum password length is 8')
    else {
        SetSuccess(confirmedPassword)
        pass = true
    }
    if (pass && emailInfo && name)
    {
        submit.className='notVisible'
        success.className='signupSuccess'
        back.className=''
    }
}



function SetSuccess(input) {
    const error = input.parentElement
    const text = error.querySelector('p')
    text.innerText = ''
    input.className = 'success'
}

function SetError(input, message) {
    input.value = ''
    input.className = 'error'
    const error = input.parentElement
    const text = error.querySelector('p')
    text.innerText = message
}

function SetNormal(input){
    input.value = ''
    input.className = 'normal'
}

function validEmail(email) {
    return email.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i);
}
