import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  genre_id: number;

  @Column()
  name: string;
}