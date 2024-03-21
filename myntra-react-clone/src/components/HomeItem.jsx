import React from "react";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag); // using slice "bag"
  // dispatching the action to add the item to the bag
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  // dispatching the action to remove the item from the bag
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  }

  // if element is found, the function indexOf() will return the index of the element
  const elementFound = bagItems.indexOf(item.id) >= 0;

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button className="btn btn-add-bag btn-danger"
        onClick={handleRemoveFromBag}>
          <AiFillDelete />
          Remove
        </button>
      ) : (
        <button
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          <GrAddCircle />
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
