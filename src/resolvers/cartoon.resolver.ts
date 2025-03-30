import { Cartoon } from "../entities/cartoon.entities";
import { Personnage } from "../entities/personnage.entities";
import { Genre } from "../entities/genre.entities";
import { Resolver, Query, Mutation } from "type-graphql";

type CartoonId = {
  id: string;
}

@Resolver(Cartoon)
export default class CartoonResolvers {

  @Query(()=> Cartoon, { nullable: true })
  async getOneCartoonById (_: unknown, args: CartoonId): Promise<Cartoon | null>
  {
    return Cartoon.findOne({where : {id: parseInt(args.id)}});
  };

  @Query(()=> [Cartoon])
  async getCartoons(): Promise<Cartoon[]> {
    return Cartoon.find();
  };

  @Mutation(() => Number)
  async createCartoon (_: unknown, args: { cartoon: Cartoon }): Promise<number> {
    const {personnages, genres, ...rest} = args.cartoon;

    const newPersonnages = personnages?.map((perso) => {
      const myPers = new Personnage();
      myPers.name = perso.name;
      myPers.short_description = perso.short_description;
      myPers.role = perso.role;

      return myPers;
    }) as Personnage[];

    const newGenre = genres?.map((myGenre) => {
      const myGr = new Genre();
      myGr.name = myGenre.name;

      return myGr;
    }) as Genre[];

    const newCartoon: Cartoon = new Cartoon();
    Object.assign(newCartoon, rest);
    newCartoon.personnages = newPersonnages;
    newCartoon.genres = newGenre;
    const result = await newCartoon.save();
    return result.id;
  };

  @Mutation(() => Boolean)
  async deleteCartoon(_: unknown, args: CartoonId): Promise<boolean> {
    const deleteResult =await Cartoon.delete({id: parseInt(args.id)});
    return deleteResult.affected ? true : false;
  };
}