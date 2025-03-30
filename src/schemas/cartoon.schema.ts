import { InputType, Field } from "type-graphql";
import { Genre, GenreInput } from "../schemas/genre.schema";
import { Personnage, PersonnageInput } from "../schemas/personnage.schema";

@InputType()
export class Cartoon {
  @Field()
  id: number

  @Field()
  name: string

  @Field()
  description: string

  @Field()
  nb_of_episodes: number

  @Field()
  nb_of_seasons: number

  @Field(() => [Genre])
  genres: [Genre]

  @Field()
  realisator: string

  @Field()
  author: string

  @Field()
  ft_diffusion: string

  @Field(() => [Personnage])
  personnages: [Personnage]
};

@InputType()
export class CartoonInput {
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