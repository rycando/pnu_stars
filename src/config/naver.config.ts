import { registerAs } from '@nestjs/config';

export interface NaverConfig {
  clientId: string;
  clientSecret: string;
  apiUrl: string;
}

export default registerAs('naver', () => ({
  clientId: process.env.NAVER_CLIENT_ID,
  clientSecret: process.env.NAVER_CLIENT_SECRET,
  apiUrl:
    process.env.NAVER_API_URL ||
    'https://openapi.naver.com/v1/search/local.json',
}));
