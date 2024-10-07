import axios from 'axios';

export const fetchArticles = async (query) => {
  const NEWS_API_KEY = '394e91bf55ac4841aa557ce2698a8c64';
  const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${NEWS_API_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news articles: ', error);
    return [];
  }
};
