import React, { useState } from 'react';

interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ id, label, icon, active, onClick }) => {
  return (
    <button
      id={id}
      className={`flex-1 flex flex-col items-center justify-center py-3 relative ${
        active ? 'text-glitch-accent' : 'text-gray-500'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center mb-0.5">
        {icon}
      </div>
      <span className={`text-xs uppercase font-medium tracking-wide ${
        active ? 'text-glitch-accent' : 'text-gray-400'
      }`}>
        {label}
      </span>
      {active && (
        <div className="tab-active-indicator w-full" />
      )}
    </button>
  );
};

interface ProfileTabsProps {
  onTabChange: (tab: string) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('collections');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="w-full border-b border-glitch-dark bg-black">
      <div className="flex w-full">
        <Tab
          id="collections-tab"
          label="Collections"
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          }
          active={activeTab === 'collections'}
          onClick={() => handleTabClick('collections')}
        />
        <Tab
          id="manage-tags-tab"
          label="Manage Tags"
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
          }
          active={activeTab === 'manage-tags'}
          onClick={() => handleTabClick('manage-tags')}
        />
      </div>
    </div>
  );
};

export default ProfileTabs;
