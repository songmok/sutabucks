import React from "react";
import OrderItem from "../ui/OrderItem";

const OrderList = ({ data, setMenuSeq, setModalIsOpen, bt }) => {
  const allMenu = data.map((item) => (
    <OrderItem
      item={item}
      setMenuSeq={setMenuSeq}
      setModalIsOpen={setModalIsOpen}
    />
  ));

  const drinkMenu = data
    .filter((item) => item.menuCategoryNo < 5)
    .map((item) => (
      <OrderItem
        item={item}
        setMenuSeq={setMenuSeq}
        setModalIsOpen={setModalIsOpen}
      />
    ));

  const foodMenu = data
    .filter((item) => item.menuCategoryNo > 4)
    .map((item) => (
      <OrderItem
        item={item}
        setMenuSeq={setMenuSeq}
        setModalIsOpen={setModalIsOpen}
      />
    ));

  const list = () => {
    switch (bt) {
      case "all":
        return allMenu;
      case "drink":
        return drinkMenu;
      case "food":
        return foodMenu;
      default:
        return allMenu;
    }
  };
  return <>{list()}</>;
};

export default OrderList;
