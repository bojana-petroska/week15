import express from 'express';
import userHandlers from './userHandlers.js';
const router = express.Router();
const authMiddleware = (req, res, next) => {
    console.log(req);
    if (req.headers.authorization === 'Bearer token') {
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
};
const validation = (req, res, next) => {
    if (!req.body || !req.body.name) {
        res.status(403).json({ message: 'name is required' });
    }
    else {
        next();
    }
};
// creating API Endpoints
router.get('/users', userHandlers.getAll);
// get /users/:id => return a specific
router.get('/users/:id', userHandlers.get);
// post / resource with body => create new user
router.post('/users', authMiddleware, validation, userHandlers.post);
router.delete('/users/:id', authMiddleware, userHandlers.remove);
router.put('/users/:id', userHandlers.put);
router.all('/secret', (req, res) => {
    console.log('request sent');
    res.json({ message: 'request sent' });
});
export default router;
