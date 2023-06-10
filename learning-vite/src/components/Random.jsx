const randomize = (array) => {
  let count = array.length;
  let firstItemHolder;
  let swappedItem;

  // PURPOSE: while count is above 0
  while (count) {
    // PURPOSE: pick a random item and subtract 1 from count
    swappedItem = Math.floor(Math.random() * count--);
    // PURPOSE: temporarily hold the information about to be replaced by the swap
    firstItemHolder = array[count];
    // PURPOSE: swap the current item with secondItem
    array[count] = array[swappedItem];
    // PURPOSE: put the replaced item where secondItem originally was
    array[swappedItem] = firstItemHolder;
  }
  return array;
};

export default randomize;