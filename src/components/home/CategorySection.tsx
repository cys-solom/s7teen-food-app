import * as React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';
import { ArrowLeft } from 'lucide-react';
import LazyImage from '../ui/LazyImage';

const CategorySection: React.FC = () => {
  return (
    <section id="categories" className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto">
        <h2 className="section-title">تسوق حسب الفئة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card relative overflow-hidden rounded-lg group"
            >
              <div className="h-64">
                <LazyImage 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="overlay absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-6">
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-flex items-center text-white/90 text-sm group-hover:text-white transition-colors">
                    <span>تسوق الآن</span>
                    <ArrowLeft size={16} className="mr-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;