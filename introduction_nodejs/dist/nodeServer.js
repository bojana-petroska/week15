import http from "http";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
function handler(req, res) {
    res.writeHead(200, {
        'content type': 'text/plain'
    });
    res.end('hello from the backend server');
}
http.createServer(handler).listen(port, () => {
    console.log('server is running at: http://127.0.0.1:5001');
});
