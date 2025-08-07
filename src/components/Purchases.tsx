import React from 'react';
import database from '@/data/database.json';
import ProductCard from '@/components/ProductCard';
import ViewAllButton from '@/components/ViewAllButton';

const Purchases = async () => {
  // Получаем покупки пользователя из базы данных
  const userPurchases = database.users[0].purchases
    .map((purchases) => {
      const product = database.products.find((product) => product.id === purchases.id);

      if (!product) return undefined;

      const { discountPercent, ...rest } = product;
      void discountPercent; // игнорировать

      return rest;
    })
    .filter((item) => item !== undefined);

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
          {userPurchases.slice(0, 4).map((item, index) => (
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
