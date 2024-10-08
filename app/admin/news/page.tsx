'use client'

import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useDropzone, Accept } from 'react-dropzone'
import Image from 'next/image'

interface NewsArticle {
  id: number
  title: string
  image: string
  content: string
  slug: string
}

export default function AdminNews() {
  const [newsList, setNewsList] = useState<NewsArticle[]>([])
  const [newNews, setNewNews] = useState<Omit<NewsArticle, 'id'>>({ title: '', image: '', content: '', slug: '' })
  const [isEditing, setIsEditing] = useState(false)
  const [currentId, setCurrentId] = useState<number | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchNews()
  }, [])

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
      if (imageFile) {
        formData.append('image', imageFile)
      } else if (newNews.image) {
        formData.append('imageUrl', newNews.image)
      }

      const response = await fetch('/api/news', {
        method: 'POST',
        body: formData,
      })
      if (!response.ok) throw new Error('Failed to add news')
      const addedNews = await response.json()
      setNewsList([...newsList, addedNews])
      resetForm()
      setError(null)
    } catch (error) {
      console.error('Failed to add news', error)
      setError('Failed to add news article.')
    }
  }

  const handleUpdateNews = async () => {
    try {
      const formData = new FormData()
      formData.append('id', currentId!.toString())
      formData.append('title', newNews.title)
      formData.append('content', newNews.content)
      formData.append('slug', newNews.slug)
      if (imageFile) {
        formData.append('image', imageFile)
      } else if (newNews.image) {
        formData.append('imageUrl', newNews.image)
      }

      const response = await fetch('/api/news', {
        method: 'PUT',
        body: formData,
      })
      if (!response.ok) throw new Error('Failed to update news')
      const updatedNews = await response.json()
      setNewsList(newsList.map(news => (news.id === currentId ? updatedNews : news)))
      resetForm()
      setError(null)
    } catch (error) {
      console.error('Failed to update news', error)
      setError('Failed to update news article.')
    }
  }

  const handleDeleteNews = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this news article?')) return

    try {
      const response = await fetch(`/api/news?id=${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to delete news')
      setNewsList(newsList.filter(news => news.id !== id))
      setError(null)
    } catch (error) {
      console.error('Failed to delete news', error)
      setError('Failed to delete news article.')
    }
  }

  const handleEditClick = (news: NewsArticle) => {
    setNewNews(news)
    setCurrentId(news.id)
    setIsEditing(true)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    isEditing ? handleUpdateNews() : handleAddNews()
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewNews(prev => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setNewNews({ title: '', image: '', content: '', slug: '' })
    setImageFile(null)
    setIsEditing(false)
    setCurrentId(null)
  }

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setImageFile(acceptedFiles[0])
      setNewNews(prev => ({ ...prev, image: URL.createObjectURL(acceptedFiles[0]) }))
    }
  }

  const acceptedFileTypes: Accept = {
    'image/*': ['.jpeg', '.jpg', '.png', '.gif']
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    maxFiles: 1,
  })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin - Manage News</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}

      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit News' : 'Add News'}</h2>
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
          <div {...getRootProps()} className="border-dashed border-2 p-4 rounded cursor-pointer text-center">
            <input {...getInputProps()} />
            {newNews.image ? (
              <Image src={newNews.image} alt="Preview" width={128} height={128} className="object-cover mx-auto" />
            ) : (
              <p>Drag and drop an image here, or click to select an image</p>
            )}
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {isEditing ? 'Update News' : 'Add News'}
          </button>
          {isEditing && (
            <button type="button" onClick={resetForm} className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      <h2 className="text-xl font-semibold mb-4">All News</h2>
      <div className="space-y-4">
        {newsList.map((news) => (
          <div key={news.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
            <p className="mb-4 text-sm text-gray-600">{news.content.substring(0, 100)}...</p>
            {news.image && (
              <Image src={news.image} alt={news.title} width={100} height={100} className="object-cover mb-2" />
            )}
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