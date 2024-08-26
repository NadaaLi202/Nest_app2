import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class createArticleDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  likes: number;

  @IsOptional()
  @IsString({ each: true })
  tags: string[];

  @IsNotEmpty()
  @IsString()
  author: string;
}

export class UpdateArticleDto extends PartialType(createArticleDto) {}