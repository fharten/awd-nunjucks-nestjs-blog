export interface BlogEntry {
  id: string;
  title: string;
  image: string;
  author: string;
  createdAt: number;
  updatedAt?: number;
  updated: string;
  date?: string;
  teaser: string;
  content: string;
  slug?: string;
}

type BlogEntries = BlogEntry[];
