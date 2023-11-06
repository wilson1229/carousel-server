import {
  Table,
  Column,
  Model,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  Unique,
  Default,
  AutoIncrement,
  AllowNull,
  DataType,
  ForeignKey,
  BelongsTo,
  Comment,
  Index,
  HasOne,
  HasMany,
} from 'sequelize-typescript';

@Table({
  tableName: 'carousel-image',
  timestamps: false,
  comment: '轮播图项目背景',
})
export class CarouselImage extends Model {
  @Comment('主键')
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @Comment('链接')
  @AllowNull(false)
  @Default('')
  @Column
  link: string;
}
