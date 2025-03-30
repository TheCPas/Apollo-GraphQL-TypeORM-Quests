import { Cartoon } from "../entities/cartoon.entities";
import { Personnage } from "../entities/personnage.entities";
import { Genre } from "../entities/genre.entities";
import { Resolver, Query, Mutation, Arg, InputType, Field, Int } from "type-graphql";
import { DeleteResult } from "typeorm";

@InputType()
class GenreInput {
  @Field()
  name: string
};

@InputType()
class PersonnageInput {
  @Field()
  name: string

  @Field()
  role: string

  @Field()
  short_description: string
};
@InputType()
class CartoonInput {
  @Field()
  name: string

  @Field()
  description: string

  @Field()
  nb_of_episodes: number

  @Field()
  nb_of_seasons: number

  @Field(() => [GenreInput])
  genres: [GenreInput]

  @Field()
  realisator: string

  @Field()
  author: string

  @Field()
  ft_diffusion: string

  @Field(() => [PersonnageInput])
  personnages: [PersonnageInput]
};
@Resolver(Cartoon)
export default class CartoonResolvers {

  @Query(()=> Cartoon, { nullable: true })
  async getOneCartoonById (@Arg("id") id: string): Promise<Cartoon | null>
  {
    return await Cartoon.findOne({
      where : {id: parseInt(id)},
      relations: ["genres", "personnages"]
    });
  };

  @Query(()=> [Cartoon])
  async getCartoons(): Promise<Cartoon[]> {
    return await Cartoon.find({
      relations: ["genres", "personnages"],
    });
  };

  @Mutation(() => Int)
  async createCartoon (@Arg("id") cartoon: CartoonInput): Promise<number> {
    const {personnages, genres, ...rest} = cartoon;

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
  async deleteCartoon(@Arg("id") id: string): Promise<boolean> {
    const result: DeleteResult =await Cartoon.delete({id: parseInt(id)});
    if (result.affected && result.affected > 1) {
      return true;
    }
    return false;
  };
}