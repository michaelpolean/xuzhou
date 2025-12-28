export enum Tab {
  ITINERARY = 'ITINERARY',
  FOOD = 'FOOD',
  ESSENTIALS = 'ESSENTIALS'
}

export enum TimeOfDay {
  MORNING = '上午',
  NOON = '中午',
  AFTERNOON = '下午',
  EVENING = '傍晚',
  NIGHT = '晚上'
}

export interface Activity {
  time: TimeOfDay;
  title: string;
  description: string;
  location?: string;
  highlight?: string; // For "Must Try" or special notes
  tags: string[];
  imagePlaceholder: string;
}

export interface DayPlan {
  dayTitle: string;
  subtitle: string;
  keywords: string[];
  activities: Activity[];
}

export interface FoodItem {
  name: string;
  description: string;
  recommendations: string[];
  imagePlaceholder: string;
  tag: 'Must Eat' | 'Snack' | 'Drink';
}

export interface PreparationItem {
  category: string;
  title: string;
  content: string;
  icon: string;
  urgent?: boolean;
}