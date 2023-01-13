import React from "react";

const Menudetail = () => {
  return (
    // <section className="container mx-auto">
    //   <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
    //     <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
    //       <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
    //         <img
    //           alt="coffee"
    //           src="./coffee.jpg"
    //           class="object-cover w-full aspect-square rounded-xl"
    //         />
    //       </div>
    //       <div class="sticky top-0">
    //         <div class="flex justify-between mt-8">
    //           <div class="max-w-[35ch]">
    //             <h1 class="text-2xl font-bold">돌체 콜드 브루</h1>
    //             <p class="mt-0.5 text-sm">Dolce Cold Brew</p>
    //           </div>
    //           <p class="text-lg font-bold">4,000</p>
    //         </div>
    //         <details class="group relative mt-4">
    //           <summary class="block">
    //             <div>
    //               <div class="max-w-none">
    //                 <p>
    //                   무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게
    //                   하는 스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드
    //                   브루를 만나보세요!
    //                 </p>
    //               </div>
    //             </div>
    //           </summary>
    //         </details>
    //         <div className="mt-4">
    //           <div className="flex justify-between py-5 border-y">
    //             <span>제품 영양 정보</span>
    //             <span>Tall(톨) / 355ml (12 fl oz)</span>
    //           </div>
    //           <div className="flex gap-5">
    //             <div className="flex-1">
    //               <div className="flex justify-between py-3">
    //                 <span>1회 제공량 (kcal)</span>
    //                 <span>265</span>
    //               </div>
    //               <div className="flex justify-between py-3">
    //                 <span>1회 제공량 (kcal)</span>
    //                 <span>265</span>
    //               </div>
    //               <div className="flex justify-between py-3">
    //                 <span>1회 제공량 (kcal)</span>
    //                 <span>265</span>
    //               </div>
    //             </div>
    //             <div className="flex-1">
    //               <div className="flex justify-between py-3">
    //                 <span>1회 제공량 (kcal)</span>
    //                 <span>265</span>
    //               </div>
    //               <div className="flex justify-between py-3">
    //                 <span>1회 제공량 (kcal)</span>
    //                 <span>265</span>
    //               </div>
    //               <div className="flex justify-between py-3">
    //                 <span>1회 제공량 (kcal)</span>
    //                 <span>265</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="container mx-auto my-5">
      <div class="block rounded-lg shadow-lg bg-white">
        <div class="flex flex-wrap items-center">
          <div class="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
            <img
              alt="coffee"
              src="./coffee.jpg"
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
              <h2 class="text-3xl font-bold mb-4 text-blue-600 display-5">
                Why is it so great?
              </h2>
              <p class="text-gray-500 mb-12">
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                neque iaculis malesuada. Aenean gravida magna orci, non
                efficitur est porta id. Donec magna diam.
              </p>

              <div class="grid lg:gap-x-12 md:grid-cols-3">
                <div class="mb-12 md:mb-0">
                  <h2 class="text-3xl font-bold text-blue-600 mb-4">1000</h2>
                  <h5 class="text-lg font-medium text-gray-500 mb-0">
                    Happy customers
                  </h5>
                </div>

                <div class="mb-12 md:mb-0">
                  <h2 class="text-3xl font-bold text-blue-600 mb-4">70%</h2>
                  <h5 class="text-lg font-medium text-gray-500 mb-0">Growth</h5>
                </div>

                <div class="">
                  <h2 class="text-3xl font-bold text-blue-600 mb-4">49</h2>
                  <h5 class="text-lg font-medium text-gray-500 mb-0">
                    Projects
                  </h5>
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
