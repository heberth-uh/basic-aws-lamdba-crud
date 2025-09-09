const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

const addTask = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    // Add try..catch for a better error handling
    try {
        console.log("Incoming event:", event);
        const { title, description } = JSON.parse(event.body);
        const createdAt = new Date().toISOString();
        const id = uuidv4();
    
        const newTask = {
            id,
            title,
            description,
            createdAt
        }
    
        await dynamoDB.put({
            TableName: process.env.TASK_TABLE,
            Item: newTask,
        }).promise();
    
        return {
            statusCode: 200,
            body: JSON.stringify(newTask)
        }
    } catch (error) {
        console.error("Error in addTask:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Internal Server Error',
                message: error.message
            })
        }
    }
}

module.exports = {
    addTask
}