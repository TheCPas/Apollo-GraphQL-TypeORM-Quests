import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cartoon } from "./cartoon.entities";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Genre {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => Cartoon, cartoon => cartoon.genres, {onDelete:'CASCADE'})
  cartoon: Cartoon;
}