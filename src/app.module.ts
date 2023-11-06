import { Module } from '@nestjs/common';
import { CarouselController } from './controller/carousel.controller';
import { CarouselService } from './service/carousel.service';
import { DatabaseModule } from './db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CarouselController],
  providers: [CarouselService],
})
export class AppModule {}
