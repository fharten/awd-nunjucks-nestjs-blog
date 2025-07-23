import { Injectable } from '@nestjs/common';
import { BlogEntries, BlogEntry } from '../types/BlogEntry';
import { getDB } from '../db/database';

@Injectable() // This makes it injectable into other parts of NestJS
export class BlogEntriesRepository {
  private blogs: BlogEntries = [];

  async findAll(): Promise<BlogEntries> {
    console.log('BlogEntriesRepository');
    const db = getDB();

    return new Promise((resolve, reject) => {
      db.all<BlogEntry>(
        `SELECT * FROM blog_entries`,
        [],
        (error: Error | null, rowData: BlogEntries) => {
          if (error) return reject(error);
          resolve(rowData);
        },
      );
    });
  }

  findById(id: string): Promise<BlogEntry | undefined> {
    console.log('findById');
    const db = getDB();

    return new Promise((resolve, reject) => {
      db.get<BlogEntry>(
        `SELECT * FROM blog_entries WHERE id = ?`,
        [id],
        (error: Error | null, row: BlogEntry) => {
          if (error) return reject(error);
          resolve(row);
        },
      );
    });
  }
}
