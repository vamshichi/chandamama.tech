import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const news = await prisma.news.findMany({
      orderBy: { date: 'desc' },
    });
    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const slug = formData.get('slug') as string;
    const readTime = formData.get('readTime') ? parseInt(formData.get('readTime') as string) : null;
    const image = formData.get('image') as File | null;

    let imageUrl = '';

    if (image) {
      const { url } = await put(image.name, image, { access: 'public' });
      imageUrl = url;
    }

    const newsArticle = await prisma.news.create({
      data: {
        title,
        content,
        slug,
        image: imageUrl,
        readTime,
        date: new Date(),
      },
    });

    return NextResponse.json(newsArticle);
  } catch (error) {
    console.error('Error creating news article:', error);
    return NextResponse.json({ error: 'Failed to create news article' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const formData = await request.formData();
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const slug = formData.get('slug') as string;
    const readTime = formData.get('readTime') ? parseInt(formData.get('readTime') as string) : null;
    const image = formData.get('image') as File | null;

    let imageUrl = formData.get('imageUrl') as string | null;

    if (image) {
      const { url } = await put(image.name, image, { access: 'public' });
      imageUrl = url;
    }

    const updatedNews = await prisma.news.update({
      where: { id },
      data: {
        title,
        content,
        slug,
        image: imageUrl,
        readTime,
      },
    });

    return NextResponse.json(updatedNews);
  } catch (error) {
    console.error('Error updating news article:', error);
    return NextResponse.json({ error: 'Failed to update news article' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'News ID is required' }, { status: 400 });
    }

    await prisma.news.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'News article deleted successfully' });
  } catch (error) {
    console.error('Error deleting news article:', error);
    return NextResponse.json({ error: 'Failed to delete news article' }, { status: 500 });
  }
}