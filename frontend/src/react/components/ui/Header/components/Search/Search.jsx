import './search.scss';

import SearchIcon from '@assets/svg/header/search.svg?react';

function Search() {
  return (
    <div className='search'>
      <input type="text" placeholder='Поиск'/>
      <SearchIcon className='search__icon'/>
    </div>
  );
}

export default Search;