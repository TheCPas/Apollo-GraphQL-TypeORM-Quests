import  {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Cartoon } from './cartoon.entities';
@Entity()

export class Personnage {
  @PrimaryGeneratedColumn()
  personnage_id: number;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  short_description: string;

  @ManyToOne(() => Cartoon, cartoon => cartoon.genres)
  cartoon: Cartoon;
}