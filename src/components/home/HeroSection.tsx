import * as React from 'react';
import { ArrowLeft } from 'lucide-react';
import LazyImage from '../ui/LazyImage';

interface HeroSectionProps {
  onOrderNowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOrderNowClick }) => {
  return (
    <div className="relative overflow-hidden mb-10 bg-[#f9f6f1] rounded-s-2xl rounded-e-2xl">
      <div className="flex flex-col md:flex-row items-stretch min-h-[400px] md:min-h-[520px] h-[520px] rounded-s-2xl rounded-e-2xl overflow-hidden">
        {/* صورة البرجر - يسار */}
        <div className="w-full md:w-1/2 h-full overflow-hidden rounded-s-2xl md:rounded-e-none">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80"
            alt="برغر شهي"
            className="w-full h-full object-cover"
            style={{ background: '#eee' }}
          />
        </div>
        {/* النص - يمين */}
        <div className="w-full md:w-1/2 h-full bg-[#a15623] flex flex-col items-center justify-center text-center md:text-right px-8 rounded-e-2xl md:rounded-s-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            أشهى المأكولات<br />البيتي توصل لباب بيتك
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-tajawal">
            اطلب ألذ الأطباق الطازجة والخضراوات الفريش مع خدمة توصيل سريعة
          </p>
          <button
            onClick={onOrderNowClick}
            className="bg-orange-400 hover:bg-orange-500 text-white py-4 px-10 rounded-lg text-lg font-bold transition-all duration-300 shadow-md mt-2"
          >
            اطلب الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;