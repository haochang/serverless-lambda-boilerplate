exports.handler = async function (event, context) {
  console.log('## ENVIRONMENT VARIABLES: ' + JSON.stringify(process.env))
  console.log('## CONTEXT: ' + JSON.stringify(context))
  console.log('## EVENT: ' + JSON.stringify(event))
  return getHttpResponseData()
}

const getHttpResponseData = () => {
  return {
    statusCode: 200,
    body: 'hello my lambda works'
  }
}