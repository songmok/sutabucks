import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [data, setData] = useState([]);

  const getPosts = async () => {
    const posts = await axios.get("/test.json");
    setData(posts.data.list);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className="container mx-auto">
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
                <Link className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  콜드 브루
                </Link>
                <Link className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
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
                <Link className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  브레드
                </Link>
                <Link className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  케이크
                </Link>
              </nav>
            </details>
          </nav>
        </div>
        <main className="lg:col-span-4 ml-2">
          <div className="flex flex-wrap justify-between items-center lg:mb-7">
            <h2 className="font-bold text-3xl lg:text-4xl text-[#1B3C34] mb-3 lg:mb-0">
              Menu
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
              <span className="font-bold text-2xl md:text-3xl">콜드 브루 커피</span>
            </div>
            <div className="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
              {data.map((item) => (
                <Link to="/menudetail" key={item.mbiSeq} className="block group cursor-pointer">
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
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Menu;
