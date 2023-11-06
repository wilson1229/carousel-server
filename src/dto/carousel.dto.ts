export interface CarouselImageDto {
  id: string;
  link: string;
}

export interface CarouselItemDto {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: CarouselImageDto;
}

export interface NewCarouselItemDto {
    id: string;
    title: string;
    description: string;
    buttonText: string;
    backgroundImageLink: string;
  }

export interface CarouselDto {
  id: string;
  data: CarouselItemDto[];
}
