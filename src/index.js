import runLambda from './lambda'

//Init AEJS SDK
window.AEJSReady = (aeJS) => {
    window.aeJS = aeJS
    aeJS.settings['auth_window'] = true
}

/*TODO: 
in production, remove this conditional statement and 
rely on error-handling instead
*/
if ( typeof window.aeJS.events !== "undefined" ) {

    //Create the login button
    let button = document.createElement('a')
        button.innerHTML = 'Login'
        button.setAttribute('href', '#')
        button.setAttribute('data-ae-register-link', 'spotify')
    document.getElementById('app').appendChild(button)

    //Trigger the Lambda function after a login event
    aeJS.events.onLogin.addHandler(runLambda)

    //TODO: Add error-handling

} else {
    //Run the Lambda using the dummy data
    //TODO: remove in production
    runLambda()
}