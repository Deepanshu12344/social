'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from 'lucide-react';

interface Post {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  category: string;
  timestamp: string;
  likes: number;
  comments: number;
  reposts: number;
}

interface PostCardProps {
  post: Post;
}

const categoryColors = {
  'Tech': 'bg-blue-100 text-blue-800',
  'Corporate': 'bg-purple-100 text-purple-800',
  'Creative': 'bg-green-100 text-green-800'
};

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [repostsCount, setRepostsCount] = useState(post.reposts);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleRepost = () => {
    setReposted(!reposted);
    setRepostsCount(reposted ? repostsCount - 1 : repostsCount + 1);
  };

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex space-x-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-medium">
              {post.author.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <span className="text-gray-500">@{post.author.username}</span>
              <span className="text-gray-400">·</span>
              <span className="text-gray-500 text-sm">{post.timestamp}</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          {/* Category Tag */}
          <div className="mt-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              categoryColors[post.category as keyof typeof categoryColors]
            }`}>
              {post.category}
            </span>
          </div>

          {/* Post Content */}
          <div className="mt-3">
            <p className="text-gray-900">{post.content}</p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-colors ${
                liked 
                  ? 'text-red-600 hover:bg-red-50' 
                  : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
              <span className="text-sm">{likesCount}</span>
            </button>

            <button className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{post.comments}</span>
            </button>

            <button
              onClick={handleRepost}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-colors ${
                reposted 
                  ? 'text-green-600 hover:bg-green-50' 
                  : 'text-gray-400 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <Repeat2 className="h-4 w-4" />
              <span className="text-sm">{repostsCount}</span>
            </button>

            <button className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">
              <Share className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}