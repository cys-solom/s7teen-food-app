import React, { useRef } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/products/FeaturedProducts';
import DeliverySection from '../components/home/DeliverySection';
import PromoBanner from '../components/home/PromoBanner';

const HomePage: React.FC = () => {
  // إنشاء مرجع للقسم المستهدف
  const offersSectionRef = useRef<HTMLDivElement>(null);

  // دالة للتمرير إلى قسم العروض
  const scrollToOffers = () => {
    if (offersSectionRef.current) {
      const yOffset = -80;
      const y = offersSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <HeroSection onOrderNowClick={scrollToOffers} />
      <CategorySection />
      <div ref={offersSectionRef}>
        {/* Pass scrollToOffers to PromoBanner */}
        <PromoBanner onOrderNowClick={scrollToOffers} />
      </div>
      <FeaturedProducts />
      <DeliverySection />
    </div>
  );
};

export default HomePage;