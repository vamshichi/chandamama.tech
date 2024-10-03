import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper function to handle errors
function handleError(error: unknown, message: string) {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status: 500 });
}

// POST method to create a new news article
export async function POST(request: Request) {
  try {
    const { title, image, content, slug } = await request.json();
    const newNews = await prisma.news.create({
      data: { title, image, content, slug },
    });
    return NextResponse.json(newNews, { status: 201 });
  } catch (error) {
    return handleError(error, 'Failed to create news article');
  }
}

// GET method to retrieve all news articles
export async function GET() {
  try {
    const newsArticles = await prisma.news.findMany({
      orderBy: { date: 'desc' },
    });
    return NextResponse.json(newsArticles);
  } catch (error) {
    return handleError(error, 'Failed to retrieve news articles');
  }
}

// PUT method to update a news article by ID
export async function PUT(request: Request) {
  try {
    const { id, title, image, content, slug } = await request.json();
    const updatedNews = await prisma.news.update({
      where: { id },
      data: { title, image, content, slug },
    });
    return NextResponse.json(updatedNews);
  } catch (error) {
    return handleError(error, 'Failed to update news article');
  }
}

// DELETE method to delete a news article by ID
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const deletedNews = await prisma.news.delete({
      where: { id },
    });
    return NextResponse.json(deletedNews);
  } catch (error) {
    return handleError(error, 'Failed to delete news article');
  }
}