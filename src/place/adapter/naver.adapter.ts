import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  GetPlaceListApiResponse,
  GetPlaceListApiResponseItem,
} from 'src/place/adapter/dto/GetPlaceListApiResponse';

@Injectable()
export class NaverAdapter {
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly apiUrl: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.clientId = this.configService.get<string>('naver.clientId');
    this.clientSecret = this.configService.get<string>('naver.clientSecret');
    this.apiUrl = this.configService.get<string>('naver.apiUrl');
  }

  async getPlaceList(params: {
    page: number;
    limit: number;
  }): Promise<GetPlaceListApiResponse> {
    const { page, limit } = params;

    const response =
      await this.httpService.axiosRef.get<GetPlaceListApiResponse>(
        this.apiUrl,
        {
          headers: {
            'X-Naver-Client-Id': this.clientId,
            'X-Naver-Client-Secret': this.clientSecret,
          },
          params: {
            query: '부산대 맛집',
            display: limit,
            start: (page - 1) * limit + 1,
          },
        },
      );

    return response.data;
  }

  async getPlaceDetail(params: {
    placeName: string;
  }): Promise<GetPlaceListApiResponseItem> {
    const { placeName } = params;

    const response =
      await this.httpService.axiosRef.get<GetPlaceListApiResponse>(
        this.apiUrl,
        {
          headers: {
            'X-Naver-Client-Id': this.clientId,
            'X-Naver-Client-Secret': this.clientSecret,
          },
          params: {
            query: placeName,
            display: 1,
          },
        },
      );

    return response.data.rss.channel.items[0];
  }
}
