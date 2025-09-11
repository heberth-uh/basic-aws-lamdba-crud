const AWS = require('aws-sdk');

const getTask = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const result = await dynamoDB.get({
        TableName: process.env.TASK_TABLE,
        Key: { id }
    }).promise()

    const task = result.Item;

    return {
        statusCode: 200,
        body: JSON.stringify({ task })
    }
}

module.exports = { getTask };