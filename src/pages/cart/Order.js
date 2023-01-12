import React, { useEffect, useRef, useState } from "react";
// import Modal from "./Modal";
import OrderModal from "./OrderModal";
import "./OrderModal.css";

const Order = () => {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const orderOpen = useRef();

  const modalCloseHandler = ({ target }) => {
    if (modalOpen && !orderOpen.current.contains(target)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", modalCloseHandler);
    return () => {
      window.removeEventListener("click", modalCloseHandler);
    };
  }, []);

  return (
    <div className="container">
      <div class="pt-16 px-10 grid lg:grid-cols-5 pb-20">
        <div class="lg:col-span-1">
          <nav aria-label="Main Nav" class="flex flex-col space-y-1">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-[#1B3C34] hover:text-white">
                <span class="text-sm font-medium"> Drink </span>
                <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <nav
                aria-label="Users Nav"
                class="flex flex-col mt-2 ml-8 space-y-1"
              >
                <a
                  href=""
                  class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
                >
                  Banned Users
                </a>
                <a
                  href=""
                  class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
                >
                  Calendar
                </a>
              </nav>
            </details>
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-[#1B3C34] hover:text-white">
                <span class="text-sm font-medium"> Foods </span>

                <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav
                aria-label="Account Nav"
                class="flex flex-col mt-2 ml-8 space-y-1"
              >
                <a
                  href=""
                  class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
                >
                  Details
                </a>

                <a
                  href=""
                  class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
                >
                  Security
                </a>

                <form action="/logout">
                  <button
                    type="submit"
                    class="w-full px-4 py-2 text-sm font-medium text-left text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
                  >
                    Logout
                  </button>
                </form>
              </nav>
            </details>
          </nav>
        </div>
        <main class="lg:col-span-4 ml-2">
          <div className="coffee mb-10">
            <div>
              <span class="font-bold text-2xl md:text-4xl">콜드 브루 커피</span>
            </div>
            <div class="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
              {/* <!--card--> */}
              <div class="block group cursor-pointer" onClick={openModal}>
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {openModal && (
                <OrderModal
                  open={modalOpen}
                  close={closeModal}
                  ref={orderOpen}
                />
              )}
              {/* <OrderModal
              open={modalOpen}
              close={closeModal}
              onBackdropPress={() => setModalOpen(false)}
            /> */}
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
            </div>
          </div>
          <div className="coffee mb-10">
            <div>
              <span class="font-bold text-2xl md:text-4xl">콜드 브루 커피</span>
            </div>
            <div class="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
            </div>
          </div>
          <div className="coffee mb-10">
            <div>
              <span class="font-bold text-2xl md:text-4xl">콜드 브루 커피</span>
            </div>
            <div class="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
              {/* <!--card--> */}
              <div class="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-full transform hover:scale-95 transition duration-300"
                />
                <div class="relative pt-3 bg-white">
                  <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    돌체 콜드 브루
                  </h3>
                  <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">4,000</p>
                  </div>
                </div>
              </div>
              {/* <!--card end--> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Order;
