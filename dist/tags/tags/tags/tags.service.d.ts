export declare class TagsService {
    constructor();
    getAllTags(): string;
    getTagById(id: number): string;
    addTag(tagData: any): string;
    deleteTag(id: number): string;
    updateTag(id: number, tagData: any): string;
}
