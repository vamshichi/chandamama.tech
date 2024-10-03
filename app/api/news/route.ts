import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST method to create a new news article
export async function POST(request: Request) {
  const body = await request.json();
  const { title, image, content, slug } = body;

  try {
    const newNews = await prisma.news.create({
      data: {
        title,
        image,
        content,
        slug,
      },
    });
    return NextResponse.json(newNews, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create news article' }, { status: 500 });
  }
}

// GET method to retrieve all news articles
export async function GET() {
  try {
    const newsArticles = await prisma.news.findMany();
    return NextResponse.json(newsArticles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to retrieve news articles' }, { status: 500 });
  }
}

// PUT method to update a news article by ID
export async function PUT(request: Request) {
  const body = await request.json();
  const { id, title, image, content, slug } = body;

  try {
    const updatedNews = await prisma.news.update({
      where: { id },
      data: {
        title,
        image,
        content,
        slug,
      },
    });
    return NextResponse.json(updatedNews, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update news article' }, { status: 500 });
  }
}

// DELETE method to delete a news article by ID
export async function DELETE(request: Request) {
  const body = await request.json();
  const { id } = body;

  try {
    const deletedNews = await prisma.news.delete({
      where: { id },
    });
    return NextResponse.json(deletedNews, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete news article' }, { status: 500 });
  }
}
