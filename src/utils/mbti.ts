import { Answer } from '../types';

export const calculateMBTI = (userAnswers: Answer[]): string => {
    const counts: Record<string, number> = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0,
    };

    userAnswers.forEach(answer => {
        counts[answer.selectedType]++;
    });

    const result =
        (counts.E >= counts.I ? 'E' : 'I') +
        (counts.S >= counts.N ? 'S' : 'N') +
        (counts.T >= counts.F ? 'T' : 'F') +
        (counts.J >= counts.P ? 'J' : 'P');

    return result;
};
