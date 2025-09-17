'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { Image, Smile, Calendar, MapPin, X } from 'lucide-react';

export default function CreatePost() {
  const router = useRouter();
  const [postContent, setPostContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Tech', 'Corporate', 'Creative', 'Lifestyle', 'News', 'Sports'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postContent.trim()) {
      console.log('New post:', { content: postContent, category: selectedCategory });
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-2xl mx-auto pt-20 pb-8 px-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Create Post</h1>
            <button
              onClick={() => router.back()}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex space-x-4 mb-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-lg">U</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What's happening?"
                  className="w-full text-xl placeholder-gray-500 border-none resize-none focus:outline-none min-h-[120px]"
                  rows={5}
                />
              </div>
            </div>

            {/* Category Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Category (optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="flex items-center text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50"
                >
                  <Image className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors p-2 rounded-full hover:bg-yellow-50"
                >
                  <Smile className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="flex items-center text-gray-400 hover:text-green-500 transition-colors p-2 rounded-full hover:bg-green-50"
                >
                  <Calendar className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="flex items-center text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                >
                  <MapPin className="h-5 w-5" />
                </button>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!postContent.trim()}
                  className="bg-gray-900 text-white px-8 py-2 rounded-full font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}