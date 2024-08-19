let http = require('http');

http.createServer().listen(5005, () => {
    console.log('server is running at: http://127.0.0.1:5005')
});

