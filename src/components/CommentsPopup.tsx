'use client';

import { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  username: string;
  avatar: string;
  text: string;
  likes: number;
  time: string;
  replies?: Comment[];
}

interface CommentsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  posterImage: string;
  title: string;
}

export default function CommentsPopup({ isOpen, onClose, posterImage, title }: CommentsPopupProps) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'The Dark Room',
      username: 'username@38',
      avatar: '/img/user.png',
      text: 'Lorem ipsum is a dummy or @xyz placeholder text commonly used in graphic design, publishing, and web development.',
      likes: 0,
      time: '1 d',
    },
    {
      id: 2,
      author: 'Albert Flores',
      username: 'albertflores',
      avatar: '/img/user.png',
      text: 'A party full of positive vibes, great company, and soulful music — all within our values.',
      likes: 20,
      time: '14 h',
      replies: [
        {
          id: 3,
          author: 'Albert Flores',
          username: 'albertflores',
          avatar: '/img/user.png',
          text: 'A party full of positive vibes, great company, and soulful music — all within our values.',
          likes: 20,
          time: '14 h',
        },
      ],
    },
    {
      id: 4,
      author: 'Albert Flores',
      username: 'albertflores',
      avatar: '/img/user.png',
      text: 'A party full of positive vibes, great company, and soulful music — all within our values.',
      likes: 20,
      time: '14 h',
    },
  ]);

  if (!isOpen) return null;

  const handlePost = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: 'The Dark Room',
        username: 'username@38',
        avatar: '/img/user.png',
        text: newComment,
        likes: 0,
        time: 'Just now',
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative">
        {/* Top Right Buttons Container */}

         <div className="absolute top-0 right-0 z-10 flex flex-col gap-2">
          {/* Menu Dots Button */}
             {/* Close Button */}
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 p-2 "
            aria-label="Close comments"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          </div>
        <div className="absolute top-6 right-4 z-10 flex flex-col gap-2">
          {/* Menu Dots Button */}
        
          <button 
            className="text-gray-600  p-2 "
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
          
       
        </div>

        {/* Left side - Poster Image */}
        <div className="md:w-1/2 bg-black flex items-center justify-center">
          <img 
            src={posterImage} 
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right side - Comments */}
        <div className="md:w-1/2 flex flex-col bg-[#E8E8E8]">
          {/* Header */}
          <div className="p-4 border-b border-gray-300 bg-[#E8E8E8] flex items-center gap-3">
            <img 
              src="/img/user.png" 
              alt="The Dark Room"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">The Dark Room</h3>
              <p className="text-sm text-gray-600">username@38</p>
            </div>
          </div>

          {/* Comments List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {comments.map((comment) => (
              <div key={comment.id}>
                <div className="flex gap-3">
                  <img 
                    src={comment.avatar} 
                    alt={comment.author}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{comment.author} <span className="font-normal text-gray-700">{comment.text}</span></p>
                        <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                          {comment.id === 1 && <span>Edited</span>}
                          <span>{comment.time}</span>
                        </div>
                      </div>
                      <button className="text-gray-600 hover:text-red-500 ml-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                      {comment.likes > 0 && <span>{comment.likes} Likes</span>}
                      <button className="hover:text-gray-900 font-medium">Reply</button>
                    </div>

                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-3 space-y-3">
                        <button className="text-sm text-gray-700 hover:text-gray-900 font-medium">
                          View replies ({comment.replies.length})
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comment Input */}
          <div className="p-4 border-t border-gray-300 bg-[#E8E8E8]">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <button className="text-gray-600 hover:text-red-500">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-gray-600 hover:text-gray-900">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePost()}
                placeholder="Add Comment..."
                className="flex-1 px-3 py-2 bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-500"
              />
              <button 
                onClick={handlePost}
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
