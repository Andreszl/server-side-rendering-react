import express from 'express';

const router = express.Router();

router.get('/data', (req, res) => {
    res.send({ data: [] })
})

export default router;