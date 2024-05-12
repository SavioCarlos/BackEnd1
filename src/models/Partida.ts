export interface Partida {
    id: number;
    date: string;
    teams: [string, string];
    resultado?: [number, number];
}