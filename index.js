const http = require("http");
const query = require("querystring");
const server = http.createServer((request,response)=>{
    var userData = ""
    request.on("data",(chunks)=>{
        userData += chunks.toString();
    })

    request.on("end",()=>{
        const data = query.parse(userData);
        const username = data.name;
        const password = data.pass;
        if(username == "rizwan khan" && password == "12345")
        {
            response.writeHead(200,{
                "Content-Type" : "application/json"
            })
            const successMessage = JSON.stringify({
                message : "user authentication"
            })
            response.write(successMessage);
            response.end();
        }
        else{
            response.writeHead(401,{
                "Content-Type" : "application/json"
            })
            const failed = JSON.stringify({
                message : "user anauthentication "
            })
            response.write(failed);
            response.end();
        }
        response.end();
    })
    
})
server.listen(8080);