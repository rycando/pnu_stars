export interface GetPlaceListApiResponseItem {
  title: string;
  link: string;
  category: string;
  description: string;
  address: string;
  mapx: number;
  mapy: number;
}

export interface GetPlaceListApiResponseChannel {
  items: GetPlaceListApiResponseItem[];
}

export interface GetPlaceListApiResponseRSS {
  channel: GetPlaceListApiResponseChannel;
}

export interface GetPlaceListApiResponse {
  rss: GetPlaceListApiResponseRSS;
}
