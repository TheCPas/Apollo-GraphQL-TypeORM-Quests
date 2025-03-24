import { default as cartoons } from "../../dataset.json";
import { Cartoon } from "../types/cartoon.type";

type GetOneCartoonByIdArgs = {
  id: string;
}

export const getOneCartoonById  = (_: unknown, args: GetOneCartoonByIdArgs): Cartoon => {
  return cartoons.find((cartoon) => cartoon.id === parseInt(args.id)) as Cartoon;
};

export const getCartoons = (): Cartoon[] => {
  return cartoons;
};

export const createCartoon = (_: unknown, args: { cartoon: Cartoon }): number => {
  const maxID = cartoons.reduce((accumulator, currentValue) => accumulator.id > currentValue.id ? accumulator : currentValue);
  const {personnages, ...rest} = args.cartoon;

  const newPersonnages = personnages.map((personnage) => {
    return {
      ...personnage,
      id: Date.now()
    }
  });

  const newCartoon = {
    ...rest,
    id: maxID.id + 1,
    personnages: newPersonnages,
  };

  cartoons.push(newCartoon);
  return  newCartoon.id;
}