import * as React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import LazyImage from '../ui/LazyImage';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAddingToCart(true);
    addToCart(product);
    
    // عرض تأثير بصري عند إضافة المنتج للسلة
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 500);
  };

  // Calculate the discount percentage correctly
  const calculateDiscountPercentage = () => {
    if (product.discountPrice && product.price) {
      // Ensure discount is always a positive number between 0 and 100
      if (product.discountPrice >= product.price) {
        return 0; // No discount or incorrect price data
      }
      const discount = ((product.price - product.discountPrice) / product.price) * 100;
      // Make sure we don't exceed 100%
      return Math.min(Math.round(discount), 99);
    }
    return 0;
  };
  
  // Get the discount percentage
  const discountPercentage = calculateDiscountPercentage();

  return (
    <div className="card group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative">
          <LazyImage 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full rounded-t-lg"
            placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='300' height='300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
          />
          
          {/* Discount Badge - Only show if discount percentage is greater than 0 */}
          {product.discountPrice && product.discountPrice < product.price && discountPercentage > 0 && (
            <span className="absolute top-2 right-2 bg-secondary text-white text-xs px-2 py-1 rounded" dir="rtl">
              خصم {discountPercentage}%
            </span>
          )}
          
          {/* Action Buttons */}
          <div className="absolute bottom-2 right-2 left-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={toggleWishlist}
              className="bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
            >
              <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} className={isWishlisted ? 'text-error' : ''} />
            </button>
          </div>
        </div>
        
        <div className="p-4 pb-16"> {/* Added extra padding at bottom for the Add to Cart button */}
          <h3 className="font-medium text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
          
          <div className="flex items-center mb-2">
            <Star size={16} className="text-secondary fill-current" />
            <span className="text-sm text-gray-600 mr-1">{product.rating}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              {product.discountPrice ? (
                <>
                  <span className="font-bold text-primary">{Math.round(product.discountPrice)} جنيه</span>
                  <span className="text-sm text-gray-500 line-through mt-1">{product.price} جنيه</span>
                </>
              ) : (
                <span className="font-bold text-primary">{product.price} جنيه</span>
              )}
            </div>
            
            {!product.inStock && (
              <span className="text-xs text-error">نفذت الكمية</span>
            )}
          </div>
        </div>
      </Link>
      
      {/* Add to Cart Button - Fixed at bottom */}
      <button
        onClick={handleAddToCart}
        disabled={!product.inStock || isAddingToCart}
        className={`absolute bottom-4 right-4 left-4 py-2 rounded-md flex items-center justify-center gap-2 text-sm transition-all ${
          isAddingToCart 
            ? 'bg-green-500 text-white' 
            : !product.inStock 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-primary text-white hover:bg-white hover:text-primary hover:border border-primary'
        }`}
      >
        <ShoppingCart size={16} />
        <span>{isAddingToCart ? 'تمت الإضافة!' : !product.inStock ? 'نفذت الكمية' : 'إضافة للسلة'}</span>
      </button>
    </div>
  );
};

export default ProductCard;