
import { useState } from 'react';
import Search from './';

import products from '../data/Products.json';
import Product from './Product';

function FilteredList() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Search currentVal={search} setter={(e) => setSearch(e.target.value)} />
      {
      products.filter(({ category }) => category.toLowerCase().startsWith(search.toLowerCase()))
      .map(({ category, flavour, cost }) => <Product key={`${category}-${cost}`} category={category} flavour={flavour} cost={cost} />)

      
      }
    </>
  );
}

export default FilteredList;