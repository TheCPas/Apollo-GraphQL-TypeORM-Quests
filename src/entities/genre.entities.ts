import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cartoon } from "./cartoon.entities";
@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Cartoon, cartoon => cartoon.genres, {onDelete:'CASCADE'})
  cartoon: Cartoon;
}