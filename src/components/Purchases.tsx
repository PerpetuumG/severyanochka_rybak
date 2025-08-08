import React from 'react';
import ProductCard from '@/components/ProductCard';
import ViewAllButton from '@/components/ViewAllButton';
import { ProductCardProps } from '@/types/product';

const Purchases = async () => {
  let purchases: ProductCardProps[] = [];
  let error = null;

  // Получаем покупки пользователя из базы данных
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/users/purchases`);
    purchases = await res.json();
  } catch (err) {
    error = 'Ошибка получения купленных продуктов';
    console.error('Ошибка в компоненте Purchases:', err);
  }

  if (error) {
    return <div className='text-red-500'>Ошибка: {error}</div>;
  }

  return (
    <section>
      <div className={'flex flex-col justify-center xl:max-w-[1208px]'}>
        <div className={'mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between'}>
          <h2 className={'text-2xl xl:text-4xl text-left font-bold text-[#414141]'}>
            Покупали раньше
          </h2>

          <ViewAllButton btnText={'Все покупки'} href={'purchases'} />
        </div>
        <ul
          className={
            'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center'
          }
        >
          {purchases.slice(0, 4).map((item, index) => (
            <li
              key={item.id}
              className={`${index >= 4 ? 'hidden' : ''} ${index >= 3 ? 'md:hidden xl:block' : ''} ${index >= 4 ? 'xl:hidden' : ''}`}
            >
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Purchases;
