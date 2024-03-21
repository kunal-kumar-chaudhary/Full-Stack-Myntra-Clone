import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {

  // we need both "bag" and "items" slices here
  const bagItems = useSelector(store => store.bag);
  const items = useSelector(store => store.items);

  const finalItems = items.filter((item)=> {
    const itemIndex = bagItems.indexOf(item.id);
    // if the index is there inside the bag, index returned will be true or else false
    return itemIndex >= 0;
  })


  return (
    <>
      <main>
        <div className="bag-page">
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
