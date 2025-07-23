import { Injectable } from '@nestjs/common';
import { BlogEntries, BlogEntry } from '../types/BlogEntry';
import { BlogEntriesRepository } from './blog.entries.repository';

@Injectable()
export class BlogEntriesService {
  constructor(private readonly quoteRepository: BlogEntriesRepository) {} // Inject the repository

  async getAllBlogEntries(): Promise<BlogEntries> {
    console.log('BlogEntriesService');
    return this.quoteRepository.findAll();
  }

  // async getBlogEntriesById(id: string): Promise<BlogEntries | undefined> {
  //   return this.quoteRepository.findById(id);
  // }

  // async getRandomBlogEntries(): Promise<BlogEntries | undefined> {
  //   return this.quoteRepository.findRandom();
  // }
}
