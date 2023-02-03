import React from "react";

const DetailTxt = ({ detail }) => {
  return (
    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
      <div className="px-6 py-12 md:px-12">
        <div className="flex justify-between mt-8">
          <div className="max-w-[35ch]">
            <h1 className="text-2xl font-bold">{detail.menuName}</h1>
          </div>
          <p className="text-2xl font-bold">{detail.menuCost}원</p>
        </div>
        <details className="group relative my-10">
          <summary className="block">
            <div>
              <div className="max-w-none leading-5">
                <p>{detail.menuExplain}</p>
              </div>
            </div>
          </summary>
        </details>
        <div className="hidden sm:block">
          <img
            src={detail.menuNutritionUri}
            alt="Nutrition"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailTxt;
