'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PostComposer from '@/components/PostComposer';
import PostCard from '@/components/PostCard';
import { Zap } from 'lucide-react';

const mockPosts = [
  {
    id: '1',
    author: {
      name: 'Deepanshu Sharma',
      username: 'deepanshu123sharma4',
      avatar: '/api/placeholder/40/40'
    },
    content: 'uo',
    category: 'Tech',
    timestamp: 'about 12 hours ago',
    likes: 0,
    comments: 0,
    reposts: 0
  },
  {
    id: '2',
    author: {
      name: 'Abhinav Mishra',
      username: 'abhimish03',
      avatar: '/api/placeholder/40/40'
    },
    content: 'sfgkdhehetn',
    category: 'Corporate',
    timestamp: '4 days ago',
    likes: 0,
    comments: 0,
    reposts: 0
  },
  {
    id: '3',
    author: {
      name: 'Abhinav Mishra',
      username: 'abhimish03',
      avatar: '/api/placeholder/40/40'
    },
    content: 'fjgog',
    category: 'Creative',
    timestamp: '4 days ago',
    likes: 0,
    comments: 0,
    reposts: 0
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'For You' | 'Following'>('For You');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-2xl mx-auto pt-20 pb-8">
        {/* Feed Tabs */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-white rounded-lg shadow-sm p-1">
            {['For You', 'Following'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as 'For You' | 'Following')}
                className={`px-8 py-3 rounded-md transition-all duration-200 font-medium ${
                  activeTab === tab
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Post Composer */}
        <PostComposer />

        {/* Posts Feed */}
        <div className="space-y-4">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}