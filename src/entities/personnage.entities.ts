import  {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Cartoon } from './cartoon.entities';
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Personnage {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  role: string;

  @Field()
  @Column()
  short_description: string;

  @ManyToOne(() => Cartoon, cartoon => cartoon.personnages, {onDelete:'CASCADE'})
  cartoon: Cartoon;
}