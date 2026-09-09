import http from 'http'

const server = http.createServer((req,res)=>{
    // req method -> GET, POST, PUT, DELETE, PATCH
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    
    // Browser can send only get request to the server
    //POST/PUT/PATCH/DElETE -> Can be checked by api tester
    //API Tester :- postman,echo api,thunder client
})