import React, { FC } from 'react';
import LogoBlock from '@/components/header/LogoBlock';
import SearchBlock from '@/components/header/SearchBlock';
import HeaderUserBlock from '@/components/header/HeaderUserBlock';

const Header: FC = () => {
  return (
    <header
      className={
        'bg-white w-full md:shadow(--shadow-default) relative z-10 flex flex-col md:flex-row gap-y-5 xl:gap-y-7 md:gap-10 p-2 justify-center'
      }
    >
      <div
        className={
          'flex flex-row gap-4 xl:gap-10 py-2 px-4 items-center shadow(--shadow-default) md:shadow-none'
        }
      >
        <LogoBlock />
        <SearchBlock />
      </div>

      <nav aria-label={'Основное меню'}>
        <HeaderUserBlock />
      </nav>
    </header>
  );
};

export default Header;
