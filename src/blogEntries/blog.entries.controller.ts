import { Controller, Get, Param } from '@nestjs/common';
import { BlogEntriesService } from './blog.entries.service';
import { BlogEntries, BlogEntry } from '../types/BlogEntry';

@Controller('blogEntries')
export class BlogEntriesController {
  constructor(private readonly blogEntriesService: BlogEntriesService) {}

  @Get()
  getRoot() {
    console.log('hello world');
  }

  // async getAll(): Promise<BlogEntries> {
  //   console.log('BlogEntriesController');
  //   return this.blogEntriesService.getAllBlogEntries();
  // }

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
