# Serverless Task API

This is a simple CRUD API built with **AWS Lambda**, **DynamoDB** and the **Serverless Framework**. It was made as a learning project to get familiar with serverless architecture on AWS.

```mermaid
flowchart LR
    subgraph API["API Gateway / HTTP API"]
        direction TB
        CreateTask[POST /tasks]
        GetTasks[GET /tasks]
        GetTask[GET /tasks/{id}]
        UpdateTask[PUT /tasks/{id}]
        DeleteTask[DELETE /tasks/{id}]
    end

    subgraph Lambda["AWS Lambda Functions"]
        direction TB
        LT_Create[createTask Lambda]
        LT_GetAll[getTasks Lambda]
        LT_GetOne[getTask Lambda]
        LT_Update[updateTask Lambda]
        LT_Delete[deleteTask Lambda]
    end

    subgraph DB["DynamoDB"]
        direction TB
        TasksTable[TASK_TABLE]
    end

    %% Connections
    CreateTask --> LT_Create --> TasksTable
    GetTasks --> LT_GetAll --> TasksTable
    GetTask --> LT_GetOne --> TasksTable
    UpdateTask --> LT_Update --> TasksTable
    DeleteTask --> LT_Delete --> TasksTable
```

## Features ✨

Basic CRUD functions:

- Create a new task
- Geta all tasks
- Get a single task
- Update a task
- Delete a task

## Technologies 🛠️

- **AWS Lamda**. Functions fro CRUD operations
- **AWS DynamoDB**. NoSQL database for storing tasks
- **AWS IAM**. Roles and permissions for Lambda to access DynamoDB
- **AWS Cloudwatch**. Monitoring/logs
- **Serverless Framework**. Deployment and infrasctructure as code

## Endpoints 🌐

This API exposes basic REST endpoints:

- `GET /tasks`
- `GET /tasks/{id}`
- `POST /tasks`
- `PUT /tasks/{id}`
- `DELETE /tasks/{id}`

## Notes 📝

This is not a production-ready project

```

```
