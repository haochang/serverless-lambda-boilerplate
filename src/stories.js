const aws4=  import('aws4');
const fetch = import('node-fetch');

exports.handleGet = async (event, context) => {
  console.log('aws4', aws4)
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
