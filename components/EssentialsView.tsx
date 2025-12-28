import React from 'react';
import { PREPARATION_TIPS } from '../constants';
import { Building, Bike, Ticket, AlertTriangle, CheckCircle2 } from 'lucide-react';

const EssentialsView: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'hotel': return <Building className="w-5 h-5" />;
      case 'bike': return <Bike className="w-5 h-5" />;
      case 'ticket': return <Ticket className="w-5 h-5" />;
      case 'warning': return <AlertTriangle className="w-5 h-5" />;
      default: return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="p-5 pb-24">
      <div className="mb-6">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">行前准备</h2>
        <p className="text-gray-500 text-sm">
          做好这些准备，保证您的旅程舒适且无忧。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PREPARATION_TIPS.map((tip, index) => (
          <div 
            key={index} 
            className={`rounded-2xl p-5 border shadow-sm transition-all ${
              tip.urgent 
                ? 'bg-white border-l-4 border-l-red-400 border-t-gray-100 border-r-gray-100 border-b-gray-100' 
                : 'bg-white border-gray-100'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-xl shrink-0 ${tip.urgent ? 'bg-red-50 text-red-500' : 'bg-brand-50 text-brand-600'}`}>
                {getIcon(tip.icon)}
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  {tip.category}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tip.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 px-1">美食避坑地图</h3>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
             <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 text-xs font-bold">X</div>
                    <div>
                        <span className="block font-bold text-gray-700">景区饭店</span>
                        <span className="text-sm text-gray-500">价格高，味道可能不地道，尽量避开。</span>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-100"></div>
                <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center shrink-0 text-xs font-bold">O</div>
                    <div>
                        <span className="block font-bold text-gray-700">富国街 / 丰储街</span>
                        <span className="text-sm text-gray-500">本地人去的地方，便宜又地道。</span>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialsView;