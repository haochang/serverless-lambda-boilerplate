const AWS = require('aws-sdk');
const { Client } = require('@elastic/elasticsearch');
const { createAWSConnection, awsGetCredentials } = require('@acuris/aws-es-connection');

exports.handleGet = async (event, context) => {

  const host = process.env.ELASTICSEARCH_ENDPOINT;
  const awsCredentials = await awsGetCredentials();

  const AWSConnection = createAWSConnection(awsCredentials)
  const client = new Client({
    ...AWSConnection,
    node: `https://${host}`
  });

  const result = await client.search({
    index: 'favorite_candy',
    body: {
      query: {
        match: { quote: 'Lisa' }
      }
    }
  });
console.log(`hits`, result.body.hits);
  return {
    statusCode: 200,
    body: JSON.stringify(result.body.hits)
  }
};
