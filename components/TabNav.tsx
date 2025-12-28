import React from 'react';
import { Tab } from '../types';
import { Map, UtensilsCrossed, Info } from 'lucide-react';

interface TabNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TabNav: React.FC<TabNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: Tab.ITINERARY, label: '行程', icon: <Map className="w-5 h-5" /> },
    { id: Tab.FOOD, label: '美食', icon: <UtensilsCrossed className="w-5 h-5" /> },
    { id: Tab.ESSENTIALS, label: '攻略', icon: <Info className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2 pb-safe z-50 flex justify-around items-end shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex flex-col items-center gap-1 p-2 transition-colors duration-200 w-20 ${
            activeTab === tab.id
              ? 'text-brand-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <div className={`transition-transform duration-200 ${activeTab === tab.id ? '-translate-y-1' : ''}`}>
            {tab.icon}
          </div>
          <span className={`text-[10px] font-bold ${activeTab === tab.id ? 'opacity-100' : 'opacity-70'}`}>
            {tab.label}
          </span>
          {activeTab === tab.id && (
            <div className="w-1 h-1 bg-brand-600 rounded-full absolute bottom-1.5" />
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNav;