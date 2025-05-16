export interface GetPlaceListApiResponseItem {
  title: string;
  link: string;
  category: string;
  description: string;
  address: string;
  mapx: number;
  mapy: number;
}

export interface GetPlaceListApiResponse {
  items: GetPlaceListApiResponseItem[];
}
