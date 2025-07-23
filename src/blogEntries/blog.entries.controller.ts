import { Controller, Get, Param } from '@nestjs/common';
import { BlogEntriesService } from './blog.entries.service';
import { BlogEntries, BlogEntry } from '../types/BlogEntry';

@Controller('blogEntries')
export class BlogEntriesController {
  constructor(private readonly blogEntrieService: BlogEntriesService) {}

  @Get('/')
  async getAll(): Promise<BlogEntries> {
    return this.blogEntrieService.getAllBlogEntries();
  }

  // @Get('/random')
  // async getRandom() {
  //   return this.blogEntrieService.getRandomBlogEntrie();
  // }

  // @Get('/:id')
  // async getOne(@Param('id') id: string): Promise<BlogEntries | undefined> {
  //   const blogEntrie = this.blogEntrieService.getBlogEntriesById(id);
  //   return blogEntrie;
  // }
}
