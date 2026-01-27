'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Search, Mic } from 'lucide-react';

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isMutual?: boolean;
}

interface FollowersPopupProps {
  isOpen: boolean;
  onClose: () => void;
  followers: User[];
  mutualMates: User[];
}

export default function FollowersPopup({ isOpen, onClose, followers, mutualMates }: FollowersPopupProps) {
  const [activeTab, setActiveTab] = useState<'followers' | 'mutual'>('followers');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const currentUsers = activeTab === 'followers' ? followers : mutualMates;
  const filteredUsers = currentUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('followers')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === 'followers'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Followers, {followers.length}
            </button>
            <button
              onClick={() => setActiveTab('mutual')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === 'mutual'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Mutual Mate, {mutualMates.length}
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search People"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Mic size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Users List */}
        <div className="overflow-y-auto max-h-96">
          {filteredUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-600">{user.username}</div>
                </div>
              </div>
              <div className="flex gap-2">
                {activeTab === 'followers' && !user.isMutual && (
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition">
                    Add Mate
                  </button>
                )}
                {(activeTab === 'mutual' || user.isMutual) && (
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition">
                    Message
                  </button>
                )}
              </div>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No users found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}