import { Module } from '@nestjs/common';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';
import { HttpModule } from '@nestjs/axios';
import { NaverAdapter } from 'src/place/adapter/naver.adapter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.register({ timeout: 5000, maxRedirects: 5 }),
    ConfigModule,
  ],
  controllers: [PlaceController],
  providers: [PlaceService, NaverAdapter],
})
export class PlaceModule {}
