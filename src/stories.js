const aws4 =  require('aws4');
const fetch = require('node-fetch');

exports.handleGet = async (event, context) => {
  const host = process.env.ELASTICSEARCH_ENDPOINT;
  const indexName = 'stories';
  const headers = {
    'Content-Type': 'application/json',
  };

  const options = aws4.sign({
    host,
    path: '/' + indexName,
    method: 'HEAD',
    headers,
  });

  const result = await fetch(
    `https://${host}/${indexName}`,
    options,
  );

  const body = await result.text()
  return getHttpResponseData(body);
};

const getHttpResponseData = (body) => {
  return {
    statusCode: 200,
    body
  }
};
