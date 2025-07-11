// Barrel file - arquivo que exporta todos os schemas

import { questions } from './questions.ts';
import { rooms } from './rooms.ts';

export const schema = {
  rooms,
  questions,
};
