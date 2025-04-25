import { useEffect } from 'react';

/**
 * مكون لتحسين أداء الموقع من خلال تعيين أولويات التحميل
 */
export const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // تحسين Cumulative Layout Shift (CLS) بضبط أبعاد العناصر
    document.documentElement.style.setProperty('scroll-behavior', 'auto');
    
    // تأجيل تحميل الموارد غير المهمة
    window.addEventListener('load', () => {
      // مهلة قصيرة للسماح للمتصفح بالتركيز على العناصر الأساسية أولاً
      setTimeout(() => {
        const nonCriticalCSS = document.querySelectorAll('link[data-non-critical="true"]');
        nonCriticalCSS.forEach(link => {
          (link as HTMLLinkElement).media = 'all';
        });
      }, 500);
    });

    // تحديد نصوص التتبع بالخاصية async
    const scriptOptimizer = () => {
      const scripts = document.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i];
        if (script.dataset.tracking === 'true' && !script.async) {
          script.async = true;
        }
      }
    };
    
    scriptOptimizer();
    
    return () => {
      // إعادة ضبط سلوك التمرير عند إزالة المكون
      document.documentElement.style.removeProperty('scroll-behavior');
    };
  }, []);
  
  return null;
};

/**
 * تحسين Content Layout Shift (CLS) من خلال ضبط حجم العناصر مسبقًا
 */
export const usePrefetchResources = (resources: string[] = []) => {
  useEffect(() => {
    // استباق تحميل الموارد المستخدمة بشكل متكرر
    const prefetchLinks = resources.map(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      link.as = url.endsWith('.js') ? 'script' : 
                url.endsWith('.css') ? 'style' : 
                url.match(/\.(jpe?g|png|gif|webp)/i) ? 'image' : 
                'fetch';
      return link;
    });
    
    // إضافة الروابط للصفحة
    prefetchLinks.forEach(link => document.head.appendChild(link));
    
    // تنظيف عند إزالة المكون
    return () => {
      prefetchLinks.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [resources]);
};

/**
 * إضافة دعم preconnect للنطاقات الخارجية المستخدمة بكثرة
 */
export const usePreconnect = (domains: string[] = []) => {
  useEffect(() => {
    // إنشاء روابط preconnect لتسريع الاتصال بالنطاقات الخارجية
    const preconnectLinks = domains.map(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      return link;
    });
    
    // إضافة الروابط للصفحة
    preconnectLinks.forEach(link => document.head.appendChild(link));
    
    // تنظيف عند إزالة المكون
    return () => {
      preconnectLinks.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [domains]);
};

/**
 * تجزئة العمليات الثقيلة إلى عمليات أصغر باستخدام requestIdleCallback
 * @param callback الدالة المراد تنفيذها
 * @param data البيانات التي يتم تمريرها للدالة
 * @param chunkSize حجم القطعة المراد معالجتها في كل دورة
 */
export const processInChunks = <T,>(
  callback: (item: T) => void,
  data: T[],
  chunkSize: number = 5
): void => {
  let index = 0;
  
  const processChunk = (deadline: IdleDeadline) => {
    while (index < data.length && deadline.timeRemaining() > 0) {
      callback(data[index]);
      index++;
      
      if (index % chunkSize === 0) {
        break;
      }
    }
    
    if (index < data.length) {
      requestIdleCallback(processChunk);
    }
  };
  
  // استخدم setTimeout كبديل في حال عدم دعم المتصفح
  if ('requestIdleCallback' in window) {
    requestIdleCallback(processChunk);
  } else {
    setTimeout(() => {
      while (index < data.length) {
        callback(data[index]);
        index++;
        
        if (index % chunkSize === 0) {
          setTimeout(() => processInChunks(callback, data.slice(index), chunkSize), 0);
          break;
        }
      }
    }, 0);
  }
};