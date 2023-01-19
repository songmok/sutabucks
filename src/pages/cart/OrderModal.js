import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import OrderModalCss from "style/OrderModalCss";

const OrderModal = ({ open, close, modalOpen, setModalOpen, item }) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  // const { open, close, modalOpen, setModalOpen } = props;

  const [value, setValue] = useState(1);

  const increase = () => setValue(parseInt(value) + 1);

  const decrease = () => {
    value > 1 && setValue(parseInt(value) - 1);
  };

  const orderOpen = useRef();

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = ({ target }) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (orderOpen.current && !orderOpen.current.contains(target)) {
        setModalOpen(false);
      }
    };
    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응
    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  }, [setModalOpen]);

  // 모달 창 오픈시 스크롤 막기
  // useEffect(() => {
  //   const $body = document.querySelector("body");
  //   const overflow = $body.style.overflow;
  //   $body.style.overflow = "hidden";
  //   return () => {
  //     $body.style.overflow = overflow;
  //   };
  // }, []);
  console.log(item);
  return (
    <OrderModalCss>
      {/* 모달이 열릴때 openModal 클래스가 생성된다. */}
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section ref={orderOpen}>
            <div
              class="p-8 pt-4 bg-gray-100 border border-[#1B3C34]"
              aria-modal="true"
              role="dialog"
              tabindex="-1"
            >
              <button
                class="relative block ml-auto -mr-4 text-gray-600"
                onClick={close}
              >
                <span class="sr-only">Close cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div class="mt-6 space-y-6">
                <div>
                  <img
                    src={item.img}
                    alt="coffee"
                    class="w-56 mx-auto mt-16 mb-8"
                  />
                  <span class="block font-bold text-3xl text-center">
                    {item.mbiName}
                  </span>
                  <span class="block text-gray-600 text-sm px-5 mt-2">
                    {item.mbiExplain}
                  </span>
                  <span class="block text-custom-yellow mt-6 font-bold text-3xl text-center">
                    {item.mbiCost}원
                  </span>
                </div>
                <div className="flex justify-center">
                  <div class="flex items-center gap-1">
                    <button
                      type="button"
                      class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={decrease}
                    >
                      -
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      class="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />

                    <button
                      type="button"
                      class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={increase}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="space-y-4 text-center">
                  <Link class="block px-5 py-3 text-sm text-gray-100 transition bg-[#1B3C34] rounded hover:bg-gray-600">
                    Add to Cart
                  </Link>
                  <button
                    class="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
                    onClick={close}
                  >
                    Continue shopping
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </OrderModalCss>
  );
};

export default OrderModal;
