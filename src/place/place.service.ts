import { Injectable } from '@nestjs/common';
import { NaverAdapter } from 'src/place/adapter/naver.adapter';
import { PlaceListView } from 'src/place/view/PlaceListView';
import { PlaceView } from 'src/place/view/PlaceView';

@Injectable()
export class PlaceService {
  constructor(private readonly naverAdapter: NaverAdapter) {}

  async getPlaceList(params: {
    page: number;
    limit: number;
  }): Promise<PlaceListView> {
    const apiResponse = await this.naverAdapter.getPlaceList(params);

    return {
      count: apiResponse.rss.channel.items.length,
      places: apiResponse.rss.channel.items.map((item) => ({
        title: item.title,
        description: item.description,
        link: item.link,
        category: item.category,
        address: item.address,
      })),
    };
  }

  async getPlaceDetail(params: { placeName: string }): Promise<PlaceView> {
    const apiResponse = await this.naverAdapter.getPlaceDetail(params);

    return {
      title: apiResponse.title,
      description: apiResponse.description,
      link: apiResponse.link,
      category: apiResponse.category,
      address: apiResponse.address,
      mapx: apiResponse.mapx,
      mapy: apiResponse.mapy,
    };
  }
}
