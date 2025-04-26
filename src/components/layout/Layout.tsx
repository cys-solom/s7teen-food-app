import * as React from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';
import { PerformanceOptimizer, usePreconnect } from '../../utils/PerformanceOptimizer';

const Layout: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // تطبيق تحسينات الأداء للمواقع الخارجية
  usePreconnect([
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://images.pexels.com'
  ]);

  // مراقبة مؤشرات الأداء (Core Web Vitals)
  useEffect(() => {
    const reportWebVitals = async () => {
      if ('performance' in window && 'getEntriesByType' in window.performance) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            try {
              const navigationEntries = performance.getEntriesByType('navigation');
              const paintEntries = performance.getEntriesByType('paint');
              
              // الحصول على معلومات الأداء الرئيسية
              if (navigationEntries.length > 0 && navigationEntries[0] instanceof PerformanceNavigationTiming) {
                const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
                console.info('Performance Metrics:', {
                  // قياس استجابة الموقع (أول تفاعل)
                  ttfb: Math.round(navEntry.responseStart - navEntry.requestStart),
                  // وقت التحميل الكامل
                  loadComplete: Math.round(navEntry.loadEventEnd - navEntry.startTime)
                });
              }
              
              // حساب LCP (Largest Contentful Paint)
              const firstPaint = paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0;
              const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
              
              console.info('Paint Metrics:', {
                firstPaint: Math.round(firstPaint),
                firstContentfulPaint: Math.round(firstContentfulPaint)
              });
            } catch (error) {
              console.error('Error collecting performance metrics:', error);
            }
          }, 1000);
        });
      }
    };
    
    reportWebVitals();
  }, []);
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* إضافة مكون محسن الأداء */}
      <PerformanceOptimizer />
      
      <Header toggleCart={toggleCart} />
      <main className="flex-grow container mx-auto px-3 py-3 sm:px-4 sm:py-6 md:py-8 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Layout;