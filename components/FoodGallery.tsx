import React from 'react';
import { FOOD_GUIDE } from '../constants';
import { Utensils, Flame, Coffee } from 'lucide-react';

const FoodGallery: React.FC = () => {
  return (
    <div className="p-5 pb-24">
      <div className="mb-6">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">徐州味道</h2>
        <p className="text-gray-500 text-sm">
          表面是北方城市的豪爽，揭开锅盖却能发现南方水乡的细腻。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {FOOD_GUIDE.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row">
            <div className="h-48 sm:h-auto sm:w-1/3 relative">
              <img 
                src={item.imagePlaceholder} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-lg text-xs font-bold text-white shadow-sm flex items-center gap-1
                  ${item.tag === 'Must Eat' ? 'bg-red-500' : 'bg-orange-400'}`}>
                  {item.tag === 'Must Eat' ? <Flame className="w-3 h-3" /> : <Utensils className="w-3 h-3" />}
                  {item.tag}
                </span>
              </div>
            </div>
            
            <div className="p-4 sm:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">
                  推荐店铺
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.recommendations.map((rec, i) => (
                    <span key={i} className="text-sm font-medium text-brand-600">
                      {rec}{i < item.recommendations.length - 1 ? '、' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-romantic-100/50 p-4 rounded-xl border border-romantic-100">
        <div className="flex items-center gap-2 mb-2 text-romantic-500 font-bold">
           <Flame className="w-4 h-4" />
           <span>避坑指南: 吃辣</span>
        </div>
        <p className="text-sm text-gray-700">
          徐州菜口味偏重（咸、辣）。如果不爱吃辣，点菜（特别是地锅鸡和米线）时记得备注<span className="font-bold text-red-500">“微辣”或“微微辣”</span>。
        </p>
      </div>
    </div>
  );
};

export default FoodGallery;