# GraphQL

- A GraphQL practice project using node & express

## Installation

```
npm init
```
- It is used to setup a new npm package.

```
npm install express express-graphql graphql nanoid 
```

- **Express**: Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily.

- **Express GraphQL**: The express-graphql module provides a simple way to create an Express server that runs a GraphQL API.

- **GraphQL**: GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data. ***[Read more](https://graphql.org/learn/)***

- **nanoid**: It is used for generating random unique ID. (***alternative: [uuid()](https://www.npmjs.com/package/uuid)***)

```
npm install -D nodemon
```
- **Nodemon**: nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

- **-D** is shorthand for *devDependencies*. Dev dependencies are modules which are only required during development whereas dependencies are required at runtime.

## Package.json file
- In package.json file, write below command inside the scripts object. So, when you run the server using npm start it will run index.js file using nodemon.
```
"scripts": {
  "start": "nodemon ./index.js"
}
```

## Run the Server😀
```
npm start
```