export declare class createArticleDto {
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string;
    likes: number;
    tags: string[];
    author: string;
}
declare const UpdateArticleDto_base: import("@nestjs/mapped-types").MappedType<Partial<createArticleDto>>;
export declare class UpdateArticleDto extends UpdateArticleDto_base {
}
export {};
