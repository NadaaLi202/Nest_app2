import { Module } from '@nestjs/common';
import { TagsController } from './tags/tags/tags.controller';
import { TagsService } from './tags/tags/tags.service';

@Module({
    imports:[],
    controllers:[TagsController],
    providers:[TagsService] 
})
export class TagsModule {}
