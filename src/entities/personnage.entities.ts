import  {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Cartoon } from './cartoon.entities';

@Entity()
export class Personnage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  short_description: string;

  @ManyToOne(() => Cartoon, cartoon => cartoon.personnages, {onDelete:'CASCADE'})
  cartoon: Cartoon;
}