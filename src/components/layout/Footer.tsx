import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, HelpCircle } from 'lucide-react';
import { categories, whatsappNumber } from '../../data/products';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white font-tajawal">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-right">
          {/* شعار المتجر */}
          <div>
            <Link to="/" className="text-2xl font-extrabold text-white flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="bg-neutral-800 rounded-full p-2"><ShoppingCart size={28} className="text-orange-400" /></span>
              <span className="tracking-wide">صحتين ماركت</span>
            </Link>
            <p className="text-neutral-300 mb-6 text-base leading-relaxed font-inter">
              مطعم ومطبخ يقدم أشهى المأكولات الطازجة والمشويات مع خدمة توصيل سريعة.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/login" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 rounded-full p-2 hover:bg-orange-400/20 transition-colors">
                <Instagram size={22} className="text-white" />
              </a>
              <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 rounded-full p-2 hover:bg-orange-400/20 transition-colors">
                <Facebook size={22} className="text-white" />
              </a>
            </div>
          </div>
          {/* روابط سريعة */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white/90 font-tajawal">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-orange-400 transition-colors font-medium font-tajawal">الرئيسية</Link></li>
              <li><Link to="/cart" className="hover:text-orange-400 transition-colors font-medium font-tajawal">السلة</Link></li>
              <li><Link to="/#faq" className="hover:text-orange-400 transition-colors font-medium font-tajawal">أسئلة شائعة</Link></li>
            </ul>
          </div>
          {/* فئات المتجر */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white/90 font-tajawal">فئات المتجر</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/category/${category.id}`} className="hover:text-orange-400 transition-colors font-medium font-tajawal">{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* الأسئلة الشائعة */}
          <div id="faq">
            <h3 className="text-lg font-bold mb-5 text-white/90 font-tajawal">الأسئلة الشائعة</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><span className="bg-neutral-800 rounded-full p-1 mt-1"><HelpCircle size={18} className="text-orange-400" /></span><span>ما هي مناطق التوصيل؟<br/>(الشرقية و6 أكتوبر والمناطق المجاورة)</span></li>
              <li className="flex items-start gap-3"><span className="bg-neutral-800 rounded-full p-1 mt-1"><HelpCircle size={18} className="text-orange-400" /></span><span>كم يستغرق وقت التوصيل؟<br/>(متوسط 40-60 دقيقة)</span></li>
              <li className="flex items-start gap-3"><span className="bg-neutral-800 rounded-full p-1 mt-1"><HelpCircle size={18} className="text-orange-400" /></span><span>كيف يمكنني الطلب؟<br/>(عبر الواتساب)</span></li>
            </ul>
          </div>
          {/* اتصل بنا */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white/90 font-tajawal">اتصل بنا</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="bg-neutral-800 rounded-full p-1"><MapPin size={20} className="text-orange-400" /></span>
                <span className="text-neutral-300 font-tajawal">6 أكتوبر المحور المركزي - مول سيتي ستارز</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="bg-neutral-800 rounded-full p-1"><Phone size={20} className="text-orange-400" /></span>
                <span className="text-neutral-300 font-tajawal" dir="ltr">+201030557250</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center text-neutral-400 text-sm font-tajawal">
          <p>© 2025 صحتين ماركت. جميع الحقوق محفوظة ل علياء شوقي.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;