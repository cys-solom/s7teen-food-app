export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  category: string;
  rating: number;
  inStock: boolean;
  features?: string[];
  colors?: string[];
  sizes?: string[];
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}