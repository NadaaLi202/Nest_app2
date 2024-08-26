import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [TagsModule,AuthModule, MongooseModule.forRoot('mongodb://localhost/nestApp'),ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
