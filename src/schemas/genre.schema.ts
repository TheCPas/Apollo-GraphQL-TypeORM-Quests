import { InputType, Field } from "type-graphql";

@InputType()
export class Genre {
  @Field()
  id: number

  @Field()
  name: String
};

@InputType()
export class GenreInput {
  @Field()
  name: String
};