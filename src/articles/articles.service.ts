import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/createarticles.dto';
import { Article } from './interfaces/Article.interface';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel('Article') private readonly articleModel: Model<Article>){}

    async create(CreateArticleDto: CreateArticleDto): Promise<Article>{
        const createdArticle = new this.articleModel(CreateArticleDto);
        return await createdArticle.save();   
    }
}
