const express = require("express");
const app = express();

app.get('/',(req, res)=> {
    if(req.url === '/'){

        res.send('Server is running at port 5500')
    }
});

app.listen(5500,() => {
    console.log('Server is up and running')
})

