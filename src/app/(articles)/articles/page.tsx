import React from 'react';
import { Article } from '@/types/articles';
import ViewAllButton from '@/components/ViewAllButton';
import ArticleCard from '@/app/(articles)/ArticleCard';

const AllArticles = async () => {
  let articles: Article[] = [];
  let error = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/articles`);
    articles = await res.json();
  } catch (e) {
    console.error('Ошибка при загрузке статей в компоненте AllArticles: ', e);
    error = 'Ошибка получения статей';
  }

  if (error) {
    return <div className={'text-red-500'}>Ошибка: {error}</div>;
  }

  return (
    <section>
      <div className='px-[max(12px,calc((100%-1208px)/2))] flex flex-col text-[#414141] mt-20'>
        <div className='mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between'>
          <h2 className='text-2xl xl:text-4xl text-left font-bold'>Статьи</h2>

          <ViewAllButton btnText={'Главная'} href={'/'} />
        </div>

        {/* Список статей */}
        <ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6'>
          {articles.map((article) => (
            <li key={article._id} className='h-75 md:h-105'>
              <ArticleCard {...article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AllArticles;
