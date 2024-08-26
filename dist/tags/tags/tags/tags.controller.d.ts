import { TagsService } from './tags.service';
export declare class TagsController {
    private readonly _tagsService;
    constructor(_tagsService: TagsService);
    getAllTags(): string;
    getTagById(id: number): string;
    addTag(tagData: any): string;
    deleteTag(id: number): string;
    updateTag(id: number, tagData: any): string;
}
