import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PreferenceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PreferencesPanel: React.FC = () => {
  const preferences: PreferenceItem[] = [
    {
      id: 'difficulty',
      title: 'YOUR DIFFICULTY',
      description: 'you decide the level of challenge you want!',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
          <path d="M10 1.66675V18.3334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.66675 10H18.3334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 'interests',
      title: 'INTERESTS YOU LIKE',
      description: "we'll use these to show you cool builds",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
          <path d="M10 1.66675L12.575 6.88341L18.3334 7.72508L14.1667 11.7834L15.15 17.5167L10 14.8167L4.85002 17.5167L5.83335 11.7834L1.66669 7.72508L7.42502 6.88341L10 1.66675Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 'tools',
      title: 'TOOLS USED',
      description: "we'll suggest better using these picks.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
          <path d="M17.0889 13.6112L10.1389 6.66117C9.98607 6.51306 9.79967 6.40059 9.59182 6.33322C9.38398 6.26586 9.16156 6.24581 8.94419 6.27481C8.72681 6.30381 8.5202 6.38106 8.34159 6.5001C8.16298 6.61914 8.01778 6.77649 7.91892 6.96117L3.33336 16.6945C3.2448 16.8637 3.19541 17.0505 3.18951 17.2414C3.18361 17.4324 3.2213 17.6219 3.29892 17.7962C3.37654 17.9706 3.49201 18.1254 3.63635 18.2488C3.78069 18.3723 3.95027 18.4615 4.13336 18.509C4.28658 18.5522 4.44655 18.5624 4.60392 18.5388C4.76129 18.5153 4.91245 18.4586 5.04725 18.3723C5.18204 18.286 5.29799 18.1719 5.38678 18.0372C5.47557 17.9025 5.53508 17.7503 5.56114 17.5912L6.17781 14.0723H8.5778L10.2167 15.7112C10.3648 15.8593 10.5512 15.9591 10.7546 16.0002C10.958 16.0413 11.1697 16.0222 11.3639 15.9445C11.558 15.8669 11.7259 15.7339 11.847 15.5614C11.968 15.389 12.0374 15.1838 12.0478 14.9723L12.2889 11.8612L15.2889 14.8612C15.437 15.0093 15.6235 15.1091 15.8268 15.1502C16.0302 15.1913 16.2419 15.1722 16.4361 15.0946C16.6303 15.0169 16.7982 14.884 16.9192 14.7115C17.0403 14.5391 17.1096 14.334 17.12 14.1223L17.5 10.8334C17.5242 10.5142 17.4518 10.1946 17.2914 9.91817C17.131 9.64178 16.8898 9.42118 16.6 9.28892" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.5 2.5L13.75 3.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5001 7.5L16.2501 6.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 5L15 5.00833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full py-8">
      <p className="text-gray-400 text-sm mb-6 font-mono">
        our recommendations work best when you let us know these things:
      </p>

      <div className="flex flex-col gap-12">
        {preferences.map((item) => (
          <button
            key={item.id}
            className="w-full bg-transparent flex items-center justify-between group"
          >
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-2">
                <span>{item.icon}</span>
                <span className="text-sm tracking-widest text-gray-300 font-glitch">
                  {item.title}
                </span>
              </div>
              <p className="text-sm text-gray-500 font-mono">{item.description}</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-400 transition-colors" strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreferencesPanel;
