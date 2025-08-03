import React from 'react';
import iconHeart from '/public/icons-header/icon-heart.svg';
import Image from 'next/image';
import { ProductCardProps } from '@/types/product';

const ProductCard = ({}: ProductCardProps) => {
  return (
    <div
      className={
        'relative flex flex-col justify-between w-40 rounded overflow-hidden bg-white md:w-[224px] xl:w-[272px] h-[349px] align-top p-0 hover:shadow-(--shadow-article) duration-300'
      }
    >
      <button
        className={
          'w-8 h-8 p-2 bg-[#f3f2f1] hover:bg-[#fcd5ba] absolute top-2 right-2 opacity-50 rounded cursor-pointer duration-300 z-10'
        }
      >
        <Image src={iconHeart} alt={'Избранное'} width={24} height={24} sizes={'24px'} />
      </button>

      <div className={'relative aspect-square w-40 h-40 md:w-[224px] xl:w-[272px]'}>
        <Image
          src={'/images/products/img-1.jpeg'}
          alt={'Акции'}
          fill
          className={'object-cover'}
          sizes={'(max-width:768px) 160px, (max-width: 1200px) 224px, 272px'}
        />

        <div className={'absolute bg-[#ff6633] py-1 px-2 rounded text-white bottom-2.5 left-2.5'}>
          {'Скидка'}
        </div>
      </div>

      <div className={'flex flex-col p-2 h-[189px]'}>
        <div className={'flex flex-row justify-between items-start h-[45px]'}>
          <div className={'flex flex-col gap-x-1'}>
            <div className={'flex flex-row gap-x-1 text-sm md:text-lg font-bold text-[#414141]'}>
              <span>Цена по карте</span>
              <span>$</span>
            </div>

            <p className={'text-[#bfbfbf] text-[8px] md:text-xs'}>{'С картой'}</p>
          </div>

          <div className={'flex flex-col gap-x-1'}>
            <div className={'flex flex-row gap-x-1 text-xs md:text-base text-[#606060]'}>
              <span>{'Финальная цена'}</span>
              <span>$</span>
            </div>

            <p className={'text-[#bfbfbf] text-[8px] md:text-xs text-right'}>Обычная</p>
          </div>
        </div>
        <div
          className={
            'h-13.5 text-xs md:text-base text-[#414141] line-clamp-3 md:line-clamp-2 leading-[1.5]'
          }
        >
          {'Описание товара'}
        </div>
        Рейтинг
        <button
          className={
            'absolute border bottom-2 left-2 right-2 border-(--color-primary) hover:text-white hover:bg-[#ff6633] hover:border-transparent active:shadow-(--shadow-button-active) h-10 rounded justify-center items-center text-(--color-primary) transition-all duration-300 cursor-pointer select-none'
          }
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
