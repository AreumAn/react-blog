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

---
## Backend
* `Node.js`: node v12.13.1
* `Koa` framework
* `MongoDB` with `mongoose` library which is based on ODM(Object Data Modelling)
    ```
    yarn add mongoose dotenv
    ```
    * _Dotenv_ is a zero-dependency module that loads environment variables from a . env file into process. env . Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

* DB name: blog
