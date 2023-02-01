import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OrderModal from "./OrderModal";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";

const Order = () => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(1);

  // const [option, setOption] = useState("Tall");

  // const handleOptionChange = (changeEvent) => {
  //   setOption(changeEvent.target.value);
  // };

  // const increase = () => setAmount(parseInt(amount) + 1);

  // const decrease = () => {
  //   amount > 1 && setAmount(parseInt(amount) - 1);
  // };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const getPosts = async () => {
    const posts = await axios.get("/test.json");
    setData(posts.data.list);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <PagesTitle title={"주문메뉴"} />
      <PagesLink first={"주문메뉴"} firstLink={"order"} />
      <div className="container mx-auto">
        <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
          <div className="lg:col-span-1">
            <nav aria-label="Main Nav" className="flex flex-col space-y-1">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-[#1B3C34] hover:text-white">
                  <span className="text-sm font-medium"> 음료 </span>
                  <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <nav
                  aria-label="Users Nav"
                  className="flex flex-col mt-2 ml-8 space-y-1"
                >
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
                  >
                    콜드 브루
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
                  >
                    브루드 커피
                  </Link>
                </nav>
              </details>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-[#1B3C34] hover:text-white">
                  <span className="text-sm font-medium"> 푸드 </span>
                  <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <nav
                  aria-label="Account Nav"
                  className="flex flex-col mt-2 ml-8 space-y-1"
                >
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
                  >
                    브레드
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
                  >
                    케이크
                  </Link>
                </nav>
              </details>
            </nav>
          </div>
          <main className="lg:col-span-4 ml-2">
            <div className="flex flex-wrap justify-between items-center my-5 lg:mb-7">
              <h2 className="font-bold text-3xl lg:text-4xl text-[#1B3C34] mb-3 lg:mb-0">
                Order
              </h2>
              <form className="w-full lg:w-[35%]">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-[#1B3C34] dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-[#1B3C34] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="coffee mb-10">
              <div>
                <span className="font-bold text-2xl md:text-4xl">
                  콜드 브루 커피
                </span>
              </div>
              <div className="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
                {data.map((item) => (
                  <div
                    key={item.mbiSeq}
                    className="block group cursor-pointer"
                    onClick={() => {
                      setModalData(item);
                      setModalIsOpen(true);
                    }}
                    // onClick={openModal}
                  >
                    <img
                      src={item.img}
                      alt="coffee"
                      className="w-full transform hover:scale-95 transition duration-300"
                    />
                    <div className="relative pt-3 bg-white">
                      <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {item.mbiName}
                      </h3>
                      <div className="mt-1.5 flex items-center justify-between text-gray-900">
                        <p className="tracking-wide">{item.mbiCost}원</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <Modal
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
                          <button
                            type="button"
                            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                            onClick={increase}
                          >
                            +
                          </button>
                        </div>
                        <ul className="grid grid-cols-3 gap-x-3 my-2">
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
              </Modal> */}
              <OrderModal
                amount={amount}
                setAmount={setAmount}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                modalData={modalData}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Order;
