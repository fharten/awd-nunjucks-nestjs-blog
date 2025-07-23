import { Injectable } from '@nestjs/common';
import { BlogEntries, BlogEntry } from '../types/BlogEntry';
import { getDB } from '../db/database';
// import { getQuotesData } from './quotes.data';

@Injectable() // This makes it injectable into other parts of NestJS
export class BlogEntriesRepository {
  private quotes: BlogEntries = [];

  // private async init() {
  //   this.quotes = await getBlogEntriesData();
  // }

  async findAll(): Promise<BlogEntries> {
    // await this.init();

    const db = getDB();

    return new Promise((resolve, reject) => {
      db.all<BlogEntry>(
        `SELECT * FROM posts`,
        [],
        (error: Error | null, rowData: BlogEntries) => {
          if (error) return reject(error);
          resolve(rowData);
        },
      );
    });
  }

  //   async findById(id: string): Promise<Quote | undefined> {
  //     await this.init();
  //     return this.quotes.find((quote) => quote.id === id); // Find a user by ID
  //   }

  //   async findRandom(): Promise<Quote | undefined> {
  //     await this.init();

  //     const randomIndex = Math.floor(Math.random() * this.quotes.length);
  //     return this.quotes[randomIndex];
  //   }
}
