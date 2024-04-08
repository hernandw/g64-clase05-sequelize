import express from 'express';
import sequelize from '../config/db.js';
const router = express.Router();

router.get('/', (req, res) => {
sequelize.sync()
    res.send('Hola mundo desde router');
})

export default router