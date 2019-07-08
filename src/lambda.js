import AWS from 'aws-sdk'

//AWS config
AWS.config.update({
    region: 'us-east-1',
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
        Payload : JSON.stringify(window.aeJS)
    }

    //Run the function
    lambda.invoke(lambdaParams, function(error, data) {
        if (error) {
            console.error(error)
        } else {
            console.log('Status code ->', data.StatusCode)
            console.log('Response object ->', JSON.parse(data.Payload) )
        }
    })
}