import React, { useState } from 'react';
import { ITINERARY_DATA } from '../constants';
import { MapPin, Clock, Camera, Sunset, Moon, Sun } from 'lucide-react';
import { TimeOfDay } from '../types';

const ItineraryView: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  const getIcon = (time: TimeOfDay) => {
    switch (time) {
      case TimeOfDay.MORNING: return <Sun className="w-4 h-4" />;
      case TimeOfDay.NOON: return <Clock className="w-4 h-4" />;
      case TimeOfDay.AFTERNOON: return <Camera className="w-4 h-4" />;
      case TimeOfDay.EVENING: return <Sunset className="w-4 h-4" />;
      case TimeOfDay.NIGHT: return <Moon className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="pb-24">
      {/* Day Toggles */}
      <div className="flex p-4 gap-4 sticky top-0 bg-white/95 backdrop-blur-sm z-10 border-b border-gray-100 shadow-sm">
        {ITINERARY_DATA.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex flex-col items-center gap-1 ${
              activeDay === index
                ? 'bg-brand-500 text-white shadow-brand-500/30 shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <span>{day.dayTitle}</span>
            <span className={`text-xs font-normal ${activeDay === index ? 'text-brand-100' : 'text-gray-400'}`}>
              {index === 0 ? '古韵 & 湖畔' : '汉风 & 祈福'}
            </span>
          </button>
        ))}
      </div>

      <div className="p-5">
        <div className="mb-6">
          <h2 className="text-xl font-serif font-bold text-gray-800">{ITINERARY_DATA[activeDay].subtitle}</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {ITINERARY_DATA[activeDay].keywords.map((kw, i) => (
              <span key={i} className="text-xs bg-brand-50 text-brand-600 px-2 py-1 rounded border border-brand-100">
                #{kw}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200">
          {ITINERARY_DATA[activeDay].activities.map((activity, idx) => (
            <div key={idx} className="relative pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-10 h-10 bg-white rounded-full border-4 border-brand-50 flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                <div className="text-brand-500">
                  {getIcon(activity.time)}
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-brand-500 tracking-wider uppercase bg-brand-50 px-2 py-0.5 rounded">
                    {activity.time}
                  </span>
                  {activity.location && (
                    <div className="flex items-center text-xs text-gray-400">
                      <MapPin className="w-3 h-3 mr-1" />
                      {activity.location}
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">{activity.title}</h3>
                
                {activity.highlight && (
                  <div className="mb-3 bg-orange-50 text-orange-700 text-xs px-3 py-2 rounded-lg border border-orange-100 flex items-start">
                    <span className="font-bold mr-1">💡 Tips:</span> {activity.highlight}
                  </div>
                )}

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>

                {/* Simulated Image */}
                <div className="rounded-xl overflow-hidden h-32 w-full mb-3">
                    <img src={activity.imagePlaceholder} alt={activity.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {activity.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryView;