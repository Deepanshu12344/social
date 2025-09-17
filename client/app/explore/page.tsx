'use client';

import Header from '@/components/Header';
import PostCard from '@/components/PostCard';

const trendingTopics = [
  { topic: '#TechTrends', posts: '12.3k' },
  { topic: '#CreativeLife', posts: '8.7k' },
  { topic: '#Innovation', posts: '5.9k' },
  { topic: '#DigitalArt', posts: '4.2k' }
];

const exploreData = [
  {
    id: '1',
    author: {
      name: 'Sarah Johnson',
      username: 'sarahj_dev',
      avatar: '/api/placeholder/40/40'
    },
    content: 'Just launched my new portfolio website! Check out the interactive animations 🚀',
    category: 'Tech',
    timestamp: '2 hours ago',
    likes: 45,
    comments: 12,
    reposts: 8
  },
  {
    id: '2',
    author: {
      name: 'Michael Chen',
      username: 'mchen_design',
      avatar: '/api/placeholder/40/40'
    },
    content: 'Working on a new brand identity project. The client wants something bold and modern.',
    category: 'Creative',
    timestamp: '4 hours ago',
    likes: 23,
    comments: 7,
    reposts: 3
  }
];

export default function Explore() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto pt-20 pb-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore</h1>
              <p className="text-gray-600">Discover what's happening now</p>
            </div>

            <div className="space-y-4">
              {exploreData.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Trending Now</h2>
              <div className="space-y-3">
                {trendingTopics.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 hover:bg-gray-50 rounded-lg px-2 cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">{item.topic}</p>
                      <p className="text-sm text-gray-500">{item.posts} posts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Users */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Who to Follow</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">User {index + 1}</p>
                        <p className="text-sm text-gray-500">@user{index + 1}</p>
                      </div>
                    </div>
                    <button className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800 transition-colors">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}