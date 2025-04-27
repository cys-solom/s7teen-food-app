import * as React from 'react';
import { ArrowLeft } from 'lucide-react';
import LazyImage from '../ui/LazyImage';

interface HeroSectionProps {
  onOrderNowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOrderNowClick }) => {
  return (
    <div className="relative overflow-hidden mb-6 sm:mb-10 bg-[#f9f6f1] rounded-lg sm:rounded-2xl">
      <div className="flex flex-col md:flex-row items-stretch min-h-[300px] sm:min-h-[400px] md:min-h-[520px] rounded-lg sm:rounded-2xl overflow-hidden">
        {/* صورة البرجر */}
        <div className="w-full md:w-1/2 h-60 xs:h-72 sm:h-80 md:h-full overflow-hidden rounded-t-lg sm:rounded-t-2xl md:rounded-none md:rounded-r-2xl">
          <LazyImage
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80"
            alt="برغر شهي"
            className="w-full h-full object-cover"
            placeholderColor="#eee"
          />
        </div>
        {/* النص */}
        <div className="w-full md:w-1/2 py-8 xs:py-10 md:h-full bg-[#a15623] flex flex-col items-center justify-center text-center md:text-right px-4 xs:px-6 md:px-8 rounded-b-lg sm:rounded-b-2xl md:rounded-none md:rounded-l-2xl">
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            أشهى المأكولات<br />البيتي توصل لباب بيتك
          </h1>
          <p className="text-base xs:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed font-tajawal">
            اطلب ألذ الأطباق الطازجة والخضراوات الفريش مع خدمة توصيل سريعة
          </p>
          <button
            onClick={onOrderNowClick}
            className="bg-orange-400 hover:bg-orange-500 text-white py-3 xs:py-4 px-8 xs:px-10 rounded-lg text-base xs:text-lg font-bold transition-all duration-300 shadow-md mt-2"
          >
            اطلب الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;