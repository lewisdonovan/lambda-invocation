import runLambda from './lambda'

//Init AEJS SDK
window.AEJSReady = (aeJS) => {
    window.aeJS = aeJS;
    aeJS.settings['auth_window'] = true;
}

//Create the login button
let button = document.createElement('a')
    button.innerHTML = 'Login'
    button.setAttribute('href', '#')
    button.setAttribute('data-ae-register-link', 'spotify')
document.getElementById('app').appendChild(button)

if ( typeof window.aeJS.events !== "undefined" ) {
    aeJS.events.onLogin.addHandler(runLambda)
} else {
    runLambda()
}