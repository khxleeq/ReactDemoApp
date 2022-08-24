import DisplayItem from './DisplayItem';

function ItemsInBasket({ allItems, handler }) {
  return (
    <ul>
      {allItems.map((itemName, index) => (

        <DisplayItem
          itemName={itemName}
          key={index}
          id={index}
          handler={handler}
        />
      ))}
    </ul>
  );
}

export default ItemsInBasket;