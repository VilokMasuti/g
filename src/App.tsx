import { useEffect, useState } from 'react';
import ProfileHeader from '../src/components/ProfileHeader';

import CollectionsGrid from '../src/components/CollectionsGrid';
import Footer from '../src/components/Footer';
import PreferencesPanel from '../src/components/PreferencesPanel';
import ProfileTabs from '../src/components/ProfileTabs';

// Mock data for the profile
const profileData = {
  avatarUrl: '/lovable-uploads/2617ffae-4ce0-47a6-8a1f-78d999dcf95e.png',
  username: 'Vilok',
  country: 'INDIA',
  bio: '22 y/o with high ambitions, want to build cool stuff!',
  following: 2,
  verified: true,
};

// Mock data for collections
const collectionsData = [
  {
    id: 'liked',
    type: 'liked' as const,
    thumbnails: ['/assets/c4.png', '/assets/c4.png'],
    count: 32,
  },
  {
    id: 'saved',
    type: 'saved' as const,
    thumbnails: ['/assets/c3.png', '/assets/c3.png'],
    count: 25,
  },
  {
    id: 'files',
    type: 'files' as const,
    thumbnails: ['/assets/c2.png', '/assets/c3.png'],
    count: 3,
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState('collections');
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate background shift based on scroll
  const backgroundStyle = {
    transform: `translateY(${scrollY * 0.1}px)`,
    transition: 'transform 0.05s linear',
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-black text-white">
      <div className="relative w-full max-w-md mx-auto">
        {/* Header section with patterned background */}
        <div
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #27024D 0%, #101216 100%)',
          }}
        >
          {/* Animated Pattern Background - only behind the header */}
          <div
            className="absolute inset-0 w-full h-full glitch-pattern opacity-30 z-0"
            style={backgroundStyle}
          />

          {/* Profile Header with proper z-index to appear above pattern */}
          <div className="relative z-10 p-6 pb-4">
            <ProfileHeader {...profileData} />
          </div>
        </div>

        {/* Content Container - black background */}
        <div className="w-full bg-black min-h-screen flex flex-col">
          {/* Tabs Navigation */}
          <div>
            <ProfileTabs onTabChange={setActiveTab} />
          </div>

          {/* Tab Content */}
          <div className="flex-1 px-6">
            {activeTab === 'collections' ? (
              <CollectionsGrid collections={collectionsData} />
            ) : (
              <PreferencesPanel />
            )}
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
