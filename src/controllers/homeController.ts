import { Request, Response } from 'express';
import { getAllBlogEntriesPaginatedSortedByDateDesc } from '../models/blogEntriesModel';
import { getAllAuthors } from '../models/authorsModel';
import { BlogEntry } from '../types/BlogEntry';

export const homeController = async (req: Request, res: Response) => {
  const pageNumber = req.params.number ? Number(req.params.number) : 1;
  const blogEntries =
    await getAllBlogEntriesPaginatedSortedByDateDesc(pageNumber);
  const authors = await getAllAuthors();

  const authorMap = new Map(authors.map((a) => [a.id, a.name]));
  const blogEntriesWithNames = blogEntries.map((p: BlogEntry) => ({
    ...p,
    authorName: authorMap.get(p.author) || 'Unknown',
  }));

  res.render('../views/pages/index.html', {
    blogEntries: blogEntriesWithNames,
    meta: {
      title: 'Home',
      pageNumber,
      nextPage: pageNumber + 1,
    },
    headerData: {
      image: 'home-bg.jpg',
      title: 'Clean Blog',
      subTitle: 'A Blog Theme by Start Bootstrap',
    },
  });
};
