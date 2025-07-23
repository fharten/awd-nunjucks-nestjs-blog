import { Module } from '@nestjs/common';
import { BlogEntriesController } from './blog.entries.controller';
import { BlogEntriesService } from './blog.entries.service';
import { BlogEntriesRepository } from './blog.entries.repository';

@Module({
  imports: [],
  controllers: [BlogEntriesController],
  providers: [BlogEntriesService, BlogEntriesRepository],
})
export class BlogEntriesModule {}
