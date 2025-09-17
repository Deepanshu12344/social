'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { Search, MoreHorizontal } from 'lucide-react';

const conversations = [
  { id: '1', name: 'John Doe', username: 'johndoe', lastMessage: 'Hey! How are you?', time: '2m', unread: 2 },
  { id: '2', name: 'Jane Smith', username: 'janesmith', lastMessage: 'Thanks for sharing that article!', time: '1h', unread: 0 },
  { id: '3', name: 'Alex Johnson', username: 'alexj', lastMessage: 'Let me know what you think', time: '3h', unread: 1 },
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');

  const messages = [
    { id: '1', text: 'Hey! How are you?', sender: 'other', time: '2m ago' },
    { id: '2', text: 'I\'m doing great! How about you?', sender: 'me', time: '1m ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16 h-screen">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                    selectedConversation.id === conversation.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">
                        {conversation.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900">{conversation.name}</h3>
                        <span className="text-sm text-gray-500">{conversation.time}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-600 truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="bg-white p-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">
                    {selectedConversation.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">{selectedConversation.name}</h2>
                  <p className="text-sm text-gray-500">@{selectedConversation.username}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'me'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'me' ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="bg-white p-4 border-t border-gray-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newMessage.trim()) {
                    console.log('Send message:', newMessage);
                    setNewMessage('');
                  }
                }}
                className="flex space-x-2"
              >
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}