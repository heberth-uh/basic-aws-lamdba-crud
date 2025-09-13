const AWS = require('aws-sdk')
const middy = require('@middy/core');
const httpJsonBodyParser = require('@middy/http-json-body-parser');

const updateTask = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const { done, title, description } = event.body;

    await dynamoDB.update({
        TableName: process.env.TASK_TABLE,
        Key: { id },
        UpdateExpression: 'set done = :done, title = :title, description = :description',
        ExpressionAttributeValues: {
            ':done': done,
            ':title': title,
            ':description': description
        },
        ReturnValues: 'ALL_NEW' // Returns all the updated values (it can be also NONE | UPDATED_OLD | ALL_OLD | UPDATED_NEW)
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Task updated successfully'
        })
    }
}

module.exports = {
    updateTask: middy(updateTask).use(httpJsonBodyParser())
}