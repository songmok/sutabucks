import React from "react";
import cardImg from "asset/images/card.png";

const Payment = () => {
  return (
    <section className="container mx-auto">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex flex-col justify-center space-y-6 w-full">
            <div className="flex justify-between items-center bg-gray-100 py-7 xl:py-10 px-10 xl:w-full shadow-md">
              <span className="text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                총 결제 금액
              </span>
              <span className="text-2xl mr-24">원</span>
            </div>
            <div className="flex flex-col bg-gray-100 py-7 xl:py-10 px-10 xl:w-full shadow-md">
              <span className="mb-4 text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                결제
              </span>

              <div className="flex flex-col itmes-center w-full">
                <table className="mx-5">
                  <tr className="flex flex-col justify-start py-7">
                    <td className="w-full">
                      <div className="flex justify-center gap-16">
                        <div className="">
                          <img
                            src={cardImg}
                            alt=""
                            className="w-96 border-2 border-black "
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="pb-6 text-lg">
                            카드명: 닉네임 <br /> 카드잔액 : 10000원
                          </span>
                          <button className="p-[10px] bg-white border-2 border-[#006633] rounded font-bold">
                            결제하기
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
