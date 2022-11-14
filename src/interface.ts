export interface NewsItem {
  author: string;
  content: string;
  id: string;
  imageUrl: string;
  readMoreUrl: string | null;
  time: string;
  title: string;
  url: string;
}

export interface NewsResponse {
  category: NewsCategory;
  data: NewsItem[];
  success: boolean;
}

export type NewsCategory =
  | 'all'
  | 'national'
  | 'business'
  | 'sports'
  | 'world'
  | 'politics'
  | 'technology'
  | 'startup'
  | 'entertainment'
  | 'miscellaneous'
  | 'hatke'
  | 'science'
  | 'automobile';
