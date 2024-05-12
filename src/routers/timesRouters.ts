import express from 'express';
import { getTimes, addTime, deleteTime, updateLogo } from '../controllers/timesController';
import { verifarToken } from '../middleware/autenticacaoMiddleware';

const router = express.Router();

router.get('/times', verifarToken, getTimes);
router.post('/times', verifarToken, addTime);
router.delete('/times/:id', verifarToken, deleteTime);
router.put('/times/:id/logo', verifarToken, updateLogo);

export default router;