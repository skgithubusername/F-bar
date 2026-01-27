'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import TabNavigation from '@/components/TabNavigation';
import MenuItem from '@/components/MenuItem';
import PackageSlider from '@/components/PackageSlider';
import EventSection from '@/components/EventSection';
import GallerySection from '@/components/GallerySection';
import TeaserSection from '@/components/TeaserSection';
import AboutSection from '@/components/AboutSection';
import ReviewSection from '@/components/ReviewSection';
import PostsSection from '@/components/PostsSection';

// Structured data for the main page
const pageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "F-bar - Restaurant & Bar in Gurugram",
  "description": "Experience premium dining at F-bar in Gurugram. Discover our curated menu, book events, and enjoy the best nightlife with cocktails, food, and entertainment.",
  "url": "https://f-bar-gurugram.com",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://f-bar-gurugram.com"
      }
    ]
  }
};

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'menu', label: 'Menu' },
  { id: 'package', label: 'Package' },
  { id: 'event', label: 'Event' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'teaser', label: 'Teaser' },
  { id: 'about', label: 'About' },
  { id: 'review', label: 'Review' },
  { id: 'posts', label: 'Posts' },
];

const menuItems = [
  {
    image: '/img/img1.jpg',
    name: 'Warm Quinoa Salad',
    description: 'Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.',
    tags: ['Bestseller', 'Fresh Ingredients', 'Light & Refreshing'],
    price: '349',
    isVeg: true,
  },
  {
    image: '/img/img2.jpg',
    name: 'Miso Healthy Sauté',
    description: 'Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.',
    tags: ['Bestseller', 'Fresh Ingredients', 'Light & Refreshing'],
    price: '594',
    isVeg: false,
  },
  {
    image: '/img/img3.jpg',
    name: 'Braised Kidney Beans & Sweet Potato',
    description: 'Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.',
    tags: ['Bestseller', 'Fresh Ingredients', 'Light & Refreshing'],
    price: '569',
    isVeg: true,
  },
  {
    image: '/img/img4.jpg',
    name: 'Healthy Caesar Salad for Smart Menu',
    description: 'Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.',
    tags: ['Bestseller', 'Fresh Ingredients', 'Light & Refreshing'],
    price: '499',
    isVeg: true,
    
  },
  {
    image: '/img/img5.jpg',
    name: 'Healthy Caesar Salad for Smart Menu',
    description: 'Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.',
    tags: ['Bestseller', 'Fresh Ingredients', 'Light & Refreshing'],
    price: '669',
    isVeg: true,
    
  },
  {
    image: '/img/img9.jpg',
    name: 'Healthy Caesar Salad for Smart Menu',
    description: 'Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.',
    tags: ['Bestseller', 'Fresh Ingredients', 'Light & Refreshing'],
    price: '999',
    isVeg: true,
    
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample followers data
  const sampleFollowers = [
    {
      id: '1',
      name: 'Darlene',
      username: 'consult.xxxxx',
      avatar: '/img/user.png',
      isMutual: false,
    },
    {
      id: '2',
      name: 'Courtney',
      username: 'physio.xxxxx',
      avatar: '/img/user.png',
      isMutual: false,
    },
    {
      id: '3',
      name: 'Connie',
      username: 'admin.xxxxx',
      avatar: '/img/user.png',
      isMutual: false,
    },
    {
      id: '4',
      name: 'Colleen',
      username: 'doctor.xxxxx',
      avatar: '/img/user.png',
      isMutual: false,
    },
    {
      id: '5',
      name: 'Aubrey',
      username: 'superadmin.xxxxx',
      avatar: '/img/user.png',
      isMutual: true,
    },
    {
      id: '6',
      name: 'Brandie',
      username: 'trainer.xxxxx',
      avatar: '/img/user.png',
      isMutual: true,
    },
    {
      id: '7',
      name: 'Bessie',
      username: 'admin.xxxxx',
      avatar: '/img/user.png',
      isMutual: true,
    },
  ];

  const mutualMates = sampleFollowers.filter(user => user.isMutual);

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            {/* Menu Section */}
            <div id="menu" className="mb-12">
              <div className="flex gap-3 mb-8">
                <button className="px-4 md:px-6 py-2.5 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition shadow-md text-sm">
                  Veg
                </button>
                <button className="px-4 md:px-6 py-2.5 bg-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-400 transition text-sm">
                  Non-Veg
                </button>
              </div>

            <div className=' bg-white m-2 p-2  shadow-sm rounded-lg'>
                <h3 className="text-lg md:text-xl bg-whitefont-bold text-gray-900 mb-6">Staters</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
                {menuItems.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>
            

              {/* Menu Categories */}
              <div className="space-y-4">
                <div className="flex items-center justify-between cursor-pointer p-4 ">
                  <span className="font-semibold text-gray-900">Main Course</span>
                  <span className="text-gray-400">›</span>
                </div>
                <div className="flex items-center justify-between cursor-pointer p-4 ">
                  <span className="font-semibold text-gray-900">Rice</span>
                  <span className="text-gray-400">›</span>
                </div>
                <div className="flex items-center justify-between cursor-pointer p-4 ">
                  <span className="font-semibold text-gray-900">Breads</span>
                  <span className="text-gray-400">›</span>
                </div>
                <div className="flex items-center justify-between p-4  cursor-pointer">
                  <span className="font-semibold text-gray-900">Sides</span>
                  <span className="text-gray-400">›</span>
                </div>
              </div>
            </div>
</div>
            {/* Package Section */}
            <div id="package">
              <PackageSlider />
            </div>

            {/* Event Section */}
            <div id="event">
              <EventSection />
            </div>

            {/* Gallery Section */}
            <div id="gallery">
              <GallerySection />
            </div>

            {/* Teaser Section */}
            <div id="teaser">
              <TeaserSection />
            </div>

            {/* About Section */}
            <div id="about">
              <AboutSection />
            </div>

            {/* Review Section */}
            <div id="review">
              <ReviewSection />
            </div>

            {/* Posts Section */}
            <div id="posts">
              <PostsSection />
            </div>
          </div>
        );
      case 'menu':
        return (
          <div className="mb-12">
            <div className="flex gap-3 mb-8">
              <button className="px-4 md:px-6 py-2.5 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition shadow-md text-sm">
                Veg
              </button>
              <button className="px-4 md:px-6 py-2.5 bg-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-400 transition text-sm">
                Non-Veg
              </button>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">Staters</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
              {menuItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Menu Categories */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <span className="font-semibold text-gray-900">Main Course</span>
                <span className="text-gray-400">›</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <span className="font-semibold text-gray-900">Rice</span>
                <span className="text-gray-400">›</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <span className="font-semibold text-gray-900">Breads</span>
                <span className="text-gray-400">›</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <span className="font-semibold text-gray-900">Sides</span>
                <span className="text-gray-400">›</span>
              </div>
            </div>
          </div>
        );
      case 'package':
        return (
          <div>
            <PackageSlider />
          </div>
        );
      case 'event':
        return (
          <div>
            <EventSection />
          </div>
        );
      case 'gallery':
        return (
          <div>
            <GallerySection />
          </div>
        );
      case 'teaser':
        return (
          <div>
            <TeaserSection />
          </div>
        );
      case 'about':
        return (
          <div>
            <AboutSection />
          </div>
        );
      case 'review':
        return (
          <div>
            <ReviewSection />
          </div>
        );
      case 'posts':
        return (
          <div>
            <PostsSection />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main 
        className="flex-1 ml-0 md:ml-24" 
        role="main"
        aria-label="Main content"
      >
        <Header
          name="F-bar"
          location="OLP Phase 3, Gurugram"
          distance="1.2 Kms"
          stats={{
            publications: 153,
            followers: 209,
            mutual: 43,
          }}
          followers={sampleFollowers}
          mutualMates={mutualMates}
        />

        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <section 
          className="p-4 md:p-8" 
          aria-labelledby="main-content-heading"
        >
          <h1 id="main-content-heading" className="sr-only">
            F-bar Restaurant & Bar - Gurugram
          </h1>
          {renderActiveTabContent()}
        </section>
      </main>
      
      {/* Structured data for the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData)
        }}
      />
    </div>
  );
}
