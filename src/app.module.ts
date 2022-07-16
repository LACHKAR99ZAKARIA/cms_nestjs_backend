import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ArticlesModule, MongooseModule.forRoot(config.uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}