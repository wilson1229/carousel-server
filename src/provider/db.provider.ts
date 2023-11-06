import { Sequelize } from 'sequelize-typescript';

import { CarouselItem } from '../entity/carouselItem.entity';
import { CarouselImage } from '../entity/CarouselImage.entity';

export const dbProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const [host, username, password] = await Promise.all([
        process.env.DATABASE_HOST,
        process.env.DATABASE_USER,
        process.env.DATABASE_PASSWORD,
      ]);

      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: host || '127.0.0.1',
        port: parseInt(process.env.DATABASE_PORT) || 3306,
        username: username || 'root',
        password: password || 'root',
        database: process.env.DATABASE_NAME || 'test',
        logging: true,
      });
      sequelize.addModels([
        CarouselItem,
        CarouselImage
      ]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];

export const repoProviders = [
  {
    provide: 'CarouselItem',
    useValue: CarouselItem,
  },
  {
    provide: 'CarouselImage',
    useValue: CarouselImage,
  },
];
