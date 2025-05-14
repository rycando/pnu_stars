import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetPlaceDetailResponseDto } from 'src/place/dto/GetPlaceDetailResponseDto';
import { GetPlaceListRequestDto } from 'src/place/dto/GetPlaceListRequestDto';
import { GetPlaceListResponseDto } from 'src/place/dto/GetPlaceListResponseDto';
import { PlaceService } from 'src/place/place.service';
import { PlaceListView } from 'src/place/view/PlaceListView';
import { PlaceView } from 'src/place/view/PlaceView';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get('')
  async getPlaceList(@Query() dto: GetPlaceListRequestDto) {
    const { page, limit } = dto;

    const view: PlaceListView = await this.placeService.getPlaceList({
      page,
      limit,
    });

    return GetPlaceListResponseDto.buildFromPlaceListView(view);
  }

  @Get('/:placeName')
  async getPlaceDetail(@Param('placeName') placeName: string) {
    const view: PlaceView = await this.placeService.getPlaceDetail({
      placeName,
    });

    return GetPlaceDetailResponseDto.buildFromPlaceView(view);
  }
}
