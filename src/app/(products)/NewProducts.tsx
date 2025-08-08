import React from 'react';
import { shuffleArray } from '../../../utils/shuffleArray';
import fetchProductsByCategory from '@/app/(products)/fetchProducts';
import ProductsSection from '@/components/ProductsSection';

const NewProducts = async () => {
  try {
    const products = await fetchProductsByCategory('new');
    return (
      <ProductsSection
        title={'Новинки'}
        viewAllButton={{ text: 'Все новинки', href: 'new' }}
        products={products}
        compact
      />
    );
  } catch (e) {
    console.error('Ошибка при загрузке новинок в NewProducts: ', e);
    return <div className={'text-red-500'}>Ошибка: не удалось загрузить новинки</div>;
  }
};

export default NewProducts;
