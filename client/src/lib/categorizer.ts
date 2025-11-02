import type { Category } from '@shared/schema';

const categoryKeywords: Record<Category, string[]> = {
  Income: ['salary', 'bonus', 'income', 'wage', 'payment', 'paycheck', 'earnings', 'revenue'],
  Food: ['food', 'meal', 'restaurant', 'groceries', 'lunch', 'dinner', 'breakfast', 'cafe', 'coffee', 'pizza', 'burger'],
  Utilities: ['rent', 'bills', 'electricity', 'water', 'gas', 'internet', 'phone', 'utility', 'mortgage'],
  Shopping: ['shopping', 'clothes', 'store', 'amazon', 'purchase', 'buy', 'retail', 'mall'],
  Transport: ['transport', 'uber', 'taxi', 'gas', 'fuel', 'car', 'bus', 'train', 'metro', 'parking'],
  Entertainment: ['entertainment', 'movie', 'cinema', 'game', 'netflix', 'spotify', 'concert', 'ticket'],
  Healthcare: ['health', 'hospital', 'doctor', 'medicine', 'pharmacy', 'medical', 'clinic', 'insurance'],
  Others: [],
};

export function categorizeTransaction(description: string): Category {
  const lowerDesc = description.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (category === 'Others') continue;
    
    if (keywords.some(keyword => lowerDesc.includes(keyword))) {
      return category as Category;
    }
  }
  
  return 'Others';
}
