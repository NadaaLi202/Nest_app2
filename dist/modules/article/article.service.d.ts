import { Model } from 'mongoose';
import { Article } from 'src/core/schemas/article.schema';
import { createArticleDto, UpdateArticleDto } from './dto/article.dto';
export declare class ArticleService {
    private readonly articleModel;
    constructor(articleModel: Model<Article>);
    create(createArticleDto: createArticleDto): Promise<Article>;
    findOneArticle(id: string): Promise<Article>;
    findAllArticles(): Promise<Article[]>;
    updateArticle(id: string, updateArticleDto: UpdateArticleDto): Promise<Article>;
    removeArticle(id: string): Promise<Article>;
}
