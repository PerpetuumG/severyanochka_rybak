import React from 'react';
import fetchProductsByCategory from '@/app/(products)/fetchProducts';
import ProductsSection from '@/components/ProductsSection';

const AllActions = async () => {
  try {
    const products = await fetchProductsByCategory('actions');
    return (
      <ProductsSection
        title={'Все акции'}
        viewAllButton={{ text: 'На главную', href: '/' }}
        products={products}
      />
    );
  } catch (e) {
    console.error('Ошибка при загрузке акционных товаров в AllActions: ', e);
    return <div className={'text-red-500'}>Ошибка: не удалось загрузить акции</div>;
  }
};

export default AllActions;
