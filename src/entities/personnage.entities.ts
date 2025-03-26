import  {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
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
}