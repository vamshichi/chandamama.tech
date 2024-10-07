import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Helper function to handle errors
function handleError(error: unknown, message: string) {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status: 500 });
}

// Helper function to handle file upload
async function saveFile(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = file.name.replace(/\s/g, '-');
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  const filepath = path.join(uploadDir, filename);

  try {
    await mkdir(uploadDir, { recursive: true });
    await writeFile(filepath, buffer);
    return `/uploads/${filename}`;
  } catch (error) {
    console.error('Error saving file:', error);
    throw new Error('Failed to save file');
  }
}

// POST method to create a new news article
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const slug = formData.get('slug') as string;
    const imageFile = formData.get('image') as File | null;

    let image = '';
    if (imageFile) {
      image = await saveFile(imageFile);
    }

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
    const formData = await request.formData();
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const slug = formData.get('slug') as string;
    const imageFile = formData.get('image') as File | null;

    let image;
    if (imageFile) {
      image = await saveFile(imageFile);
    }

    const updatedNews = await prisma.news.update({
      where: { id },
      data: { 
        title, 
        content, 
        slug,
        ...(image && { image })
      },
    });
    return NextResponse.json(updatedNews);
  } catch (error) {
    return handleError(error, 'Failed to update news article');
  }
}

// DELETE method to delete a news article by ID
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    const deletedNews = await prisma.news.delete({
      where: { id },
    });
    return NextResponse.json(deletedNews);
  } catch (error) {
    return handleError(error, 'Failed to delete news article');
  }
}