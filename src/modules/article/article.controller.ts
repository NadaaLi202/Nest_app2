import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { createArticleDto, UpdateArticleDto } from './dto/article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly _articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: createArticleDto) {
    return this._articleService.create(createArticleDto);
  }

  @Get()
  findAllArticles() {
    return this._articleService.findAllArticles();
  }

  @Get(':id')
  findOneArticle(@Param('id') id: string) {
    return this._articleService.findOneArticle(id);
  }

  @Patch(':id')
  updateArticle(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this._articleService.updateArticle(id, updateArticleDto);
  }

  @Delete(':id')
  removeArticle(@Param('id') id: string) {
    return this._articleService.removeArticle(id);
  }
}