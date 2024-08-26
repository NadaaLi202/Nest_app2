import { Controller, Delete, Get, Param, Post, Patch, Body } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly _tagsService: TagsService) {}

  @Get()
  getAllTags() {
    return this._tagsService.getAllTags();
  }

  @Get(':id')
  getTagById(@Param('id') id: number) {
    return this._tagsService.getTagById(id);
  }

  @Post()
  addTag(@Body() tagData: any) {
    return this._tagsService.addTag(tagData);
  }

  @Delete(':id')
  deleteTag(@Param('id') id: number) {
    return this._tagsService.deleteTag(id);
  }

  @Patch(':id')
  updateTag(@Param('id') id: number, @Body() tagData: any) {
    return this._tagsService.updateTag(id, tagData);
  }
}