import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Genre } from "./genre.entities";
import { Personnage } from "./personnage.entities";
@Entity()

export class Cartoon {
  @PrimaryGeneratedColumn()
  cartoon_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  nb_of_episodes: number;

  @Column()
  nb_of_seasons: number;

  @Column()
  realisator: string;

  @Column()
  author: string;

  @Column()
  ft_diffusion: string;

  @OneToMany(() => Genre, (genre) => genre.cartoon)
  genres?: Genre[];

  @OneToMany(() => Personnage, (personnage) => personnage.cartoon)
  personnages?: Personnage[];
}