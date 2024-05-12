import express from 'express';
import { getJogadores, addJogador, updateJogador, deleteJogador } from '../controllers/jogadoresController';
import { verifarToken } from '../middleware/autenticacaoMiddleware';

const router = express.Router();

router.get('/jogadores', verifarToken, getJogadores);
router.post('/jogadores', verifarToken, addJogador);
router.put('/jogadores/:id', verifarToken, updateJogador);
router.delete('/jogadores/:id', verifarToken, deleteJogador);

export default router;