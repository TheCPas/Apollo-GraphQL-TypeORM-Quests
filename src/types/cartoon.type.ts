import { Personnage } from './personnage.type';

export type Cartoon = {
  "id": number;
  "name": string;
  "description": string;
  "nb_of_episodes": 39,
  "nb_of_seasons": 1,
  "genres": string[];
  "realisator": string;
  "author": string;
  "ft_diffusion": string;
  "personnages": Personnage[]; 
};