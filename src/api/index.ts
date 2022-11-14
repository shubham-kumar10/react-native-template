import { NewsCategory } from '../interface';

const BASE_URL = 'https://inshorts.deta.dev/news';
//inshorts.deta.dev/news?category=all
export async function getNews(category: NewsCategory) {
  return fetch(`${BASE_URL}?category=${category}`);
}
