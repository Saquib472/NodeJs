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
