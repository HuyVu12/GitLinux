const http = require('http');
const fs = require('fs');
const path = require('path')

const port = process.env.PORT || 3000

const server = http.createServer(
    (req, res) => {
        const filePath = path.join(__dirname, 'presentation', 'main.html')
        fs.readFile(filePath, (err, data) => {
            if(err) {
                res.statusCode = 500
                res.setHeaders('Content-Type', 'text/plain')
                res.end('Error!')
            }
            {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        })
    }
);
server.listen(
    port,() => {
        console.log(`Server running at port `+port);
    }
);
