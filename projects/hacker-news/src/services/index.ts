import { Article, TopStories } from '../data';

const API = 'https://hacker-news.firebaseio.com/v0';

export const getTopStories = async (
  page: number,
  limit: number
): Promise<TopStories> => {
  const res = await fetch(`${API}/topstories.json`);
  const data = await res.json();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const ids = data?.slice(startIndex, endIndex);
  return ids;
};

export const getItemInfo = async (id: number): Promise<Article> => {
  const res = await fetch(`${API}/item/${id}.json`);
  const data = await res.json();
  return data;
};
