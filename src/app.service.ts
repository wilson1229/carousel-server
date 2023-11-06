import { Injectable, Inject } from '@nestjs/common';
import { omit, compact } from 'lodash';
import { Sequelize } from 'sequelize-typescript';
import {
  CarouselItemDto,
  CarouselImageDto,
  CarouselDto,
  NewCarouselItemDto,
} from './dto/carousel.dto';

import { CarouselItem } from './entity/carouselItem.entity';
import { CarouselImage } from './entity/carouselImage.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('CarouselItem')
    private carouselItemRepo: typeof CarouselItem,

    @Inject('CarouselImage')
    private carouselImageRepo: typeof CarouselImage,

    @Inject('SEQUELIZE')
    private readonly sequelize: Sequelize,
  ) {}
  async getCarouselList(carouselId: string): Promise<CarouselItemDto[]> {
    return this.carouselItemRepo.findAll<any>({
      include: [
        {
          model: CarouselImage,
          as: 'backgroundImage',
        },
      ],
      where: {
        carouselId: carouselId,
      },
      order: [['id', 'ASC']],
    });
  }
  async addCarouselItem(
    carouselId: string,
    newCarouselItem: NewCarouselItemDto,
  ) {
    const { backgroundImageLink } = newCarouselItem;
    const item = await this.carouselImageRepo.findOne<any>({
      where: {
        link: backgroundImageLink,
      },
    });
    if (item) {
      return this.carouselItemRepo.create({
        ...newCarouselItem,
        carouselId,
        backgroundImageId: item.id,
      });
    } else {
      const newImage = await this.carouselImageRepo.create({
        link: backgroundImageLink,
      });
      return this.carouselItemRepo.create({
        ...newCarouselItem,
        carouselId,
        backgroundImageId: newImage.id,
      });
    }
  }
  async deleteCarouselItem(id: string): Promise<any> {
    const item = await this.carouselItemRepo.findOne<any>({
      where: {
        id,
      },
    });
    return item.destroy();
  }
  async updateCarouselItem(id: string, newCarouselItem: NewCarouselItemDto) {
    const { backgroundImageLink } = newCarouselItem;
    const item = await this.carouselImageRepo.findOne<any>({
      where: {
        link: backgroundImageLink,
      },
    });

    const value = omit(newCarouselItem, ['id', 'uuid', 'carouselId']);

    // already has image.
    if (item) {
      return this.carouselItemRepo.update(
        { ...value, backgroundImageId: item.id },
        {
          where: {
            id,
          },
        },
      );

      // create a new image.
    } else {
      const newImage = await this.carouselImageRepo.create({
        link: backgroundImageLink,
      });

      return this.carouselItemRepo.update(
        {
          ...value,
          backgroundImageId: newImage.id,
        },
        {
          where: {
            id,
          },
        },
      );
    }
  }
}
