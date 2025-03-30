import { Column, Entity, OneToMany, PrimaryGeneratedColumn, BaseEntity } from "typeorm"
import { Genre } from "./genre.entities";
import { Personnage } from "./personnage.entities";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Cartoon extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  nb_of_episodes: number;

  @Field()
  @Column()
  nb_of_seasons: number;

  @Field()
  @Column()
  realisator: string;

  @Field()
  @Column()
  author: string;

  @Field()
  @Column()
  ft_diffusion: string;

  @Field(() => [Genre])
  @OneToMany(() => Genre, (genre) => genre.cartoon, { cascade: true })
  genres?: Genre[];

  @Field(() => [Personnage])
  @OneToMany(() => Personnage, (pers) => pers.cartoon, { cascade: true })
  personnages?: Personnage[];
}