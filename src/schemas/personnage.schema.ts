import { InputType, Field } from "type-graphql";

@InputType()
export class Personnage {
  @Field()
  id: number

  @Field()
  name: string

  @Field()
  role: string

  @Field()
  short_description: string
};

@InputType()
export class PersonnageInput {
  @Field()
  name: string

  @Field()
  role: string

  @Field()
  short_description: string
};