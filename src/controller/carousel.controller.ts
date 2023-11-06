import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Put,
    Body,
  } from '@nestjs/common';
  import { ApiCreatedResponse } from '@nestjs/swagger';
  
  import { CarouselService } from '../service/carousel.service';
  import {
    CarouselDto,
    NewCarouselItemDto
  } from '../dto/carousel.dto';
  
  @Controller('carousel')
  export class CarouselController {
    constructor(private readonly CarouselService: CarouselService) {}
  
    @Get('list/:carouseId')
    async getCarouselList(@Param() params: any): Promise<CarouselDto> {
      const data = await this.CarouselService.getCarouselList(params.carouseId);
      return {
        id: params.carouseId,
        data,
      };
    }
    @Post(':carouseId/add')
    @ApiCreatedResponse({
      description: 'The record has been successfully created.'
    })
    async addCarouselItem(
      @Param() params: any,
      @Body() carouselItemDto: NewCarouselItemDto,
    ): Promise<any> {
      return this.CarouselService.addCarouselItem(params.carouseId, carouselItemDto);
    }
    @Delete('delete/:id')
    async deleteCarouselItem(@Param() params: any): Promise<any> {
      console.log(params.id);
      const [res] = await this.CarouselService.deleteCarouselItem(params.id);
      return res;
    }
    @Put('update/:id')
    async updateCarouselItem(
      @Param() params: any,
      @Body() carouselItemDto: NewCarouselItemDto,
    ): Promise<any> {
      const [res] = await this.CarouselService.updateCarouselItem(params.id, carouselItemDto);
      return res;
    }
  }
  