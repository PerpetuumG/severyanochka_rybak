import React from 'react';
import fetchProductsByCategory from '@/app/(products)/fetchProducts';
import ProductsSection from '@/components/ProductsSection';

const Actions = async () => {
  try {
    const products = await fetchProductsByCategory('actions');
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
