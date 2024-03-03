# Steps to create Node.js Backend
>Create package.json app file
```bash
npm init --yes 
```
>Add linter (eslint)
```bash
npx eslint --init
```
```bash
 How would you like to use ESLint? · style       
√ What type of modules does your project use? => commonjs
√ Which framework does your project use? => none
√ Does your project use TypeScript? => No 
√ Where does your code run? => node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JavaScript
```
>Add Jest library to unit tests
```bash
npm i jest
```
>Modify test script on package.json to allow permanent and total test coverage
```
"scripts": {
    "test": "jest --wachAll --collect-coverage"
    }
```
>Allow jest on .eslintrc.json
```bash
"env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
```
>Install express and nodemon libraries
```bash
npm i express

npm i nodemon
```
>Create index.js file on src folder   
Modify start script on package.json
```bash
"start": "nodemon src/index.js"
```
```bash
npm i debug

dentro de "scripts" criar => "start-dev": "set DEBUG=server,server:* & nodemon src/index.js"

npm i mongoose

npm i dotenv

npm i morgan (detalhes da resquisiçoes)

npm i chalk 
```
9 levantar o server no index.js e colocar os requires


10 Fazer os routers


11 Fazer os controllers


const debug = require('debug')('server:todoController');

function todoController() {
  async function createOne(req, res) {
    const newTask = new Task(req.body);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    createOne
  };
}

module.exports = todoController;

10 fazer esquema

11 arquivo .env na altura da pasta src

DDBB_URL= mongodb+srv://Emerson:Dirt!12345@cluster0.fd7rw.mongodb.net/test

12 Ir ao postman criar nova collection e adicionar o crud(create,read,update,delete)

13 Routes 

const { Router } = require('express');
const todoController = require('../controllers/todoController')();

function taskRouter() {
  const routes = Router();

  routes
    .route('/')
    .post(todoController.createTask);

  routes
    .route('/:taskId')
    .delete(todoController.deleteTaskById);

  return routes;
}

module.exports = taskRouter();

NOTA: IMPORTANTE la base de datos en compass, debe tener una s final, en caso de generarla manualmente. En el model,
pon una mayuscula.
