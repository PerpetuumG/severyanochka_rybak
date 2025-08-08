import React from 'react';
import fetchProductsByCategory from '@/app/(products)/fetchProducts';
import ProductsSection from '@/components/ProductsSection';

const AllNew = async () => {
  try {
    const products = await fetchProductsByCategory('new');
    return (
      <ProductsSection
        title={'Все новинки'}
        viewAllButton={{ text: 'На главную', href: '/' }}
        products={products}
      />
    );
  } catch (e) {
    console.error('Ошибка при загрузке новинок в AllNew: ', e);
    return <div className={'text-red-500'}>Ошибка: не удалось загрузить новинки</div>;
  }
};

export default AllNew;
