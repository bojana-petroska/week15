import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const router = express.Router();
const _filename = fileURLToPath(import.meta.url);
const _dirName = path.dirname(_filename);
router.get('/', (req, res) => {
    console.log('get request to /');
    console.log(_dirName);
    res.sendFile(_dirName + `/index.html`);
});
router.post('/msg', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});
export default router;
