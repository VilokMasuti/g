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
      <div className="flex items-center justify-center mb-1.5">
        {icon}
      </div>
      <span className={`text-sm uppercase tracking-widest font-glitch ${
        active ? 'text-glitch-accent' : 'text-gray-500'
      }`}>
        {label}
      </span>
      {active && (
        <div className="tab-active-indicator" />
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

  const CollectionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke="currentColor">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );

  const TagsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke="currentColor">
      <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" />
      <circle cx="7" cy="7" r="1.5" />
    </svg>
  );

  return (
    <div className="w-full border-b border-gray-800">
      <div className="flex w-full">
        <Tab
          id="collections-tab"
          label="Collections"
          icon={<CollectionIcon />}
          active={activeTab === 'collections'}
          onClick={() => handleTabClick('collections')}
        />
        <Tab
          id="manage-tags-tab"
          label="Manage Tags"
          icon={<TagsIcon />}
          active={activeTab === 'manage-tags'}
          onClick={() => handleTabClick('manage-tags')}
        />
      </div>
    </div>
  );
};

export default ProfileTabs;
