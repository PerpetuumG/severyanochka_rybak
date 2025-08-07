import React from 'react';
import Image from 'next/image';
import iconRight from '/public/icons-products/icon-arrow-right.svg';
import ProductCard from '@/components/ProductCard';
import { ProductCardProps } from '@/types/product';

const Actions = async () => {
  let products: ProductCardProps[] = [];
  let error = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=actions`);
    products = await res.json();
  } catch (e) {
    console.error('Ошибка при загрузке акционных товаров в Actions: ', e);
    error = 'Ошибка получения акционных товаров';
  }

  if (error) {
    return <div className={'text-red-500'}>Ошибка: {error}</div>;
  }

  return (
    <section>
      <div className={'flex flex-col justify-center xl:max-w-[1208px]'}>
        <div className={'mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between'}>
          <h2 className={'text-2xl xl:text-4xl text-left font-bold text-[#414141]'}>Акции</h2>
          <button className={'flex flex-row items-center gap-x-2 cursor-pointer'}>
            <p className={'text-base text-center text-[#606060] hover:text-[#bfbfbf] duration-300'}>
              Все акции
            </p>
            <Image src={iconRight} alt={'К акциям'} width={24} height={24} sizes={'24px'} />
          </button>
        </div>
        <ul
          className={
            'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center'
          }
        >
          {products.slice(0, 4).map((item, index) => (
            <li
              key={item._id}
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

export default Actions;
