import React from 'react';
import { Share2, Settings, Edit } from 'lucide-react';

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
      <div className="absolute right-2 top-2 flex gap-4">
        <button className="text-white/70 hover:text-glitch-accent transition-colors">
          <Share2 size={20} strokeWidth={1.5} className="text-white/70" />
        </button>
        <button className="text-white/70 hover:text-glitch-accent transition-colors">
          <Settings size={20} strokeWidth={1.5} className="text-white/70" />
        </button>
      </div>

      {/* Avatar */}
      <div className="mb-4 relative">
        <div className="w-[90px] h-[90px] rounded-sm overflow-hidden border-[3px] border-yellow-300">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/80"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/80"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/80"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/80"></div>
          <img
            src='/assets/pi.png'
            alt={username}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Username */}
      <div className="flex items-center gap-2 mb-1">
        <h1 className="text-white text-[28px] font-glitch">@{username}</h1>
        {verified && (
          <span className="text-glitch-accent mt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#00FFAA"/>
              <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </div>

      {/* Country */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm uppercase text-gray-400 tracking-wider">{country}</span>
      </div>

      {/* Bio */}
      <p className="text-[17px] text-gray-300 mb-4 leading-snug font-mono">
        {bio}
      </p>

      {/* Following */}
      <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-6 font-mono">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-bold text-white/80">{following}</span>
        <span className="uppercase tracking-wide">following</span>
      </div>

      {/* Edit Profile Button */}
      <div className="absolute top-4 right-20">
        <button className="flex items-center gap-1 text-sm uppercase text-white/70 border-b border-dashed border-white/30 font-mono">
          <span>EDIT PROFILE</span>
          <Edit size={14} className="ml-1" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
