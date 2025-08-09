import React from 'react';
import ProductsSection from '@/components/ProductsSection';
import fetchPurchases from '../fetchPurchases';

export const metadata = {
  title: 'Покупки в магазине "Северяночка"',
  description: 'покупки в магазине "Северяночка"',
};

const AllPurchases = async () => {
  try {
    const purchases = await fetchPurchases();

    return (
      <ProductsSection
        title='Все покупки'
        viewAllButton={{ text: 'На главную', href: '/' }}
        products={purchases}
      />
    );
  } catch {
    return <div className='text-red-500'>Ошибка: не удалось загрузить покупки</div>;
  }
};

export default AllPurchases;
