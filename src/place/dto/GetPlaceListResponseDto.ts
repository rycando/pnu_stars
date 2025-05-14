import { PlaceListView } from 'src/place/view/PlaceListView';

export class GetPlaceListResponseDtoPlace {
  name: string;
  description: string;
  link: string;
  category: string;
  address: string;
}

export class GetPlaceListResponseDto {
  count: number;
  places: GetPlaceListResponseDtoPlace[];

  static buildFromPlaceListView(view: PlaceListView): GetPlaceListResponseDto {
    const { count, places } = view;

    return {
      count,
      places: places.map((place) => ({
        name: place.title,
        description: place.description,
        link: place.link,
        category: place.category,
        address: place.address,
      })),
    };
  }
}
