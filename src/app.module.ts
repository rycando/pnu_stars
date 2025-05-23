import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from 'src/comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/comment/comment.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PlaceModule } from './place/place.module';
import { ConfigModule } from '@nestjs/config';
import naverConfig from 'src/config/naver.config';

@Module({
  imports: [
    CommentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pnu_stars',
      entities: [Comment],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    PlaceModule,
    ConfigModule.forRoot({
      load: [naverConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
