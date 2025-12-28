import React, { useState } from 'react';
import Hero from './components/Hero';
import TabNav from './components/TabNav';
import ItineraryView from './components/ItineraryView';
import FoodGallery from './components/FoodGallery';
import EssentialsView from './components/EssentialsView';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ITINERARY);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.ITINERARY:
        return <ItineraryView />;
      case Tab.FOOD:
        return <FoodGallery />;
      case Tab.ESSENTIALS:
        return <EssentialsView />;
      default:
        return <ItineraryView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 max-w-md mx-auto shadow-2xl overflow-hidden relative border-x border-gray-100">
      <Hero />
      
      <main className="relative -mt-6 bg-slate-50 rounded-t-3xl z-0 min-h-[60vh]">
        {renderContent()}
      </main>

      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;