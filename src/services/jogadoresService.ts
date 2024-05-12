import { Jogador } from '../models/Jogador';

let jogadores: Jogador[] = [
    { id: 1, nome: 'Pudge', TimeId: 1 },
    { id: 2, nome: 'Invoker', TimeId: 1 },
    { id: 3, nome: 'Crystal Maiden', TimeId: 1 },

    { id: 4, nome: 'Yasuo', TimeId: 2 },
    { id: 5, nome: 'Yone', TimeId: 2 },
    { id: 6, nome: 'Master yi', TimeId: 2 },

    { id: 7, nome: 'Caratekid', TimeId: 3 },
    { id: 8, nome: 'Pedro', TimeId: 3 },
    { id: 9, nome: 'Leo', TimeId: 3 },

    { id: 10, nome: 'Xia Vigor', TimeId: 4 },
    { id: 11, nome: 'Bao Son', TimeId: 4 },
    { id: 12, nome: 'Mikhail Martín', TimeId: 4 },

    { id: 13, nome: 'Danilo Gentili', TimeId: 5 },
    { id: 14, nome: 'Leo Lins', TimeId: 5 },
    { id: 15, nome: 'Murilo Couto', TimeId: 5 },

    { id: 16, nome: 'Bolsonaro', TimeId: 6 },
    { id: 17, nome: 'Lula', TimeId: 6 },
    { id: 18, nome: 'Tais Carla', TimeId: 6 }
];

export const getJogadoresService = (): Jogador[] => {
    return jogadores;
};

export const addJogadorService = (novoJogador: Jogador): void => {
    jogadores.push(novoJogador);
};

export const updateJogadorService = (id: number, jogadorData: Jogador): Jogador => {
    const jogadorIndex = jogadores.findIndex(jogador => jogador.id === id);
    if (jogadorIndex !== -1) {
        const updatedJogador: Jogador = { ...jogadores[jogadorIndex], ...jogadorData };
        jogadores[jogadorIndex] = updatedJogador;
        return updatedJogador;
    } else {
        throw new Error('Jogador não encontrado');
    }
};

export const deleteJogadorService = (id: number): void => {
    jogadores = jogadores.filter(jogador => jogador.id !== id);
};