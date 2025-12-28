import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-72 w-full overflow-hidden">
      <img 
        src="https://picsum.photos/800/600?random=100" 
        alt="Xuzhou Scenery" 
        className="absolute inset-0 w-full h-full object-cover filter brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent flex flex-col justify-end p-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="px-3 py-1 bg-romantic-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
            For Couples
          </span>
          <span className="px-3 py-1 bg-brand-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
            2 Days
          </span>
        </div>
        <h1 className="text-3xl font-serif text-white font-bold leading-tight mb-1">
          徐州舒享之旅
        </h1>
        <p className="text-brand-100 text-sm flex items-center">
          <Heart className="w-4 h-4 mr-1 text-romantic-500 fill-current" />
          两汉文化 · 山水风光 · 地道美食
        </p>
      </div>
    </div>
  );
};

export default Hero;