import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  return (
    <section className="container mx-auto">
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
                <Link class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  Banned Users
                </Link>
                <Link class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  Calendar
                </Link>
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
                <Link class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  Details
                </Link>

                <Link class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  Security
                </Link>

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
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>

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
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
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
    </section>
  );
};

export default Order;
