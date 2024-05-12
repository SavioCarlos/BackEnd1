import { Time } from '../models/Time';

let times: Time[] = [
    { id: 1, nome: 'Dota 2', logo: 'LogoDota2.png' },
    { id: 2, nome: 'LoL', logo: 'LogoLoL.png' },
    { id: 3, nome: 'Shein', logo: 'LogoShen.png' },
    { id: 4, nome: 'Shopee', logo: 'LogoShopee.png' },
    { id: 5, nome: 'Leo Lins', logo: 'LogoHumor.png' },
    { id: 6, nome: 'Governo', logo: 'LogoGoverno.png' },
];

export const getTimesService = (): Time[] => {
    return times;
};

export const addTimeService = (novoTime: Time): void => {
    times.push(novoTime);
};

export const deleteTimeService = (id: number): void => {
    times = times.filter(time => time.id !== id);
};

export const updateLogoService = (id: number, logo: string): Time => {
    const timeIndex = times.findIndex(time => time.id === id);
    if (timeIndex !== -1) {
        times[timeIndex].logo = logo;
        return times[timeIndex];
    } else {
        throw new Error('Time não encontrado');
    }
};