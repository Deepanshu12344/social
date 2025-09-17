'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Plus, User, Eye } from 'lucide-react';

export default function Header() {
  const [isZenMode, setIsZenMode] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Zap className="h-6 w-6 text-gray-900 mr-2" />
            <span className="text-xl font-bold text-gray-900">Nexus</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/hubs" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Hubs
            </Link>
            <Link href="/explore" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Explore
            </Link>
            <Link href="/messages" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Messages
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Create Post */}
            <Link 
              href="/create-post"
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Post
            </Link>

            {/* Zen Mode Toggle */}
            <button
              onClick={() => setIsZenMode(!isZenMode)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isZenMode 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Eye className="h-4 w-4" />
              <span>Zen Mode</span>
            </button>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                D
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <div className="border-t border-gray-200">
                    <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}