import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { categories, whatsappNumber } from '../../data/products';

interface HeaderProps {
  toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const handleCallUs = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-3 xs:px-4">
        {/* تحسين ارتفاع الهيدر للشاشات الصغيرة */}
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* تعديل مظهر الشعار لتحسين العرض على الموبايل */}
          <Link to="/" className="flex items-center">
            <span className="text-lg xs:text-xl sm:text-2xl font-bold text-primary font-cairo">صحتين</span>
            <span className="text-[9px] xs:text-xs font-semibold text-gray-500 mt-0.5 mr-1">Fast & Tasty</span>
          </Link>

          {/* حقل البحث - مخفي على الموبايل */}
          <div className="hidden md:block flex-1 mx-4 lg:mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="ابحث عن الأطباق..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-primary text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
              >
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* أزرار - ظاهرة فقط على الشاشات الكبيرة */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button
              className="bg-secondary text-white py-2 px-4 rounded-full text-sm flex items-center gap-2 relative hover:bg-opacity-90 transition-all"
              onClick={toggleCart}
            >
              <ShoppingCart size={18} />
              <span>السلة</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* تحسين أزرار الموبايل وتباعدها */}
          <div className="md:hidden flex items-center gap-3">
            <button
              className="relative rounded-full p-1.5 text-primary bg-gray-50 border border-gray-200"
              onClick={toggleCart}
            >
              <ShoppingCart size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="text-gray-600 hover:text-primary p-1.5 bg-gray-50 rounded-full"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* القائمة الرئيسية - تظهر فقط في الشاشات الكبيرة */}
        <nav className="hidden md:block border-t border-gray-200">
          <ul className="flex flex-wrap items-center justify-center py-2 space-x-4 lg:space-x-8 space-x-reverse">
            {categories.map((category) => (
              <li key={category.id}>
                <Link 
                  to={`/category/${category.id}`}
                  className="text-gray-600 hover:text-primary transition-colors py-2 text-sm lg:text-base"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* تحسين القائمة المنسدلة على الشاشات الصغيرة */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-3 shadow-md animate-fadeIn">
          <div className="container px-3 mx-auto">
            {/* تحسين مظهر حقل البحث */}
            <form onSubmit={handleSearch} className="relative mb-3">
              <input
                type="text"
                placeholder="ابحث عن الأطباق..."
                className="w-full py-2 px-3 pr-9 rounded-lg border border-gray-200 focus:outline-none focus:border-primary text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
              >
                <Search size={16} />
              </button>
            </form>

            <div className="mb-3">
              <h3 className="font-bold text-gray-800 text-sm mb-2">القائمة</h3>
              <ul className="grid grid-cols-2 gap-y-1">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link 
                      to={`/category/${category.id}`}
                      className="text-gray-600 hover:text-primary transition-colors block py-1 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* تحسين زر واتساب */}
            <button
              onClick={() => {
                handleCallUs();
                setIsMenuOpen(false);
              }}
              className="bg-[#25D366] text-white py-1.5 px-4 rounded-lg text-sm w-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              <span>اطلب عبر واتساب</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;