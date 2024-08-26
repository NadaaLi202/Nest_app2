import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article} from 'src/core/schemas/article.schema';
import { createArticleDto, UpdateArticleDto } from './dto/article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>
  ) {}

  async create(createArticleDto: createArticleDto): Promise<Article> {
    const newArticle = new this.articleModel(createArticleDto);
    return newArticle.save();
  }

  async findOneArticle(id: string): Promise<Article> {
    return this.articleModel.findById(id).populate('author').exec();
  }

  async findAllArticles(): Promise<Article[]> {
    return this.articleModel.find().populate('author').exec();
  }

  async updateArticle(
    id: string,
    updateArticleDto: UpdateArticleDto
  ): Promise<Article> {
    return this.articleModel
      .findByIdAndUpdate(id, updateArticleDto, { new: true })
      .exec();
  }

  async removeArticle(id: string): Promise<Article> {
    return this.articleModel.findByIdAndDelete(id).exec();
  }
}