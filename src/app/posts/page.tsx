'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CommentsPopup from '@/components/CommentsPopup';
import { useState } from 'react';

export default function PostsPage() {
  const [selectedPost, setSelectedPost] = useState<{ image: string; title: string } | null>(null);
  
  const posts = [
    { id: 1, image: '/img/poster.png', title: 'Blade' },
    { id: 2, image: '/img/img2.jpg', title: 'Skyfall' },
    { id: 3, image: '/img/img3.jpg', title: 'Birds of Prey' },
    { id: 4, image: '/img/img4.jpg', title: 'This Gun for Hire' },
    { id: 5, image: '/img/img5.jpg', title: 'Panther' },
    { id: 6, image: '/img/img6.png', title: 'Aladdin' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 ml-0 md:ml-24">
        <div className="border-b">
          <Header
            name="F-bar"
            location="OLP Phase 3, Gurugram"
            distance="1.2 Kms"
            stats={{
              publications: 153,
              followers: 209,
              mutual: 43,
            }}
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-8">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-gray-700 hover:text-gray-900 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
           
            </button>
            <h2 className="text-2xl font-bold text-gray-900"> Posts</h2>
          </div>
          
          {/* Movie Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-b from-gray-800 to-gray-900"
                onClick={() => setSelectedPost({ image: post.image, title: post.title })}
              >
                {/* Image Container */}
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold">{post.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comments Popup */}
          <CommentsPopup
            isOpen={!!selectedPost}
            onClose={() => setSelectedPost(null)}
            posterImage={selectedPost?.image || ''}
            title={selectedPost?.title || ''}
          />
        </div>
      </main>
    </div>
  );
}