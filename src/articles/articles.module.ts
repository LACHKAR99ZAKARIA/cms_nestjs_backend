import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { ArticleShema } from './models/articles.shema';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{name : 'Article', schema:ArticleShema}])
    ],
    providers: [ArticlesService],
    controllers: [ArticlesController]
})
export class ArticlesModule {}
