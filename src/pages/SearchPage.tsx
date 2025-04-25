import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SearchX } from 'lucide-react';
import { searchProducts } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { Product } from '../types/product';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    // عند تغيير كلمة البحث، قم بإجراء البحث
    if (query) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">نتائج البحث: "{query}"</h1>

      {results.length > 0 ? (
        <div>
          <p className="text-gray-600 mb-6">تم العثور على {results.length} منتج</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <SearchX size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-medium mb-2">لم يتم العثور على نتائج</h2>
          <p className="text-gray-500 mb-6">
            لم نتمكن من العثور على منتجات تطابق "{query}"
          </p>
          <Link to="/" className="btn btn-primary">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;