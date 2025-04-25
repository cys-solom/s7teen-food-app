import * as React from 'react';
import { ArrowLeft } from 'lucide-react';
import LazyImage from '../ui/LazyImage';

interface PromoBannerProps {
  onOrderNowClick: () => void;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ onOrderNowClick }: PromoBannerProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl my-12">
      {/* Adjust height as needed */}
      <div className="relative flex" style={{ height: '400px' }}>
        {/* Colored section on the left - 50% width */}
        <div className="w-1/2 bg-amber-700"> 
          {/* الجزء الأيسر من البانر - اللون البرتقالي */}
        </div>
        {/* Image on the right - 50% width */}
        <div className="w-1/2 relative"> 
          <LazyImage
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1887"
            alt="طعام مشوي"
            className="absolute inset-0 w-full h-full object-cover"
            quality="high"
            priority={true}
          />
        </div>

        {/* Text layer */}
        <div className="absolute inset-0 flex items-center">
          {/* Align text container to the left half */}
          <div className="container mx-auto px-4 flex flex-row"> {/* Changed to flex-row */}
             {/* Text centered in the colored background */}
             {/* Width is 1/2, added centering classes */}
            <div className="w-1/2 flex flex-col items-center justify-center text-center z-10 px-6"> {/* Added centering classes, removed text-right, changed padding */}
              <h2 className="text-4xl font-bold text-white mb-4">عروض اليوم!</h2>
              {/* Adjusted background for better contrast on colored bg */}
              <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6 inline-block">
                <p className="text-xl text-white font-semibold">خصم 20% على جميع المنتجات</p>
                <p className="text-white opacity-90">العرض ساري حتى نهاية الأسبوع</p>
              </div>
              <button
                onClick={onOrderNowClick}
                // Keep button style or adjust as needed
                className="bg-white hover:bg-gray-100 text-amber-700 py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 text-lg font-medium"
              >
                <span>اطلب الآن</span>
                <ArrowLeft size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;