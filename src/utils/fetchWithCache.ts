import axios from 'axios';

export async function fetchWithCache(url: string, options?: any, cacheTime = 60000, retries = 2) {
  const cacheKey = `api-cache-${url}`;
  const cached = localStorage.getItem(cacheKey);
  const now = Date.now();
  if (cached) {
    const { timestamp, data } = JSON.parse(cached);
    if (now - timestamp < cacheTime) {
      return data;
    }
  }
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await axios.get(url, options);
      localStorage.setItem(cacheKey, JSON.stringify({ timestamp: now, data: response.data }));
      return response.data;
    } catch (error) {
      if (attempt === retries) throw error;
    }
  }
}
