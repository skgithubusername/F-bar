'use client';

import { FileText, Gavel, RefreshCw, Search, MapPin, Bell, Bookmark, Settings, Wallet } from 'lucide-react';
import Image from 'next/image';

export default function Sidebar() {
  const menuItems = [
    { icon: FileText, label: 'Documents' },
    { icon: Gavel, label: 'Legal' },
    { icon: RefreshCw, label: 'Refresh' },
    { icon: Search, label: 'Search' },
    
    { icon: Bookmark, label: 'Saved' },
    { icon: Settings, label: 'Settings' },
    { icon: Wallet, label: 'Wallet' },
  ];

  return (
    <aside className="hidden md:flex w-20 bg-gradient-to-b from-[#E8E8F0] to-[#F5F5E8] border-r border-gray-200 flex-col items-center py-6 gap-6 fixed left-0 top-0 h-screen z-30">
      {/* PlayStation Logo */}
      <div className="mb-2 flex items-center gap-2">
        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center relative">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-3 h-3 border-2 border-yellow-400 rounded-sm"></div>
            <div className="w-3 h-3 border-2 border-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 border-2 border-yellow-400" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            <div className="w-3 h-3 border-2 border-yellow-400 rotate-45"></div>
          </div>
        </div>
        <div className="w-6 h-6 bg-purple-200 rounded flex items-center justify-center">
          <div className="w-3 h-2 border border-purple-400 rounded-sm"></div>
        </div>
      </div>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="p-3 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:bg-white/50 rounded-lg"
          title={item.label}
        >
          <item.icon size={24} strokeWidth={1.5} />
        </button>
      ))}

      {/* Profile Picture at Bottom */}
      <div className="">
        <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-purple-400 transition-all">
          <Image
            src="/img/user.png"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </button>
      </div>
    </aside>
  );
}
