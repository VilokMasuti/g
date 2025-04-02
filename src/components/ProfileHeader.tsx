import React from 'react';
import { Share2, Settings } from 'lucide-react';

interface ProfileHeaderProps {
  avatarUrl: string;
  username: string;
  country: string;
  bio: string;
  following: number;
  verified?: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({

  username,
  country,
  bio,
  following,
  verified = true
}) => {
  return (
    <div className="relative w-full">
      {/* Profile Actions */}
      <div className="absolute right-4 top-4 flex gap-4">
        <button className="text-white/80 hover:text-glitch-accent transition-colors">
          <Share2 size={20} />
        </button>
        <button className="text-white/80 hover:text-glitch-accent transition-colors">
          <Settings size={20} />
        </button>
      </div>

      {/* Avatar */}
      <div className="mb-3 relative">
        <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-glitch-accent">
          <img
            src='/assets/pi.png'
            alt={username}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Username */}
      <div className="flex items-center gap-2 mb-1">
        <h1 className="text-white text-xl font-medium">@{username}</h1>
        {verified && (
          <span className="text-glitch-accent">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        )}
      </div>

      {/* Country */}
      <div className="flex items-center gap-2 mb-3 text-white/70">
        <span className="text-xs uppercase">{country}</span>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-400 mb-4 leading-snug">
        {bio}
      </p>

      {/* Following */}
      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
          <path d="M16 3.13a4 4 0 010 7.75"></path>
        </svg>
        <span>{following}</span>
        <span className="uppercase">following</span>
      </div>

      {/* Edit Profile Button */}
      <div className="absolute top-3 right-24">
        <button className="flex items-center gap-1.5 text-xs uppercase text-white/70 border-b border-dashed border-white/30">
          <span>Edit Profile</span>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
