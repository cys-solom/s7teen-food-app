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
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* إعادة تصميم الشعار كما كان مع تحسينات بسيطة */}
          <Link to="/" className="flex flex-col items-start">
            <span className="text-2xl font-bold text-primary font-cairo">صحتين</span>
            <span className="text-xs font-semibold text-gray-500 mt-1">Fast & Tasty</span>
          </Link>

          <div className="hidden md:block flex-1 mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="ابحث عن الأطباق..."
                className="input pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {/* زر السلة */}
            <button
              className="btn btn-secondary flex items-center gap-2 relative"
              onClick={toggleCart}
            >
              <ShoppingCart size={20} />
              <span>السلة</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <button
            className="md:hidden text-gray-600 hover:text-primary"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="hidden md:block border-t border-gray-200">
          <ul className="flex items-center justify-center py-2 space-x-8 space-x-reverse">
            {categories.map((category) => (
              <li key={category.id}>
                <Link 
                  to={`/category/${category.id}`}
                  className="text-gray-600 hover:text-primary transition-colors py-2"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="ابحث عن الأطباق..."
                className="input pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
              >
                <Search size={20} />
              </button>
            </form>

            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2">القائمة</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link 
                      to={`/category/${category.id}`}
                      className="text-gray-600 hover:text-primary transition-colors block py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  handleCallUs();
                  setIsMenuOpen(false);
                }}
                className="btn btn-primary w-full"
              >
                <span>اطلب عبر واتساب</span>
              </button>

              <button
                className="btn btn-secondary w-full flex items-center justify-center gap-2"
                onClick={() => {
                  toggleCart();
                  setIsMenuOpen(false);
                }}
              >
                <ShoppingCart size={18} />
                <span>السلة</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;