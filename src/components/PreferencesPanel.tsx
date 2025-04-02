import { ChevronRight, Plus, Star, Wrench } from 'lucide-react';
import React from 'react';

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
      icon: <Plus className="w-4 h-4 text-yellow-400" />,
    },
    {
      id: 'interests',
      title: 'INTERESTS YOU LIKE',
      description: "we'll use these to show you cool builds",
      icon: <Star className="w-4 h-4 text-yellow-400" />,
    },
    {
      id: 'tools',
      title: 'TOOLS USED',
      description: "we'll suggest better using these picks.",
      icon: <Wrench className="w-4 h-4 text-gray-400" />,
    },
  ];

  return (
    <div className="w-full py-4">
      <p className="text-gray-400 text-sm mb-6">
        our recommendations work best when you let us know these things:
      </p>

      <div className="flex flex-col gap-10">
        {preferences.map((item) => (
          <button
            key={item.id}
            className="w-full bg-transparent flex items-center justify-between p-3 group"
          >
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-1">
                <span>{item.icon}</span>
                <span className="text-xs tracking-wider text-gray-300 font-medium">
                  {item.title}
                </span>
              </div>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreferencesPanel;
