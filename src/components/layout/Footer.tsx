import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, HelpCircle } from 'lucide-react';
import { categories, whatsappNumber } from '../../data/products';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white font-tajawal">
      <div className="container mx-auto px-3 py-5 md:px-4 md:py-10">
        {/* تحسين تنظيم الشبكة للموبايل */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8 text-center xs:text-right">
          {/* شعار المتجر - تحسين التباعدات للموبايل */}
          <div className="xs:col-span-2 md:col-span-1">
            <Link to="/" className="text-xl font-extrabold text-white flex items-center gap-2 mb-3 md:mb-5 justify-center xs:justify-start">
              <span className="bg-neutral-800 rounded-full p-1.5"><ShoppingCart size={20} className="text-orange-400" /></span>
              <span className="tracking-wide">صحتين ماركت</span>
            </Link>
            <p className="text-neutral-300 mb-3 md:mb-5 text-xs xs:text-sm leading-relaxed">
              مطعم ومطبخ يقدم أشهى المأكولات الطازجة والمشويات مع خدمة توصيل سريعة.
            </p>
            <div className="flex items-center gap-3 justify-center xs:justify-start">
              <a href="https://www.instagram.com/login" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 rounded-full p-1.5 hover:bg-orange-400/20 transition-colors">
                <Instagram size={16} className="text-white" />
              </a>
              <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 rounded-full p-1.5 hover:bg-orange-400/20 transition-colors">
                <Facebook size={16} className="text-white" />
              </a>
            </div>
          </div>
          {/* روابط سريعة - تقليل التباعدات للموبايل */}
          <div>
            <h3 className="text-sm md:text-base font-bold mb-2 md:mb-4 text-white/90">روابط سريعة</h3>
            <ul className="space-y-1.5 md:space-y-3">
              <li><Link to="/" className="hover:text-orange-400 transition-colors font-medium text-xs md:text-sm">الرئيسية</Link></li>
              <li><Link to="/cart" className="hover:text-orange-400 transition-colors font-medium text-xs md:text-sm">السلة</Link></li>
              <li><Link to="/#faq" className="hover:text-orange-400 transition-colors font-medium text-xs md:text-sm">أسئلة شائعة</Link></li>
            </ul>
          </div>
          {/* فئات المتجر - تقليل التباعدات للموبايل */}
          <div>
            <h3 className="text-sm md:text-base font-bold mb-2 md:mb-4 text-white/90">فئات المتجر</h3>
            <ul className="space-y-1.5 md:space-y-3">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link to={`/category/${category.id}`} className="hover:text-orange-400 transition-colors font-medium text-xs md:text-sm">{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* الأسئلة الشائعة - تحسين التنسيق للموبايل */}
          <div id="faq" className="xs:col-span-2 md:col-span-1">
            <h3 className="text-sm md:text-base font-bold mb-2 md:mb-4 text-white/90">الأسئلة الشائعة</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-1.5">
                <span className="bg-neutral-800 rounded-full p-0.5 mt-0.5"><HelpCircle size={14} className="text-orange-400" /></span>
                <span className="text-xs md:text-sm">ما هي مناطق التوصيل؟<br/><span className="text-neutral-400">(الشرقية و6 أكتوبر والمناطق المجاورة)</span></span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="bg-neutral-800 rounded-full p-0.5 mt-0.5"><HelpCircle size={14} className="text-orange-400" /></span>
                <span className="text-xs md:text-sm">كم يستغرق وقت التوصيل؟<br/><span className="text-neutral-400">(متوسط 40-60 دقيقة)</span></span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="bg-neutral-800 rounded-full p-0.5 mt-0.5"><HelpCircle size={14} className="text-orange-400" /></span>
                <span className="text-xs md:text-sm">كيف يمكنني الطلب؟<br/><span className="text-neutral-400">(عبر الواتساب)</span></span>
              </li>
            </ul>
          </div>
          {/* اتصل بنا - تحسين التنسيق للموبايل */}
          <div className="xs:col-span-2 md:col-span-1">
            <h3 className="text-sm md:text-base font-bold mb-2 md:mb-4 text-white/90">اتصل بنا</h3>
            <ul className="space-y-2 md:space-y-4">
              <li className="flex items-start gap-1.5 justify-center xs:justify-start">
                <span className="bg-neutral-800 rounded-full p-0.5 mt-0.5"><MapPin size={14} className="text-orange-400" /></span>
                <span className="text-neutral-300 text-xs md:text-sm">6 أكتوبر المحور المركزي - مول سيتي ستارز</span>
              </li>
              <li className="flex items-center gap-1.5 justify-center xs:justify-start">
                <span className="bg-neutral-800 rounded-full p-0.5"><Phone size={14} className="text-orange-400" /></span>
                <a href={`https://wa.me/${whatsappNumber}`} className="text-neutral-300 text-xs md:text-sm hover:text-orange-400" dir="ltr">+201030557250</a>
              </li>
            </ul>
          </div>
        </div>
        {/* تصغير هامش وحجم النص في حقوق النشر */}
        <div className="border-t border-neutral-700 mt-5 md:mt-8 pt-4 md:pt-6 text-center text-neutral-400 text-[10px] md:text-xs">
          <p>© 2025 صحتين ماركت. جميع الحقوق محفوظة ل علياء شوقي.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;