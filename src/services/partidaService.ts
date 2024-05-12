import { Partida } from '../models/Partida';

let partidas: Partida[] = [
    { id: 1, date: "2024-10-18", teams: ["Leo Lins", "Governo"], resultado: [7, 1] },
    { id: 2, date: "2024-10-16", teams: ["Shen", "Shopee"], resultado: [6, 4] },
    { id: 3, date: "2024-10-12", teams: ["Dota 2", "LoL"], resultado: [4, 2] }
];

export const getPartidasService = (): Partida[] => {
    return partidas;
};

export const addPartidaService = (novaPartida: Partida): void => {
    partidas.push(novaPartida);
};

export const updatePartidaService = (id: number, partidaData: Partida): void => {
    const partidaIndex = partidas.findIndex(partida => partida.id === id);
    if (partidaIndex !== -1) {
        partidas[partidaIndex] = { ...partidas[partidaIndex], ...partidaData };
    } else {
        throw new Error('Partida não encontrada');
    }
};

export const deletePartidaService = (id: number): void => {
    partidas = partidas.filter(partida => partida.id !== id);
};