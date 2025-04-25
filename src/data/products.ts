import { Product, Category } from '../types/product';

export const categories: Category[] = [
  {
    id: 'fresh-meat',
    name: ' مصنعات الدواجن',
    imageUrl: 'https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'fast-food',
    name: ' مصنعات اللحوم',
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'grilled',
    name: 'الخضراوات',
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
];

export const products: Product[] = [
  // مصنعات الدواجن
  {
    id: 1,
    name: 'لحم بقري طازج',
    description: 'لحم بقري طازج عالي الجودة من أفضل المصادر المحلية',
    price: 180,
    imageUrl: 'https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'fresh-meat',
    rating: 4.8,
    inStock: true,
    features: ['طازج يومياً', 'مصدر موثوق', 'جودة ممتازة'],
  },
  {
    id: 4,
    name: 'صدور دجاج مخلية',
    description: 'صدور دجاج مخلية طازجة مثالية للشوي أو القلي',
    price: 95,
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fresh-meat',
    rating: 4.7,
    inStock: true,
    features: ['خالية من العظم', 'طازجة', 'سهلة التحضير'],
  },
  {
    id: 5,
    name: 'شيش طاووق',
    description: 'قطع دجاج متبلة ومجهزة للشوي على الفحم',
    price: 110,
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fresh-meat',
    rating: 4.9,
    inStock: true,
    features: ['متبل جاهز', 'مذاق رائع', 'سهل التحضير'],
  },
  {
    id: 6,
    name: 'دبابيس دجاج',
    description: 'دبابيس دجاج طازجة مناسبة للقلي أو الشوي',
    price: 80,
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fresh-meat',
    rating: 4.5,
    inStock: true,
    features: ['طازجة', 'مناسبة للأطفال', 'غنية بالبروتين'],
  },
  {
    id: 7,
    name: 'أجنحة دجاج متبلة',
    description: 'أجنحة دجاج متبلة بخلطة سرية للشواء أو القلي',
    price: 70,
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fresh-meat',
    rating: 4.6,
    inStock: true,
    features: ['متبلة', 'مقرمشة', 'مذاق رائع'],
  },
  {
    id: 8,
    name: 'كفتة دجاج',
    description: 'كفتة دجاج مفرومة متبلة وجاهزة للطهي',
    price: 90,
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fresh-meat',
    rating: 4.4,
    inStock: true,
    features: ['مفرومة', 'متبلة', 'سهلة التحضير'],
  },
  {
    id: 9,
    name: 'سجق دجاج',
    description: 'سجق دجاج شرقي متبل وجاهز للطهي',
    price: 85,
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fresh-meat',
    rating: 4.3,
    inStock: true,
    features: ['شرقي', 'متبل', 'سهل التحضير'],
  },
  {
    id: 10,
    name: 'دجاجة كاملة',
    description: 'دجاجة كاملة طازجة وزن 1.2 كجم',
    price: 120,
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fresh-meat',
    rating: 4.7,
    inStock: true,
    features: ['وزن مثالي', 'طازجة', 'مناسبة للعائلات'],
  },
  {
    id: 11,
    name: 'شاورما دجاج',
    description: 'شاورما دجاج متبلة وجاهزة للطهي',
    price: 100,
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fresh-meat',
    rating: 4.8,
    inStock: true,
    features: ['متبلة', 'سهلة التحضير', 'مذاق شرقي'],
  },
  {
    id: 12,
    name: 'كبدة دجاج',
    description: 'كبدة دجاج طازجة غنية بالحديد والبروتين',
    price: 60,
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fresh-meat',
    rating: 4.2,
    inStock: true,
    features: ['غنية بالحديد', 'طازجة', 'مغذية'],
  },
  // مصنعات اللحوم
  {
    id: 2,
    name: 'برجر لحم',
    description: 'برجر لحم طازج محضر يومياً مع خضروات طازجة',
    price: 65,
    discountPrice: 55.25,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'fast-food',
    rating: 4.6,
    inStock: true,
    features: ['لحم طازج', 'خضروات طازجة', 'صلصة خاصة'],
  },
  {
    id: 13,
    name: 'سجق بلدي',
    description: 'سجق بلدي متبل بتوابل شرقية',
    price: 75,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fast-food',
    rating: 4.5,
    inStock: true,
    features: ['شرقي', 'متبل', 'سهل التحضير'],
  },
  {
    id: 14,
    name: 'كفتة لحم',
    description: 'كفتة لحم بقري مفرومة متبلة وجاهزة للطهي',
    price: 90,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fast-food',
    rating: 4.7,
    inStock: true,
    features: ['مفرومة', 'متبلة', 'سهلة التحضير'],
  },
  {
    id: 15,
    name: 'سوسيس لحم',
    description: 'سوسيس لحم بقري مدخن',
    price: 80,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fast-food',
    rating: 4.3,
    inStock: true,
    features: ['مدخن', 'سهل التحضير', 'مذاق مميز'],
  },
  {
    id: 16,
    name: 'لانشون بقري',
    description: 'لانشون بقري شرائح رفيعة',
    price: 60,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fast-food',
    rating: 4.2,
    inStock: true,
    features: ['شرائح رفيعة', 'مذاق لذيذ', 'سهل الاستخدام'],
  },
  {
    id: 17,
    name: 'سلامي مدخن',
    description: 'سلامي بقري مدخن شرائح',
    price: 85,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fast-food',
    rating: 4.4,
    inStock: true,
    features: ['مدخن', 'شرائح', 'مذاق مميز'],
  },
  {
    id: 18,
    name: 'بيف برجر',
    description: 'بيف برجر بقري عالي الجودة',
    price: 70,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fast-food',
    rating: 4.6,
    inStock: true,
    features: ['لحم بقري', 'مذاق رائع', 'سهل التحضير'],
  },
  {
    id: 19,
    name: 'هوت دوج',
    description: 'هوت دوج لحم بقري مدخن',
    price: 65,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fast-food',
    rating: 4.3,
    inStock: true,
    features: ['مدخن', 'سهل التحضير', 'مناسب للأطفال'],
  },
  {
    id: 20,
    name: 'روست بيف',
    description: 'روست بيف بقري شرائح رفيعة',
    price: 95,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fast-food',
    rating: 4.5,
    inStock: true,
    features: ['شرائح', 'مذاق لذيذ', 'سهل الاستخدام'],
  },
  {
    id: 21,
    name: 'ببروني',
    description: 'ببروني بقري شرائح',
    price: 90,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fast-food',
    rating: 4.4,
    inStock: true,
    features: ['شرائح', 'مذاق حار', 'سهل الاستخدام'],
  },
  // الخضراوات
  {
    id: 3,
    name: 'كباب مشوي',
    description: 'كباب لحم مشوي على الفحم مع بهارات خاصة',
    price: 120,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'grilled',
    rating: 4.9,
    inStock: true,
    features: ['مشوي على الفحم', 'بهارات خاصة', 'لحم طازج'],
  },
  {
    id: 22,
    name: 'خضار مشكل طازج',
    description: 'تشكيلة خضار طازجة يومياً (بطاطس، جزر، كوسة، فاصوليا)',
    price: 40,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'grilled',
    rating: 4.7,
    inStock: true,
    features: ['طازج', 'مغذي', 'متنوع'],
  },
  {
    id: 23,
    name: 'باذنجان مشوي',
    description: 'باذنجان مشوي على الفحم مع زيت زيتون',
    price: 35,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'grilled',
    rating: 4.5,
    inStock: true,
    features: ['مشوي', 'صحي', 'مذاق رائع'],
  },
  {
    id: 24,
    name: 'بطاطس مشوية',
    description: 'بطاطس مشوية مع أعشاب وزيت زيتون',
    price: 30,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'grilled',
    rating: 4.6,
    inStock: true,
    features: ['مشوية', 'صحية', 'مذاق رائع'],
  },
  {
    id: 25,
    name: 'كوسة مشوية',
    description: 'كوسة مشوية مع بهارات خفيفة',
    price: 32,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'grilled',
    rating: 4.4,
    inStock: true,
    features: ['مشوية', 'صحية', 'مذاق خفيف'],
  },
  {
    id: 26,
    name: 'فلفل ألوان مشوي',
    description: 'فلفل ألوان مشوي مع زيت زيتون وخل بلسميك',
    price: 38,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'grilled',
    rating: 4.5,
    inStock: true,
    features: ['مشوي', 'ملون', 'مذاق مميز'],
  },
  {
    id: 27,
    name: 'ذرة مشوية',
    description: 'ذرة صفراء مشوية على الفحم',
    price: 28,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'grilled',
    rating: 4.3,
    inStock: true,
    features: ['مشوية', 'صحية', 'مذاق حلو'],
  },
  {
    id: 28,
    name: 'طماطم مشوية',
    description: 'طماطم مشوية مع أعشاب وزيت زيتون',
    price: 26,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'grilled',
    rating: 4.2,
    inStock: true,
    features: ['مشوية', 'صحية', 'مذاق رائع'],
  },
  {
    id: 29,
    name: 'جزر مشوي',
    description: 'جزر مشوي مع عسل وبهارات',
    price: 29,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'grilled',
    rating: 4.1,
    inStock: true,
    features: ['مشوي', 'صحي', 'مذاق حلو'],
  },
  {
    id: 30,
    name: 'فاصوليا خضراء مشوية',
    description: 'فاصوليا خضراء مشوية مع زيت زيتون',
    price: 33,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'grilled',
    rating: 4.3,
    inStock: true,
    features: ['مشوية', 'صحية', 'مذاق خفيف'],
  },
  {
    id: 31,
    name: 'عرض عائلي: 2 دجاجة + بطاطس + مشروب',
    description: 'وجبة عائلية مميزة تشمل 2 دجاجة مشوية، بطاطس مقلية، ومشروب عائلي كبير بسعر خاص.',
    price: 320,
    discountPrice: 260,
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fresh-meat',
    rating: 4.9,
    inStock: true,
    features: ['وجبة عائلية', 'سعر خاص', 'دجاج مشوي', 'بطاطس', 'مشروب'],
  },
  {
    id: 32,
    name: 'عرض توفير: 5 برجر + 5 مشروب',
    description: 'استمتع مع أصدقائك بـ 5 برجر لحم مع 5 مشروبات غازية بسعر اقتصادي.',
    price: 350,
    discountPrice: 275,
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fast-food',
    rating: 4.8,
    inStock: true,
    features: ['برجر لحم', 'مشروبات', 'سعر اقتصادي', 'وجبة جماعية'],
  },
  {
    id: 33,
    name: 'عرض مشاوي فاخر: كباب + كفتة + شيش طاووق + مشروب',
    description: 'تشكيلة مشاوي فاخرة (كباب، كفتة، شيش طاووق) مع مشروب عائلي بسعر خاص.',
    price: 420,
    discountPrice: 340,
    imageUrl: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'grilled',
    rating: 4.9,
    inStock: true,
    features: ['كباب', 'كفتة', 'شيش طاووق', 'مشروب', 'سعر خاص'],
  },
];

// Update WhatsApp number with country code
export const whatsappNumber = '+201030557250';

export function generateWhatsAppMessage(items: Array<{ name: string; quantity: number }>) {
  const itemsList = items.map(item => `${item.quantity}x ${item.name}`).join('\n');
  return `مرحباً، أود طلب:\n${itemsList}`;
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category === categoryId);
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.discountPrice !== undefined);
}

// Improved search functionality with better indexing
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim();
  
  // If search term is empty, return all products
  if (!searchTerm) return products;
  
  // Search in multiple fields with weighted relevance
  return products
    .map(product => {
      let score = 0;
      
      // Exact name match gets highest score
      if (product.name.toLowerCase() === searchTerm) score += 10;
      
      // Name contains search term
      if (product.name.toLowerCase().includes(searchTerm)) score += 5;
      
      // Description contains search term
      if (product.description.toLowerCase().includes(searchTerm)) score += 3;
      
      // Category match
      if (product.category.toLowerCase().includes(searchTerm)) score += 2;
      
      // Features match
      if (product.features?.some(feature => 
        feature.toLowerCase().includes(searchTerm)
      )) score += 1;
      
      return { product, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);
}