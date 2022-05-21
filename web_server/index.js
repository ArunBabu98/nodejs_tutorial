const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/friends') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        res.end(JSON.stringify({
            id:1,
            name: 'something'
        }));
    } else if(req.url === '/messages'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h1><p> This is an example </p></h1>');
        res.write('</body>');
        res.write('</html>')
        res.end();
    } else{
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log('Listening on port 3000');
});
