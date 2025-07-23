import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { BlogEntriesService } from './blog.entries.service';
import { BlogEntries, BlogEntry } from '../types/BlogEntry';
import { Response } from 'express';

@Controller()
export class BlogEntriesController {
  constructor(private readonly blogEntriesService: BlogEntriesService) {}

  @Get('/')
  async getAll(@Res() res: Response): Promise<BlogEntries> {
    const blogEntries = await this.blogEntriesService.getAllBlogEntries();

    res.render('../views/pages/index.html', {
      blogEntries,
      headerData: {
        image: 'home-bg.jpg',
        title: 'Clean Blog',
        subTitle: 'A Blog Theme by Start Bootstrap',
      },
    });
    return this.blogEntriesService.getAllBlogEntries();
  }

  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<BlogEntry | undefined> {
    const blogEntrie = this.blogEntriesService.getBlogEntriesById(id);
    return blogEntrie;
  }
}
