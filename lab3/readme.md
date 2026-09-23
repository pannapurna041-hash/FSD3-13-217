localhost - URL
127.0.0.1 - IP address
ctrl+c - stop the server

evrey request from client has a pair of {request,response}

## npm- node package manager
used to install,run,uninstall any program/project and package
- npm install <packageName>
- npm uninstall <packageName>

to use npm, the project must be npm project,
to create npm project we can use

- npm init -y
- it creates a package.json file automatically
  package.json holds all the information related to install
  package from npm 
- update package.json, set type='module'
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_modulesby .gitignore

Nodemon - it restart the server automatically when file changes,to install

> npm i nodemon -D

Note: -D flag will install this package as developer dependency

- to execute any program, update the package.json file then start the server as <b>npm run dev</b>
- start -> it will execute the app on deployment
- dev -> it will start server in development phase (only for developer)

- res: it will return contents (json/html/plain) to the user/client 
- req: it will retrive the information from client to the server 
- server send also statusCodes to the client, that indicates the error/success message
## Status Codes
- 200 -> Ok
- 201 -> created
- 400 -> Badrequest
- 403 -> forbidden 
- 404 -> Not Found 
- 500 -> Internal Server Error

## Content Type 

- text/plain
- text/html
- application/json
- text/css

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode 

## Response as html content 
1. res.end ("any html content/tag)
2. html file
  . read by create readStream
  . pipe with res 

## json = javascript object notation
server return data only not html contents because html content will be written by frontend devloper. The data is in json format json always stores data in key value pair in closed by curly {}, array can be stored by [], one pair of curly Bracket will represent one object and its property will be seperated by comma (,)
```
{
  id:1,
  name:"Mobile",
  price:25000,
  rating:4.5,
  review:200
}
```

## Headers
Header is used to tell the client, the type of data sent by the server.It may be html file,json data,plain text file,css file,any tokens (for login)
1. text/plain -> text file
2. text/html ->html contents/file
3. application/json -> json contents/file
4. text/css -> stylesheet
5. application/form-data -> for uploading file

## GET :
no parameter pass to the server when we receive all items
## POST :
to add records we pass the value from body section in json format of api tester (Echo api)   
## Delete :
 to delete any product we pass parameter that is id of the product from url
## PUT/PATCH : 
we pass id from url and data to update from body
