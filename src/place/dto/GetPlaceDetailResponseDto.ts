import { PlaceView } from 'src/place/view/PlaceView';

export class GetPlaceDetailResponseDto {
  name: string;
  description: string;
  link: string;
  category: string;
  address: string;
  mapx: number;
  mapy: number;

  static buildFromPlaceView(view: PlaceView): GetPlaceDetailResponseDto {
    const { title, description, link, category, address, mapx, mapy } = view;

    const res = new GetPlaceDetailResponseDto();

    res.name = title;
    res.description = description;
    res.link = link;
    res.category = category;
    res.address = address;
    res.mapx = mapx;
    res.mapy = mapy;

    return res;
  }
}
