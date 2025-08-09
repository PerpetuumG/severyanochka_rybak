import { Article } from '@/types/articles';

const fetchArticles = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/articles`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Серверная ошибка получения статей`);

    const articles: Article[] = await res.json();

    return articles;
  } catch (e) {
    console.error('Ошибка при загрузке статей в компоненте Articles: ', e);
    throw e;
  }
};

export default fetchArticles;
