import * as React from 'react';
import { ArrowLeft } from 'lucide-react';
import LazyImage from '../ui/LazyImage';

interface HeroSectionProps {
  onOrderNowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOrderNowClick }) => {
  return (
    <div className="relative overflow-hidden mb-6 sm:mb-8 lg:mb-10 bg-[#f9f6f1] rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row items-stretch h-full">
        {/* صورة البرجر - محسنة للعرض على جميع الشاشات */}
        <div className="w-full md:w-1/2 h-52 xs:h-64 sm:h-72 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden 
                      rounded-t-lg sm:rounded-t-xl md:rounded-none md:rounded-r-xl lg:rounded-r-2xl">
          <LazyImage
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
            alt="برغر شهي"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
            placeholderColor="#eee"
          />
        </div>

        {/* النص - محسن للعرض على جميع الأجهزة */}
        <div className="w-full md:w-1/2 py-6 xs:py-8 md:py-10 lg:py-12 xl:py-16 bg-[#a15623] 
                      flex flex-col items-center md:items-start justify-center text-center md:text-right 
                      px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16
                      rounded-b-lg sm:rounded-b-xl md:rounded-none md:rounded-l-xl lg:rounded-l-2xl">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                        font-extrabold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight">
            أشهى المأكولات<br className="md:block" /> البيتي<br className="sm:hidden" /> توصل لباب بيتك
          </h1>
          
          <p className="text-sm xs:text-base sm:text-lg md:text-xl 
                       text-white/90 mb-4 sm:mb-6 md:mb-8 lg:mb-10 
                       leading-relaxed font-tajawal max-w-md lg:max-w-lg">
            اطلب ألذ الأطباق الطازجة والخضراوات الفريش مع خدمة توصيل سريعة إلى منزلك
          </p>
          
          <button
            onClick={onOrderNowClick}
            className="bg-orange-400 hover:bg-orange-500 active:bg-orange-600
                     text-white py-2.5 xs:py-3 sm:py-3.5 md:py-4 
                     px-6 xs:px-8 sm:px-10 md:px-12
                     rounded-lg text-sm xs:text-base md:text-lg lg:text-xl
                     font-bold transition-all duration-300 
                     shadow-md hover:shadow-lg transform hover:scale-105 active:scale-100
                     focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label="اطلب الآن"
          >
            اطلب الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;