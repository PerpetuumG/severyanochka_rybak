import React from 'react';
import ViewAllButton from '@/components/ViewAllButton';
import ArticleCard from '@/app/(articles)/ArticleCard';

const ArticlesSection = ({ title, viewAllButton, articles, compact = false }) => {
  return (
    <section>
      <div className='flex flex-col justify-center xl:max-w-[1208px] text-[#414141]'>
        <div className='mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between'>
          <h2 className='text-2xl xl:text-4xl text-left font-bold'>Статьи</h2>

          <ViewAllButton btnText={'Все статьи'} href={'articles'} />
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

export default ArticlesSection;
