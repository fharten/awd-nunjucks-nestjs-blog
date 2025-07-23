import { Injectable } from '@nestjs/common';
import { BlogEntries, BlogEntry } from '../types/BlogEntry';
import { BlogEntriesRepository } from './blog.entries.repository';

@Injectable()
export class BlogEntriesService {
  constructor(private readonly blogRepository: BlogEntriesRepository) {} // Inject the repository

  async getAllBlogEntries(): Promise<BlogEntries> {
    console.log('BlogEntriesService');
    return this.blogRepository.findAll();
  }

  getBlogEntriesById(id: string): Promise<BlogEntry | undefined> {
    return this.blogRepository.findById(id);
  }
}
