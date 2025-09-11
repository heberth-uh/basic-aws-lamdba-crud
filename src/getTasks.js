const AWS = require('aws-sdk');

const getTasks = async (event) => {
    try {
        const dynamoDB = new AWS.DynamoDB.DocumentClient();
        const result = await dynamoDB.scan({
            TableName: process.env.TASK_TABLE
        }).promise();

        const tasks = result.Items
        console.log('getTask: ', tasks);

        return {
            statusCode: 200,
            body: JSON.stringify({ tasks })
        }
    } catch (error) {
        console.log('error: ', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        }
    }
}

module.exports = {
    getTasks
}