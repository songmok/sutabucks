import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { cartActions } from "reducer/cartSlice";

const OrderModal = ({
  amount,
  setAmount,
  modalIsOpen,
  setModalIsOpen,
  modalData,
}) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [option, setOption] = useState("Tall");
  // const [modalData, setModalData] = useState([]);

  const handleOptionChange = (changeEvent) => {
    setOption(changeEvent.target.value);
  };

  const increase = () => setAmount(parseInt(amount) + 1);

  const decrease = () => {
    amount > 1 && setAmount(parseInt(amount) - 1);
  };
  const dispatch = useDispatch();

  const pushCart = () => {
    const item = { ...modalData, amount, option, checked: true };
    dispatch(cartActions.addCartItem(item));
    setAmount(1);
    setModalIsOpen(false);
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: "9999",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "35%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#f3f3f3",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      <section>
        <div
          className="p-4 border border-[#1B3C34]"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <button
            className="absolute block top-7 right-7 text-gray-600"
            onClick={() => setModalIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mt-6 space-y-3">
            <div>
              <img
                src={modalData.img}
                alt="coffee"
                className="w-56 mx-auto mt-16 mb-8"
              />
              <span className="block font-bold text-3xl text-center">
                {modalData.mbiName}
              </span>
              <span className="block text-gray-600 text-sm px-5 mt-2">
                {modalData.mbiExplain}
              </span>
              <span className="block text-custom-yellow mt-5 font-bold text-3xl text-center">
                {modalData.mbiCost * amount} 원
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                  onClick={decrease}
                >
                  -
                </button>
                {amount}
                {/* <input
                type="number"
                id="Quantity"
                value="1"
                className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
              /> */}
                <button
                  type="button"
                  className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                  onClick={increase}
                >
                  +
                </button>
              </div>
              <ul className="grid grid-cols-3 gap-x-3 my-2">
                {/* <ul className="grid grid-cols-3 gap-x-3 m-1 max-w-md mx-auto"> */}
                <li className="relative">
                  <input
                    className="sr-only peer"
                    type="radio"
                    value="Tall"
                    name="size"
                    id="tall"
                    checked={option === "Tall"}
                    onChange={handleOptionChange}
                  />
                  <label
                    className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#CCAA86] peer-checked:ring-2 peer-checked:border-transparent"
                    htmlFor="tall"
                  >
                    Tall
                  </label>
                </li>
                <li className="relative">
                  <input
                    className="sr-only peer"
                    type="radio"
                    value="Grande"
                    name="size"
                    id="grande"
                    checked={option === "Grande"}
                    onChange={handleOptionChange}
                  />
                  <label
                    className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#B05B10] peer-checked:ring-2 peer-checked:border-transparent"
                    htmlFor="grande"
                  >
                    Grande
                  </label>
                </li>
                <li className="relative">
                  <input
                    className="sr-only peer"
                    type="radio"
                    value="Venti"
                    name="size"
                    id="venti"
                    checked={option === "Venti"}
                    onChange={handleOptionChange}
                  />
                  <label
                    className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#480405] peer-checked:ring-2 peer-checked:border-transparent"
                    htmlFor="venti"
                  >
                    Venti
                  </label>
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-center">
              <button
                className="block w-full px-5 py-3 text-sm text-gray-100 bg-[#1B3C34] rounded"
                onClick={pushCart}
              >
                Add to Cart
              </button>
              <button
                className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
                onClick={() => setModalIsOpen(false)}
              >
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default OrderModal;
