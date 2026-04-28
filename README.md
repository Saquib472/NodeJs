# Node JS

## About 
- Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
- Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
- Window Object / DOM is not available in node js

## Download node js
- Download the LTS version that is Long Term Support.

## 01_Hello-World
- To run the hello.js file - node hello.js
- Do npm init
- Add "start": "node hello.js" in package.json script.

## 02_Modules : Modules in NodeJS
- Modules are the building blocks of Node.js applications, allowing you to organize code into logical, reusable components. They help in:

    - Organizing code into manageable files
    - Encapsulating functionality
    - Preventing global namespace pollution
    - Improving code maintainability and reusability
- Node.js provides several built-in modules that are compiled into the binary. 
    - fs
    - http
    - crypto
    - path 
    etc.

## 03_Fs-Modules : File System
- The Node.js File System module (fs) provides a comprehensive set of methods for working with the file system on your computer.
- It allows you to perform file I/O operations in both synchronous and asynchronous ways.
- Create file And Write in file Sync and Async way.
- Read file in Sync and Async way.
- Append data in a file.
- Copy a file.
- Delete or Unlink file.
- Create Folder.
- Find Stat of a file.

## 04_HTTP-Servers : 
- Check index.js for reference of how to create basic server.

## 05_URLs : 
- Handling URLs.
- npm i url 
- Handling query params.

## 06_HTTP-Requsts : 
- GET, POST, PUT, PATCH, DELETE
- req.method

## 07_Getting-Started-ExpressJs : 
- Express is a frameWork.
- We don't need http here or external package like url.
- npm i express --save
- app.METHOD(PATH, HANDLER)

## _Versioning : 
- Let's assume the express version is 5.2.1
- Three Parts : from right to left
    - 3rd part : 1 
        - Minor Fixes (Optional). May be some minor bug fixed.
    - 2nd part : 2
        - Recommended Bug Fix (Security Fix). Some features added or Bug fixes.
    - 1st part : 5
        - Major Release. (Major / Breaking Update)
- ^ (Carrot Symbol) : Install all Recommended and Minor Fixes Automatically.
- ~ (squiggly line) : Install Only Minor Versions automatically.

## _Rest-API : 
- A REST API (Representational State Transfer API) enables communication between client and server over HTTP. It exchanges data typically in JSON format using standard web protocols.
- Uses HTTP methods like GET, POST, PUT, PATCH, and DELETE.
- Client sends requests to server endpoints (URLs).
- Server returns responses such as JSON(CSR), XML, HTML(SSR), or images.
- Maps HTTP methods to CRUD operations (Create, Read, Update, Delete).
- Follow Server Client Architecture.
- Rules of HTTP Methods like : GET , POST , PATCH , PUT , DELETE
    - GET/user : Read user data and return data
    - POST/user : Handle new user creation.
    - PATCH/user : Update the user data.
    - POST/createUser : Handle new User Creation (NOT RECOMMENDED)
    - POST/updateUser : Update the user data. (NOT RECOMMENDED)
    - POST/deleteUser : Delete the user. (NOT RECOMMENDED)
- res.send()
- res.render()
- res.json()

## 08_Building-Rest-API : 
- npm init
- create index.js
- npm i express
- Check the task.txt for further details.
- Using https://mockaroo.com/ for data as of now.
- Please Check index.js for reference of how to create routes GET, POST, PATCH, DELETE.
- And how to response in a json format.

## Express Middleware : 
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
- Middleware functions can perform the following tasks:
    - Execute any code.
    - Make changes to the request and the response objects.
    - End the request-response cycle.
    - Call the next middleware function in the stack.

## HTTP Headers : 
- HTTP headers are key-value pairs sent between a client (browser) and server in HTTP requests and responses, carrying critical metadata for communication, such as content type, caching policies, authentication, and security settings. They act as invisible instructions that ensure web traffic is routed, rendered, and secured correctly. 

## HTTP Status Code : 
- HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
- Informational responses (100 – 199)
- Successful responses (200 – 299)
- Redirection messages (300 – 399)
- Client error responses (400 – 499)
- Server error responses (500 – 599)
- Read docs - https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

## npm i nodemon : for automatic starting server if code changed. 
- Change package.json : "start" : "nodemon index.js"

## MongoDB : 
- MongoDB is a document database. It stores data in a type of JSON format called BSON.
- MongoDB is a document-oriented, operational database built from the ground up as an alternative to the relational database for modern applications. Unlike relational databases, MongoDB allows developers to store rich JSON-like documents that map naturally to the objects they use in their code.
- Install mongodb community edition and mongodb shell.
- npm i mongoose  - Mongoose use for connecting database to code.
- Schema - Define the Structure.
- Create model using schema.
- Using Model we do CRUD Operation.

- show dbs
- use db name
- show collections
- db.modelName.find({})
- db.modelName.deleteMany({})

## 09_Connecting-MongoDB 
- Check index.js for reference.
- Connect DB with Mongoose Library.
- Mongoose is an Object Data Modeling (ODM) library for MongoDB. You can use Mongoose to help with data modeling, schema enforcement, model validation, and general data manipulation.

## 10_MVC-Pattern
- Model View Contoller 
- The Model-View-Controller (MVC) pattern is a software architectural design that separates applications into three interconnected components—Model (data), View (UI), and Controller (logic)—to improve scalability, maintenance, and code organization. It reduces complexity by separating business logic from user interface concerns.
- Create Folders > 
    - controllers
    - models
    - views
    - routes
    - middlewares

## 11_URL-Shortner 
- npm init
- npm i express
- npm i mongoose
- npm i shortid / nanoid
- npm i nodemon
- Folder Structure 
    - index.js - Hit Point.
    - connection.js - A async function which use to connect to MongoDb Database.
    - models 
        - url.js - A Mongo Schema with a model.
    - controllers
        - url.js - Async functions with logic of CRUD Operations.
    - routes
        - url.js - All the routes like GET, POST, PATCH, DELETE.
        - "/" , POST - To post the redirectURL And Creat the Short URL and VisitHistory.
        - "/:shortId" - To redirect to the main URL.
        - "/analytics/:shortId" - To get the Visited History.
    - views
        - All the HTML / EJS files.
- Server Side Rendering
    - An HTML page render from the server itself.
    - Use a Template Engine - A template engine in Node.js is a tool that allows you to use static template files (blueprints) and dynamically inject data into them to produce final HTML pages. This process, often called Server-Side Rendering (SSR), helps you separate your application logic from your presentation (HTML). 
    - Popular Template Engines are EJS, Pug etc.
    - Use EJS.(Embedded JavaScript)
    - npm i ejs
    - express ejs.
    - app.set()
    - You need path for views to know where the html ejs files are.
- Authentication :
    - Two Patterns -> Statefull AND Stateless.
    - Create user collection model.
    - Create user route and controllers
    - Create signup and login ejs page.
    - Coockies
    - npm i uuid
    - Create service folder - auth.js (Mapping session id with user)
    - setUser and getUser
    - While login set the user with uuid and return res.cookie
    - npm i cookie-parser
    - Create a Middleware auth.js for checking the user logged in or not.
    - Add createdBy to the db model.
