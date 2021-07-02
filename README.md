# LearningPathNodejs

Example Node.js project using a PostgreSQL database.

## Documentation

| Route             | HTTP Verb | POST body                               | Description           |
| ----------------- | --------- | --------------------------------------- | --------------------- |
| /learningpath/    | `GET`     |                                         | Get learning paths.   |
| /learningpath/    | `POST`    | {'description': 'example', 'mipId': 1 } | Create learning path. |
| /learningpath/:id | `PUT`     | {'description': 'example', 'mipId': 1 } | Update learning path. |
| /learningpath/:id | `DELETE`  |                                         | Delete learning path. |

## Installation and Setup Instructions

### Installation:

```
npm install
```

### Create .env file with the following items to connect to DB:

```
POOL_LABEL=
POOL_HOST=
POOL_USER=
POOL_PORT=
POOL_DB=
POOL_PASSWORD=
```

### To start server:

```
npm run start:dev
```

### To connect to app:

`localhost:3000`

## Tech Stack

- express
- pg
- nodemon
- dotenv
