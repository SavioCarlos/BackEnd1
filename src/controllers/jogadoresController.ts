import { Request, Response } from 'express';
import { getJogadoresService, addJogadorService, updateJogadorService, deleteJogadorService } from '../services/jogadoresService';
import { verifarToken } from '../middleware/autenticacaoMiddleware';


export const getJogadores = (req: Request, res: Response) => {
    verifarToken(req, res, () => {
        const jogadores = getJogadoresService();
        res.json(jogadores);
    });
};

export const addJogador = (req: Request, res: Response) => {
    verifarToken(req, res, () => {
        const novoJogador = req.body;
        addJogadorService(novoJogador);
        res.status(201).json({ message: 'Jogador adicionado' });
    });
};

export const updateJogador = (req: Request, res: Response) => {
    verifarToken(req, res, () => {
        const id = parseInt(req.params.id, 10);
        const jogadorData = req.body;
        try {
            updateJogadorService(id, jogadorData);
            res.json({ message: 'Jogador atualizado' });
        } catch (error) {
            res.status(404).json({ message: 'Jogador não encontrado' });
        }
    });
};

export const deleteJogador = (req: Request, res: Response) => {
    verifarToken(req, res, () => {
        const id = parseInt(req.params.id, 10);
        try {
            deleteJogadorService(id);
            res.json({ message: 'Jogador deletado' });
        } catch (error) {
            res.status(404).json({ message: 'Jogador não encontrado' });
        }
    });
};