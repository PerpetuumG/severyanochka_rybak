import React from 'react';
import fetchProductsByCategory from '@/app/(products)/fetchProducts';
import ProductsSection from '@/components/ProductsSection';
import { shuffleArray } from '../../../utils/shuffleArray';

export const metadata = {
  title: 'Акции магазина "Северяночка"',
  description: 'Акционные товары магазина "Северяночка"',
};

const Actions = async () => {
  try {
    let products = await fetchProductsByCategory('actions');
    products = shuffleArray(products);

    return (
      <ProductsSection
        title={'Акции'}
        viewAllButton={{ text: 'Все акции', href: 'actions' }}
        products={products}
        compact
      />
    );
  } catch (e) {
    console.error('Ошибка при загрузке акционных товаров в AllActions: ', e);
    return <div className={'text-red-500'}>Ошибка: не удалось загрузить акции</div>;
  }
};

export default Actions;
