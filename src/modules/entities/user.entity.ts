import { Exclude } from 'class-transformer';
import { BaseTable } from 'src/base';
import { KycSkip, QuestionnaireSkip, StatusEnum, UserType } from 'src/enums';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity('users')
export class User extends BaseTable {
  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }

  @Column({
    type: 'varchar',
    nullable: true,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  last_name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  phone: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  phone_code: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  phone_number: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  gender: string;

  @Exclude()
  @Column({
    type: 'varchar',
    nullable: true,
  })
  password: string;

  @Exclude()
  @Column({
    type: 'varchar',
    nullable: true,
  })
  verify_code?: string;

  @Exclude()
  @Column({
    type: 'bigint',
    nullable: true,
  })
  verify_code_expire?: number;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.CLIENT,
  })
  user_type?: UserType;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.Active,
  })
  status: StatusEnum;

  @Column({
    type: 'timestamp without time zone',
    nullable: true,
  })
  deleted_at?: Date;
}
