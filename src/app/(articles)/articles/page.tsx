import React from 'react';
import fetchArticles from '@/app/(articles)/fetchArticles';
import ArticlesSection from '@/app/(articles)/ArticlesSection';

const AllArticles = async () => {
  try {
    const articles = await fetchArticles();

    return (
      <ArticlesSection
        title={'Все статьи'}
        viewAllButton={{ text: 'На главную', href: '/' }}
        articles={articles}
      />
    );
  } catch (e) {
    return <div className={'text-red-500'}>Ошибка: не удалось загрузить статьи</div>;
  }
};

export default AllArticles;
