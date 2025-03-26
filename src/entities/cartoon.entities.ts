import { Column,Entity,PrimaryGeneratedColumn } from "typeorm"
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
}