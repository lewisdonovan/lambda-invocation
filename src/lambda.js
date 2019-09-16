import AWS from 'aws-sdk'

//AWS config
AWS.config.update({
    region: 'eu-west-2',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
})

export default () => {
    //Create Lambda instance for invocation
    const lambda = new AWS.Lambda()
    let lambdaParams = {
        FunctionName : process.env.AWS_LAMBDA_FUNCTION,
        InvocationType : "RequestResponse",
        LogType : "None",
        Payload : JSON.stringify({
            user: window.aeJS.user,
            segment: "30" // Replace with the ID of the segment the user falls into from the quiz results
        })
    }

    //Run the function
    lambda.invoke(lambdaParams, function(error, data) {
        if (error) {
            console.error(error)
            //TODO: Add error-handling here
        } else {
            console.log('Status code ->', data.StatusCode)
            console.log('Response object ->', JSON.parse(data.Payload) )
            //TODO: Process the contents of the payload object and update the UI
        }
    })
}