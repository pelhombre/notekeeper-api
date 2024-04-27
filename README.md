# NoteKeeper REST API

## Description:

The **NoteKeeper REST API**, powered by the Express framework, is a tool for managing CRUD operations for a notes application. This API provides developers with routes to create, read, update, and delete notes.

## Key Features:

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on notes with ease.
- **Scalable Architecture**: Built on RESTful principles, the API boasts a scalable architecture, capable of handling large volumes of requests without compromising performance.

## Technologies Used:

- **Node.js**: Leveraging the efficiency and versatility of Node.js for building scalable server-side applications.
- **Express.js**: Utilizing the lightweight and flexible Express framework to simplify routing, middleware integration, and request handling, speeding up development time.

## Usage:

Follow these steps to run server and use API in local:

```bash
## Clone the repository to your local machine.
git clone <git_repo_url>

## Move to project repo
cd <folder_path>

## Install dependencies using npm.
npm install

## Start the server using Node.js.
npm run dev:watch
```

## API:

### GET

#### PATH

```bash
/notes
```

#### RESPONSE

All notes

```bash
status: 200 OK | 404 Not Found
```

```json
{
  "notes": [
    {
      "id": "0WaR1-1714233765588",
      "name": "Walk the dog",
      "description": "Go to the park",
      "important": false,
      "status": "pending",
      "due_date": "4/27/2024",
      "created_at": 1714233765597
    }
  ]
}
```

### POST

#### PATH

```bash
/notes
```

#### REQUEST

```js
const newNote = {
  name: string,
  description: string,
  important: boolean,
  status: string("pending" | "in progress" | "done"),
  dueDate: string("dd/mm/yyyy"),
};
```

#### RESPONSE

Created note

```bash
status: 201 Created | 400 Bad Request
```

```js
{
  "id": "abcde-1714234679010",
  "name": "Wash dishes",
  "description": "Washing machine is out of order",
  "important": true,
  "status": "pending",
  "dueDate": "1/6/2024",
  "created_at": 1714234679010
}
```

### PUT

#### PATH

```bash
/notes/:id
```

#### REQUEST

```js
const updatedNote {
  name: string |
  description: string |
  important: boolean |
  status: string ("pending" | "in progress" | "done") |
  dueDate: string ("dd/mm/yyyy")
}
```

#### RESPONSE

Updated note

```bash
status: 200 OK | 400 Bad Request
```

```json
{
  "id": "abcde-1714234679010",
  "name": "Wash dishes",
  "description": "Washing machine is out of order",
  "important": true,
  "status": "pending",
  "dueDate": "1/6/2024",
  "created_at": 1714234679010
}
```

```json
{
  "error": "Note with id abcde-1714234679010 does not exist"
}
```

### DELETE

#### PATH

```bash
/notes/:id
```

#### RESPONSE

Deleted note

```bash
status: 200 OK | 404 Not Found
```

```json
{
  "id": "abcde-1714234679010",
  "name": "Wash dishes",
  "description": "Washing machine is out of order",
  "important": true,
  "status": "pending",
  "dueDate": "1/6/2024",
  "created_at": 1714234679010
}
```

```json
{
  "error": "Note with id abcde-1714234679010 does not exist"
}
```

## License:

This project is licensed under the MIT License, granting users the freedom to use, modify, and distribute the software as they see fit. See the LICENSE file in the repository for more details.

---

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-black.svg)](https://sonarcloud.io/summary/new_code?id=DAW-EPIA-MAT_notekeeper-api)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=DAW-EPIA-MAT_notekeeper-api&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=DAW-EPIA-MAT_notekeeper-api)

```

```
