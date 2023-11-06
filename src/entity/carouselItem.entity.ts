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
import { CarouselImage } from './carouselImage.entity';

@Table({
  tableName: 'carousel-item',
  timestamps: false,
  comment: '轮播图项目',
})
export class CarouselItem extends Model {
  @Comment('所属轮播图外健')
  @AllowNull(false)
  @Column
  carouselId: bigint;

  @Comment('主键')
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @Comment('唯一uuid')
  @AllowNull(false)
  @Default(DataType.UUIDV4)
  @Unique('uniq_uuid')
  @Column
  uuid: string;

  @Comment('名称')
  @AllowNull(false)
  @Default('')
  @Column
  title: string;

  @Comment('按钮文案')
  @AllowNull(false)
  @Default('')
  @Column
  buttonText: string;

  @Comment('描述')
  @AllowNull(false)
  @Default('')
  @Column
  description: string;

  @Comment('所属模块外健')
  @AllowNull(true)
  @ForeignKey(() => CarouselImage)
  @Column
  backgroundImageId: bigint;

  @HasOne(() => CarouselImage, {
    sourceKey: 'backgroundImageId',
    foreignKey: 'id',
    constraints: false,
    foreignKeyConstraint: false,
  })
  backgroundImage: CarouselImage;
}
