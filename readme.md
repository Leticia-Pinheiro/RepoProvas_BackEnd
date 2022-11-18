# RepoProvas



<p align="center">
  <img height=300 src="https://cdn-icons-png.flaticon.com/512/825/825590.png">
</p>
<h1 align="center">
  RepoProvas
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

RepoProvas is a system for sharing tests between students! In RepoProvas anyone can look for old tests of their subjects and teachers or send old tests to help.

</br>

## Features

-   Sign In and Sign Up account
-   Create/Get Tests by disciplines and teachers with specific names


</br>

## API Reference

### AUTHENTICATION

### Sign Up


```http
POST /signUp
```

#### Request:


| Body         | Type     | Description                              |
| :------------| :------- | :--------------------------------------- |
| `email` | `string`| **Required**. User email                    |
| `password`  | `string`| **Required**. 
Password with at least 8 characters  |
| `confirmedPassword`  | `string`| **Required**. 
Confirm the password  |


####

#

</br>


### Sign In


```http
POST /signIn
```

#### Request:


| Body         | Type     | Description                              |
| :------------| :------- | :--------------------------------------- |
| `email` | `string`| **Required**. User email                    |
| `password`  | `string`| **Required**. 
User password |

####

#### Response:

```json
{
	"token": "jasonwebtoken (JWT)",
}
```

#

### TESTS

### Add a test

```http
POST /test
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. token |

`Authorization format: Bearer jsonwebtoken`

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `name`           | `string` | **Required**. test name      |
| `pdfUrl`         | `string` | **Required**. test url          |
| `categoryName` | `string` | **Required**. test category |
| `teacherName` | `string` | **Required**. test teacher |
`disciplineName` | `string` | **Required**. test discipline 



#

### Get tests group by Discipline

```http
GET /tests/discipline
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
  {
    "number": 1,
    "disciplines": [
      {
        "id": 1,
        "name": "HTML e CSS",
        "teachersDisciplines": [
          {
            "tests": []
          }
        ]
      },
      {
        "id": 4,
        "name": "Humildade",
        "teachersDisciplines": [
          {
            "tests": []
          }
        ]
      }
    ]
  }
```

#

### Get tests group by Teacher

```http
GET /tests/teacher
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
  {
    "number": 1,
    "disciplines": [
      {
        "id": 1,
        "name": "HTML e CSS",
        "teachersDisciplines": [
          {
            "tests": []
          }
        ]
      },
      {
        "id": 4,
        "name": "Humildade",
        "teachersDisciplines": [
          {
            "tests": []
          }
        ]
      }
    ]
  }
```

#



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`TOKEN_SECRET_KEY = any string`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/Leticia-Pinheiro/RepoProvas_BackEnd
```

Go to the project directory

```bash
  cd RepoProvas_BackEnd/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

</br>

## Authors

Letícia Gomez Pinheiro 
<p>Linkedin: https://www.linkedin.com/in/leticia-pinheiro-33354a1b6/</p>
<p>GitHub: https://github.com/Leticia-Pinheiro</p>
<br/>

#
