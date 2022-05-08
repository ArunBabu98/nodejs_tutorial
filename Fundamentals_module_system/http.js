const { request,get } = require('https');

const req = request('https://google.com/', (res) =>{
    res.on('data', (chunk) =>{
        console.log(`Data Chunk: ${chunk}`);
    });
    res.on('end', ()=>{
        console.log("Request Ended!");
    });
});

req.end();


// No need of req2.end() when using get 

const req2 = get('https://google.com/', (res) =>{
    res.on('data', (chunk) =>{
        console.log(`Data Chunk: ${chunk}`);
    });
    res.on('end', ()=>{
        console.log("Request Ended!");
    });
});