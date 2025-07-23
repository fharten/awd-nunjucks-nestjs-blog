import { Controller, Get, Param } from '@nestjs/common';
import { BlogEntriesService } from './blog.entries.service';
import { BlogEntries, BlogEntry } from '../types/BlogEntry';

@Controller()
export class BlogEntriesController {
  constructor(private readonly blogEntriesService: BlogEntriesService) {}

  @Get('/')
  async getAll(): Promise<BlogEntries> {
    console.log('BlogEntriesController');
    return this.blogEntriesService.getAllBlogEntries();
  }

  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<BlogEntry | undefined> {
    const blogEntrie = this.blogEntriesService.getBlogEntriesById(id);
    return blogEntrie;
  }
}
