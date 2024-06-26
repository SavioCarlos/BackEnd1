import { Request, Response } from 'express';
import { getPartidasService, addPartidaService, updatePartidaService, deletePartidaService } from '../services/partidaService';
import { verifarToken } from '../middleware/autenticacaoMiddleware';

export const getPartidas = (req: Request, res: Response) => {
    verifarToken(req, res, () => {
        const partidas = getPartidasService();
        res.json(partidas);
    });
};

export const addPartida = (req: Request, res: Response) => {
    verifarToken(req, res, () => {
        const novaPartida = req.body;
        addPartidaService(novaPartida);
        res.status(201).json({ message: 'Partida adicionada' });
    });
};

export const updatePartida = (req: Request, res: Response) => {
    verifarToken(req, res, () => {
        const id = parseInt(req.params.id, 10);
        const partidaData = req.body;
        try {
            updatePartidaService(id, partidaData);
            res.json({ message: 'Partida atualizada' });
        } catch (error) {
            res.status(404).json({ message: 'Partida não encontrada' });
        }
    });
};

export const deletePartida = (req: Request, res: Response) => {
    verifarToken(req, res, () => {
        const id = parseInt(req.params.id, 10);
        try {
            deletePartidaService(id);
            res.json({ message: 'Partida deletada' });
        } catch (error) {
            res.status(404).json({ message: 'Partida não encontrada' });
        }
    });
};