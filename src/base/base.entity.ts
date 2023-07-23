import { IsDate, IsNumber } from 'class-validator';
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseTable {
  @PrimaryGeneratedColumn('increment')
  @IsNumber()
  public id: number;

  @Column({
    type: 'timestamp without time zone',
    default: new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"}),
  })
  @CreateDateColumn({
    type: 'timestamp without time zone',
    default: new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"}),
  })
  @IsDate()
  public created_at: Date;

  @Column({
    type: 'timestamp without time zone',
    default: new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"}),
  })
  @UpdateDateColumn({ 
    type: 'timestamp without time zone',
    default: new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"}),
    transformer: {
      to: () => new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"}),
      from: (value) =>  value
    }
  })
  @IsDate()
  public updated_at: Date;
}
