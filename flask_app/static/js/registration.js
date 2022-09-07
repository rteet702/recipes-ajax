const registrationForm = document.getElementById('registration')
const error_box = document.getElementById('error-box')
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const PASS_REGEX = /^[a-zA-Z0-9!@#$%^&*()]{8,}$/

registrationForm.onsubmit = function(e) {
    e.preventDefault()
    // clear errors before validating form.
    clearErrors(error_box)
    // validate the form first.
    if (validateRegistration(registrationForm)) {
        // if the form validates successfully, create a new FormData object
        let form = new FormData(registrationForm)

        // send the POST.
        fetch('http://localhost:5000/create/user', { method : 'POST', body : form})
        .then( response => response.json() )
        .then( flask => console.log(flask))
        .then( window.location.href="/dashboard" )
    }
}

function validateRegistration(form) {
    let is_valid = true

    if (form.f_name.value.length < 2) {
        createError('Invalid first name.')
        is_valid = false
    }
    if (form.l_name.value.length < 2) {
        createError('Invalid last name.')
        is_valid = false
    }
    if (!EMAIL_REGEX.test(form.email.value)) {
        createError('Invalid email.')
        is_valid = false
    }
    if (!PASS_REGEX.test(form.password.value)) {
        createError('Invalid password.')
        is_valid = false
    }
    if (form.password.value != form.confirm_password.value) {
        createError('Passwords do not match.')
        is_valid = false
    }
    // after checking everything, return the validation status.

    return is_valid
}

function createError(message) {
    const errorMessage = document.createElement('p')
    errorMessage.innerText = message
    error_box.appendChild(errorMessage)
}

function clearErrors(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}