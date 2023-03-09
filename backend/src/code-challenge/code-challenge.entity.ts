import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imageUrl: string;

  @Column()
  type: string;
}

@Entity('Tea')
export class Tea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imageUrl: string;

  @Column()
  type?: string;
}
