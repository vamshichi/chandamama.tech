'use client'

import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import AdminLogin from '@/app/components/AdminLogin'

interface NewsArticle {
  id: string
  title: string
  image: string
  content: string
  slug: string
  date: string
  readTime?: number
}

export default function AdminNews() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [newsList, setNewsList] = useState<NewsArticle[]>([])
  const [newNews, setNewNews] = useState<Omit<NewsArticle, 'id' | 'date'>>({ 
    title: '', 
    image: '', 
    content: '', 
    slug: '',
    readTime: undefined
  })
  const [isEditing, setIsEditing] = useState(false)
  const [currentId, setCurrentId] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [imageUploadMethod, setImageUploadMethod] = useState<'file' | 'url'>('file')

  useEffect(() => {
    if (isLoggedIn) {
      fetchNews()
    }
  }, [isLoggedIn])

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news')
      if (!response.ok) throw new Error('Failed to fetch news')
      const data = await response.json()
      setNewsList(data)
    } catch (error) {
      console.error('Failed to fetch news', error)
      setError('Failed to fetch news articles.')
    }
  }

  const handleAddNews = async () => {
    try {
      const formData = new FormData()
      formData.append('title', newNews.title)
      formData.append('content', newNews.content)
      formData.append('slug', newNews.slug)
      if (newNews.readTime) formData.append('readTime', newNews.readTime.toString())
      
      if (imageUploadMethod === 'file' && imageFile) {
        formData.append('image', imageFile)
      } else if (imageUploadMethod === 'url') {
        formData.append('imageUrl', newNews.image)
      }

      const response = await fetch('/api/news', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to add news')
      }

      const addedNews = await response.json()
      setNewsList([...newsList, addedNews])
      resetForm()
      setError(null)
      alert('News article added successfully.')
      fetchNews()
    } catch (error) {
      console.error('Failed to add news', error)
      setError(`Failed to add news article: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const handleUpdateNews = async () => {
    try {
      const formData = new FormData()
      formData.append('id', currentId as string)
      formData.append('title', newNews.title)
      formData.append('content', newNews.content)
      formData.append('slug', newNews.slug)
      if (newNews.readTime) formData.append('readTime', newNews.readTime.toString())
      
      if (imageUploadMethod === 'file' && imageFile) {
        formData.append('image', imageFile)
      } else if (imageUploadMethod === 'url') {
        formData.append('imageUrl', newNews.image)
      }

      const response = await fetch('/api/news', {
        method: 'PUT',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to update news')
      }

      const updatedNews = await response.json()
      setNewsList(newsList.map(news => (news.id === currentId ? updatedNews : news)))
      resetForm()
      setError(null)
      alert('News article updated successfully.')
    } catch (error) {
      console.error('Failed to update news', error)
      setError(`Failed to update news article: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const handleDeleteNews = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this news article?')) return

    try {
      const response = await fetch(`/api/news?id=${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to delete news')
      }

      setNewsList(newsList.filter(news => news.id !== id))
      setError(null)
      alert('News article deleted successfully.')
    } catch (error) {
      console.error('Failed to delete news', error)
      setError(`Failed to delete news article: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const handleEditClick = (news: NewsArticle) => {
    setNewNews({
      title: news.title,
      content: news.content,
      slug: news.slug,
      image: news.image,
      readTime: news.readTime
    })
    setCurrentId(news.id)
    setIsEditing(true)
    setImageUploadMethod('url')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    isEditing ? handleUpdateNews() : handleAddNews()
  }

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setImageFile(acceptedFiles[0])
      setNewNews({ ...newNews, image: URL.createObjectURL(acceptedFiles[0]) })
    }
  }

  const resetForm = () => {
    setIsEditing(false)
    setNewNews({ title: '', image: '', content: '', slug: '', readTime: undefined })
    setImageFile(null)
    setCurrentId(null)
    setImageUploadMethod('file')
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewNews(prev => ({ ...prev, [name]: value }))
  }

  if (!isLoggedIn) {
    return <AdminLogin onLogin={setIsLoggedIn} />
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin - Manage News</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}

      <div className="mb-8 p-4 border rounded">
        <h2 className="text-2xl font-semibold mb-4">{isEditing ? 'Edit News' : 'Add News'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-1">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newNews.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="slug" className="block mb-1">Slug</label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={newNews.slug}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="content" className="block mb-1">Content</label>
            <textarea
              id="content"
              name="content"
              value={newNews.content}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
              rows={4}
            />
          </div>
          <div>
            <label htmlFor="readTime" className="block mb-1">Read Time (minutes)</label>
            <input
              type="number"
              id="readTime"
              name="readTime"
              value={newNews.readTime || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <p className="mb-1">Image Upload Method</p>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="file"
                  checked={imageUploadMethod === 'file'}
                  onChange={() => setImageUploadMethod('file')}
                  className="form-radio"
                />
                <span className="ml-2">File Upload</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="url"
                  checked={imageUploadMethod === 'url'}
                  onChange={() => setImageUploadMethod('url')}
                  className="form-radio"
                />
                <span className="ml-2">Image  URL</span>
              </label>
            </div>
          </div>
          {imageUploadMethod === 'file' ? (
            <div {...getRootProps()} className="border-dashed border-2 p-4 rounded cursor-pointer text-center">
              <input {...getInputProps()} />
              {imageFile ? (
                <Image src={newNews.image} alt="Preview" width={128} height={128} className="object-cover mx-auto" />
              ) : (
                <p>Drag and drop an image here, or click to select an image</p>
              )}
            </div>
          ) : (
            <div>
              <label htmlFor="imageUrl" className="block mb-1">Image URL</label>
              <input
                type="url"
                id="imageUrl"
                name="image"
                value={newNews.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          )}
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {isEditing ? 'Update News' : 'Add News'}
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-semibold mb-4">All News</h2>
      <div className="space-y-4">
        {newsList.map((news) => (
          <div key={news.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
            <p className="mb-4 text-sm text-gray-600">{news.content.substring(0, 100)}...</p>
            <Image src={news.image} alt={news.title} width={100} height={100} className="object-cover mb-2" />
            <div className="flex space-x-2">
              <button onClick={() => handleEditClick(news)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                Edit
              </button>
              <button onClick={() => handleDeleteNews(news.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}