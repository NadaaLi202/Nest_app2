import { ArticleService } from './article.service';
import { createArticleDto, UpdateArticleDto } from './dto/article.dto';
export declare class ArticleController {
    private readonly _articleService;
    constructor(_articleService: ArticleService);
    create(createArticleDto: createArticleDto): Promise<import("../../core/schemas/article.schema").Article>;
    findAllArticles(): Promise<import("../../core/schemas/article.schema").Article[]>;
    findOneArticle(id: string): Promise<import("../../core/schemas/article.schema").Article>;
    updateArticle(id: string, updateArticleDto: UpdateArticleDto): Promise<import("../../core/schemas/article.schema").Article>;
    removeArticle(id: string): Promise<import("../../core/schemas/article.schema").Article>;
}
