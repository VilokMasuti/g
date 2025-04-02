import React from 'react';

interface CollectionItem {
  id: string;
  type: 'liked' | 'saved' | 'files';
  thumbnails: string[];
  count: number;
}

interface CollectionsGridProps {
  collections: CollectionItem[];
}

const CollectionsGrid: React.FC<CollectionsGridProps> = ({ collections }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-10 mt-4">
      {collections.map((collection) => (
        <div
          key={collection.id}
          className="w-full bg-glitch-panel rounded-md overflow-hidden"
        >
          <div className="grid grid-cols-2 gap-0.5">
            {collection.thumbnails.map((thumbnail, index) => (
              <div
                key={`${collection.id}-thumb-${index}`}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={thumbnail}
                  alt={`${collection.type} thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="p-3 flex items-center gap-2">
            {collection.type === 'liked' && (
              <svg
                className="w-5 h-5 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            )}
            {collection.type === 'saved' && (
              <svg
                className="w-5 h-5 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            )}
            {collection.type === 'files' && (
              <svg
                className="w-5 h-5 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            )}
            <div className="flex items-center text-sm uppercase text-gray-400">
              <span className="font-medium mr-1">{collection.type}</span>
              <span className="text-gray-500">({collection.count})</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionsGrid;
