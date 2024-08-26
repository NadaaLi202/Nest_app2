import mongoose from "mongoose";
export declare class Article {
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string;
    likes: number;
    tags: string[];
    author: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ArticleShema: mongoose.Schema<Article, mongoose.Model<Article, any, any, any, mongoose.Document<unknown, any, Article> & Article & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Article, mongoose.Document<unknown, {}, mongoose.FlatRecord<Article>> & mongoose.FlatRecord<Article> & {
    _id: mongoose.Types.ObjectId;
}>;
