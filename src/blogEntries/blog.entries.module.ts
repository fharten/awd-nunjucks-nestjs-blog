import { Module } from '@nestjs/common';
import { BlogEntriesController } from './blog.entries.controller';
import { BlogEntriesService } from './blog.entries.service';
import { BlogEntriesRepository } from './blog.entries.repository';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'),
    }),
  ],
  controllers: [BlogEntriesController],
  providers: [BlogEntriesService, BlogEntriesRepository],
})
export class BlogEntriesModule {}
