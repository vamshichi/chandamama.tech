import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    // Create a new news article
    case 'POST':
      try {
        const { title, image, content, slug } = req.body;
        const newNews = await prisma.news.create({
          data: {
            title,
            image,
            content,
            slug,
          },
        });
        res.status(201).json(newNews);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create news article' });
      }
      break;

    // Retrieve all news articles
    case 'GET':
      try {
        const newsArticles = await prisma.news.findMany();
        res.status(200).json(newsArticles);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve news articles' });
      }
      break;

    // Update a news article by ID
    case 'PUT':
      try {
        const { id, title, image, content, slug } = req.body;
        const updatedNews = await prisma.news.update({
          where: { id },
          data: {
            title,
            image,
            content,
            slug,
          },
        });
        res.status(200).json(updatedNews);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update news article' });
      }
      break;

    // Delete a news article by ID
    case 'DELETE':
      try {
        const { id } = req.body;
        const deletedNews = await prisma.news.delete({
          where: { id },
        });
        res.status(200).json(deletedNews);
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete news article' });
      }
      break;

    // Handle other HTTP methods
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
