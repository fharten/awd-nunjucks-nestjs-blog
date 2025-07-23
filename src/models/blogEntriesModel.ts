import { BlogEntry, BlogEntries } from '../types/BlogEntry';
import { sanitizeBlogPost } from '../utils/transformData';
import { getDB } from '../db/database';

export async function getAllBlogEntries(): Promise<BlogEntries> {
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

export async function getAllBlogEntriesPaginatedSortedByDateDesc(
  pageNumber: number,
): Promise<BlogEntries> {
  const db = getDB();

  return new Promise((resolve, reject) => {
    db.all<BlogEntry>(
      `SELECT * FROM blog_entries ORDER BY createdAt DESC LIMIT 5 OFFSET ?`,
      [(pageNumber - 1) * 5],
      (error: Error | null, rowData: BlogEntries) => {
        if (error) return reject(error);
        resolve(rowData);
      },
    );
  });
}

export async function getAllBlogEntriesSortedByDateDesc(): Promise<BlogEntries> {
  const db = getDB();

  return new Promise((resolve, reject) => {
    db.all<BlogEntry>(
      `SELECT * FROM blog_entries ORDER BY createdAt DESC`,
      [],
      (error: Error | null, rowData: BlogEntries) => {
        if (error) return reject(error);
        resolve(rowData);
      },
    );
  });
}

export async function getBlogEntriesByAuthor(
  authorId: string,
): Promise<BlogEntries> {
  const db = getDB();

  return new Promise((resolve, reject) => {
    db.all<BlogEntry>(
      `SELECT * FROM blog_entries WHERE author = ?`,
      [authorId],
      (error: Error | null, rowData: BlogEntries) => {
        if (error) return reject(error);
        resolve(rowData);
      },
    );
  });
}

export async function createPost(post: BlogEntry): Promise<Number> {
  const db = getDB();
  const sanitizedPost = sanitizeBlogPost(post);
  const {
    id,
    title,
    image,
    author,
    createdAt,
    updatedAt,
    updated,
    date,
    teaser,
    content,
    slug,
  } = sanitizedPost;

  return new Promise((resolve, reject) => {
    db.run(
      `
      INSERT INTO blog_entries (
        id, title, image, author, createdAt, updatedAt, updated,
        date, teaser, content, slug
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        id,
        title,
        image,
        author,
        createdAt,
        updatedAt,
        updated,
        date,
        teaser,
        content,
        slug,
      ],
      function (error: Error | null) {
        if (error) return reject(error);
        resolve(this.lastID);
      },
    );
  });
}

export async function updatePost(
  updatedPost: BlogEntry,
  id: string,
): Promise<Number> {
  const db = getDB();
  const sanitizedPost = sanitizeBlogPost(updatedPost);
  const {
    title,
    image,
    author,
    createdAt,
    updatedAt,
    updated,
    date,
    teaser,
    content,
  } = sanitizedPost;

  return new Promise((resolve, reject) => {
    db.run(
      `
      UPDATE blog_entries 
        SET title = ?, image = ?, author = ?, createdAt = ?, updatedAt = ?, updated = ?,
        date = ?, teaser = ?, content = ?
        WHERE id = ?
      `,
      [
        title,
        image,
        author,
        createdAt,
        updatedAt,
        updated,
        date,
        teaser,
        content,
        id,
      ],
      function (error: Error | null) {
        if (error) return reject(error);
        resolve(this.changes);
      },
    );
  });
}

export async function deletePost(id: string): Promise<Number> {
  const db = getDB();

  return new Promise((resolve, reject) => {
    db.run(
      `
      DELETE FROM blog_entries where id = ?
      `,
      [id],
      function (error: Error | null) {
        if (error) return reject(error);
        resolve(this.changes);
      },
    );
  });
}
