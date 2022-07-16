import { Body, Controller, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/createarticles.dto';

@Controller('articles')
export class ArticlesController {
    constructor (private readonly Articlesservice : ArticlesService){}

    @Post()
    async createArticle(@Body() ArticleToCreate : CreateArticleDto)
    {
        return this.Articlesservice.create(ArticleToCreate)
    };
}
