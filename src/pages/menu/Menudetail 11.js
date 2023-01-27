import React from "react";
import { Link } from "react-router-dom";
import MenudetailCss from "../../style/menuCss/MenudetailCss";

const Menudetail = () => {
  return (
    <MenudetailCss>
      <section className="container mx-auto my-10">
        <div className="relative block rounded-lg shadow-lg bg-white">
          <Link to="/menu" className="absolute block top-7 right-7 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
          <div className="flex flex-wrap items-center p-5">
            <div className="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
              <img
                alt="coffee"
                src="./coffee.jpg"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <div className="flex justify-between mt-8">
                  <div className="max-w-[35ch]">
                    <h1 className="text-2xl font-bold">돌체 콜드 브루</h1>
                    {/* <p className="mt-0.5 text-sm">Dolce Cold Brew</p> */}
                  </div>
                  <p className="text-2xl font-bold">4,000</p>
                </div>
                <details className="group relative my-10">
                  <summary className="block">
                    <div>
                      <div className="max-w-none leading-5">
                        <p>
                          무더운 여름철, 동남아 휴가지에서 즐기는 커피를
                          떠오르게 하는 스타벅스 음료의 베스트 x 베스트 조합인
                          돌체 콜드 브루를 만나보세요!
                        </p>
                      </div>
                    </div>
                  </summary>
                </details>
                <div className="mt-4">
                  <div className="detail-title flex justify-between py-5">
                    <span>제품 영양 정보</span>
                    <span>Tall(톨) / 355ml (12 fl oz)</span>
                  </div>
                  <div className="flex gap-5">
                    <div className="detail-left flex-1 p-1">
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                    </div>
                    <div className="flex-1 p-1">
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MenudetailCss>
  );
};

export default Menudetail;
