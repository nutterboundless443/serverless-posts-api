const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = 'Posts';

module.exports.createPost = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const params = {
      TableName: tableName,
      Item: {
        id: data.id,
        title: data.title,
        content: data.content,
        createdAt: new Date().toISOString()
      }
    };

    await dynamo.put(params).promise();
    return { statusCode: 201, body: JSON.stringify(params.Item) };
  } catch (error) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid input' }) };
  }
};

module.exports.getPosts = async () => {
  const params = {
    TableName: tableName
  };

  const data = await dynamo.scan(params).promise();
  return { statusCode: 200, body: JSON.stringify(data.Items) };
};

module.exports.updatePost = async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: tableName,
    Key: {
      id: event.pathParameters.id
    },
    UpdateExpression: 'set title = :title, content = :content',
    ExpressionAttributeValues: {
      ':title': data.title,
      ':content': data.content
    },
    ReturnValues: 'ALL_NEW'
  };

  const result = await dynamo.update(params).promise();
  if (!result.Attributes) {
    return { statusCode: 404, body: JSON.stringify({ error: 'Post not found' }) };
  }
  return { statusCode: 200, body: JSON.stringify(result.Attributes) };
};

module.exports.deletePost = async (event) => {
  const params = {
    TableName: tableName,
    Key: {
      id: event.pathParameters.id
    }
  };

  await dynamo.delete(params).promise();
  return { statusCode: 204, body: null };
};