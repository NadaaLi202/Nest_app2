import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { Article, ArticleShema } from 'src/core/schemas/article.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  imports: [MongooseModule.forFeature([{ name: Article.name, schema: ArticleShema }])],

})
export class ArticleModule {}
