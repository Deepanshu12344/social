'use client';

import { useState } from 'react';
import { Image, Smile, Calendar, MapPin } from 'lucide-react';

export default function PostComposer() {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postContent.trim()) {
      console.log('New post:', postContent);
      setPostContent('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4">
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
              className="w-full text-xl placeholder-gray-500 border-none resize-none focus:outline-none"
              rows={3}
            />

            {/* Actions */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="flex items-center text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Image className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  <Smile className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="flex items-center text-gray-400 hover:text-red-500 transition-colors"
                >
                  <MapPin className="h-5 w-5" />
                </button>
              </div>

              <button
                type="submit"
                disabled={!postContent.trim()}
                className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}