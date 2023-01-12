import React from "react";

const Menudetail = () => {
  return (
    <section className="container">
      <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="coffee"
              src="./coffee.jpg"
              class="object-cover w-full aspect-square rounded-xl"
            />
          </div>
          <div class="sticky top-0">
            <div class="flex justify-between mt-8">
              <div class="max-w-[35ch]">
                <h1 class="text-2xl font-bold">돌체 콜드 브루</h1>
                <p class="mt-0.5 text-sm">Dolce Cold Brew</p>
              </div>
              <p class="text-lg font-bold">4,000</p>
            </div>
            <details class="group relative mt-4">
              <summary class="block">
                <div>
                  <div class="max-w-none">
                    <p>
                      무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게
                      하는 스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드
                      브루를 만나보세요!
                    </p>
                  </div>
                </div>
              </summary>
            </details>
            <div className="mt-4">
              <div className="flex justify-between py-5">
                <span>제품 영양 정보</span>
                <span>Tall(톨) / 355ml (12 fl oz)</span>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>1회 제공량 (kcal)</span>
                    <span>265</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1회 제공량 (kcal)</span>
                    <span>265</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1회 제공량 (kcal)</span>
                    <span>265</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>1회 제공량 (kcal)</span>
                    <span>265</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1회 제공량 (kcal)</span>
                    <span>265</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1회 제공량 (kcal)</span>
                    <span>265</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menudetail;
