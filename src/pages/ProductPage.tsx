import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star, ArrowRight } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';
import LazyImage from '../components/ui/LazyImage';
import { usePrefetchResources } from '../utils/PerformanceOptimizer';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(getProductById(Number(id)));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // استباق تحميل الصور المرتبطة بالمنتجات ذات الصلة
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  usePrefetchResources(
    relatedProducts.map(p => p.imageUrl)
  );
  
  // If product not found, redirect to home
  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);
  
  // Update product when id changes
  useEffect(() => {
    setProduct(getProductById(Number(id)));
    setQuantity(1);
  }, [id]);
  
  if (!product) return null;
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
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
    <div>
      <div className="mb-8 flex items-center text-sm text-gray-500">
        <button onClick={() => navigate('/')} className="hover:text-primary">
          الرئيسية
        </button>
        <span className="mx-2">/</span>
        <button onClick={() => navigate(`/category/${product.category}`)} className="hover:text-primary">
          {product.category === 'electronics' ? 'إلكترونيات' : 
           product.category === 'clothing' ? 'ملابس' : 
           product.category === 'home' ? 'المنزل' : 'الجمال'}
        </button>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden">
          <LazyImage 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-auto"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? "text-secondary fill-current" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 mr-2">({product.rating})</span>
          </div>
          
          <div className="mb-6">
            {product.discountPrice ? (
              <>
                <span className="text-2xl font-bold text-primary">{Math.round(product.discountPrice)} جنيه</span>
                <div className="flex items-center mt-1">
                  <span className="text-lg text-gray-500 line-through">{product.price} جنيه</span>
                  {discountPercentage > 0 && (
                    <span className="mr-3 px-2 py-1 bg-error/10 text-error text-xs font-medium rounded" dir="rtl">
                      خصم {discountPercentage}%
                    </span>
                  )}
                </div>
              </>
            ) : (
              <span className="text-2xl font-bold text-primary">{product.price} جنيه</span>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">
            {product.description}
          </p>
          
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">اللون:</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 border rounded-md ${index === 0 ? 'border-primary bg-primary/10' : 'border-gray-300'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">المقاس:</h3>
              <div className="flex gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 flex items-center justify-center border rounded-md ${index === 0 ? 'border-primary bg-primary/10' : 'border-gray-300'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex border border-gray-300 rounded-md">
              <button
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="w-12 h-10 flex items-center justify-center border-x border-gray-300">
                {quantity}
              </span>
              <button
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            
            <button
              className="btn btn-primary flex items-center gap-2 flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart size={18} />
              <span>{product.inStock ? 'أضف إلى السلة' : 'غير متوفر'}</span>
            </button>
            
            <button
              className={`w-12 h-12 flex items-center justify-center border rounded-md transition-colors ${isWishlisted ? 'border-error bg-error/10' : 'border-gray-300 hover:bg-gray-100'}`}
              onClick={toggleWishlist}
            >
              <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} className={isWishlisted ? 'text-error' : ''} />
            </button>
          </div>
          
          {product.features && product.features.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-medium mb-2">المميزات:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {/* Tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex gap-8">
            <button
              className={`py-3 relative ${activeTab === 'description' ? 'text-primary font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('description')}
            >
              الوصف
              {activeTab === 'description' && (
                <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-primary"></span>
              )}
            </button>
            <button
              className={`py-3 relative ${activeTab === 'specifications' ? 'text-primary font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('specifications')}
            >
              المواصفات
              {activeTab === 'specifications' && (
                <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-primary"></span>
              )}
            </button>
            <button
              className={`py-3 relative ${activeTab === 'reviews' ? 'text-primary font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('reviews')}
            >
              التقييمات
              {activeTab === 'reviews' && (
                <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-primary"></span>
              )}
            </button>
          </nav>
        </div>
        
        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <p className="text-gray-600">
              {product.description}
            </p>
            <p className="text-gray-600 mt-4">
              نحن في زوكا ماركت نقدم فقط المنتجات عالية الجودة للعملاء. هذا المنتج مصنوع من أفضل المواد ويأتي مع ضمان لمدة عام.
            </p>
          </div>
        )}
        
        {activeTab === 'specifications' && (
          <div className="bg-white rounded-lg p-6">
            <h3 className="font-medium mb-4">مواصفات المنتج</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-gray-500">الفئة:</span>
                <span className="font-medium mr-2">
                  {product.category === 'electronics' ? 'إلكترونيات' : 
                   product.category === 'clothing' ? 'ملابس' : 
                   product.category === 'home' ? 'المنزل' : 'الجمال'}
                </span>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-gray-500">التوفر:</span>
                <span className={`font-medium mr-2 ${product.inStock ? 'text-success' : 'text-error'}`}>
                  {product.inStock ? 'متوفر في المخزون' : 'غير متوفر'}
                </span>
              </div>
              
              {product.features?.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500">ميزة {index + 1}:</span>
                  <span className="font-medium mr-2">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">تقييمات العملاء</h3>
              <div className="flex items-center">
                <span className="text-lg font-bold ml-2">{product.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? "text-secondary fill-current" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-500 text-center py-8">لا توجد تقييمات بعد. كن أول من يقيم هذا المنتج!</p>
              
              <button className="btn btn-primary w-full">
                أضف تقييمك
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">منتجات مشابهة</h2>
            <button
              className="text-primary flex items-center gap-1 hover:underline"
              onClick={() => navigate(`/category/${product.category}`)}
            >
              عرض الكل
              <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;