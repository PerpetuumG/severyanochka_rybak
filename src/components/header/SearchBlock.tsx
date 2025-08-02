import React, { FC } from 'react';
import ButtonSearch from '@/components/header/ButtonSearch';
import InputBlock from '@/components/header/InputBlock';

const SearchBlock: FC = () => {
  return (
    <div className={'flex flex-row gap-4 flex-grow'}>
      <ButtonSearch />
      <InputBlock />
    </div>
  );
};

export default SearchBlock;
