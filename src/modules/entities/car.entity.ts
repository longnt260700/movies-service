import { Exclude } from 'class-transformer';
import { BaseTable } from 'src/base';
import { KycSkip, QuestionnaireSkip, StatusEnum, UserType } from 'src/enums';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity('cars')
export class Car extends BaseTable {
  constructor(partial: Partial<Car>) {
    super();
    Object.assign(this, partial);
  }

  @Column({
    type: 'varchar',
    nullable: true,
  })
  brand: string;
}
