import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [CategoriesModule, PrismaModule, VideosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
