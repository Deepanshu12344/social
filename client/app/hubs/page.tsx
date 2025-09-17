'use client';

import Header from '@/components/Header';

export default function Hubs() {
  const hubs = [
    { id: '1', name: 'Technology', description: 'Latest in tech and innovation', members: '1.2k', posts: '430' },
    { id: '2', name: 'Creative Arts', description: 'Share your creative work', members: '850', posts: '290' },
    { id: '3', name: 'Business', description: 'Corporate and business discussions', members: '650', posts: '180' },
    { id: '4', name: 'Photography', description: 'Capture and share moments', members: '920', posts: '350' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto pt-20 pb-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Hubs</h1>
          <p className="text-gray-600">Find communities that match your interests</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hubs.map((hub) => (
            <div key={hub.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{hub.name}</h3>
              <p className="text-gray-600 mb-4">{hub.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4 text-sm text-gray-500">
                  <span>{hub.members} members</span>
                  <span>{hub.posts} posts</span>
                </div>
              </div>
              
              <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                Join Hub
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}