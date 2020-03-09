# react-blog

---
## Dev set up
- **eslint, prettier**
```
yarn add --dev eslint
yarn run eslint --init
yarn add eslint-config-prettier
```

- **nodemon for automatically server restart**

`yarn add --dev nodemon`

Add this script into `package.jason`
```json
"scripts": {
      "start": "node src",
      "start:dev": "nodemon --watch src/ src/index.js"
  }

```
If you don't need to auto restart `yarn start`, <br/>
If you need auto restart `yarn start:dev`

- **koa-router**
```
yarn add koa-router  
```

- **esm to use ES Module**
```
yarn add esm
```

- **Add jsconfig.json for auto recommend**

---
## Backend
* `Node.js`: node v12.13.1
* `Koa` framework
  ```
  //.env file
  
  PORT=4000
  MONGO_URI=mongodb://localhost:27017/blog
  JWT_SECRET= 
  ```
* `MongoDB` with `mongoose` library which is based on ODM(Object Data Modelling)
    ```
    yarn add mongoose dotenv
    ```
    * _Dotenv_ is a zero-dependency module that loads environment variables from a . env file into process. env . Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

* DB name: blog
    | Filed name    | data type | desc              |
    |---------------|-----------|-------------------|
    | title         | String    | blog post title   |
    | body          | String    | blog post content |
    | tag           | [String]  | list of tag       |
    | publishedDate | Date      | published date    |

* JWT
  ```
  yarn add jsonwebtoken
  ```
* sanitize-html library

---
## Frontend
* style: styled component
* data: redux, react-redux, redux-actions, immer redux-devtools-extension, axios redux-saga, qs
* writing editor: Quill - https://quilljs.com/docs/quickstart/

