import { useState } from 'react';
import AddItem from './AddItem';
import ItemsInBasket from './ItemsInBasket';

function Cart() {
  const [itemName, setItemName] = useState();
  const [items, setItems] = useState([]);

  const newItem = ({ target }) => {
    setItemName(target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();
  };
  const handleAdd = () => {
    setItems((item) => [...item, itemName]);
  };
  const handleDelete = (id) => {
    const tempItems = [...items];
    tempItems.splice(id, 1);
    setItems(tempItems);
  };

  return (
    <>
      <AddItem
        submitHandler={submitForm}
        newItem={newItem}
        handleAdd={handleAdd}
      />
      <ItemsInBasket
        allItems={items}
        handler={handleDelete}
      />
    </>
  );
}

export default Cart;
