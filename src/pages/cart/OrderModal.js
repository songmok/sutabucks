import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./OrderModal.css";

const OrderModal = ({ open, close, modalOpen, setModalOpen }) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  // const { open, close, modalOpen, setModalOpen } = props;

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

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section ref={orderOpen}>
          {/* <header>
            제목
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>dd</main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer> */}
          {/* <div class="p-8">
            <button
              class="bg-gray-200 py-2 px-6 rounded-full"
              id="close-side-panel"
            >
              x
            </button>
            <main class="text-center">
              <img
                src="./coffee.jpg"
                alt="coffee"
                class="w-56 mx-auto mt-16 mb-8"
              />
              <span class="font-bold text-3xl">Sanguine refresh</span>
              <span class="block text-gray-600 text-sm">
                sanguine juice, Orange juice, Mint
              </span>
              <span class="block text-custom-yellow mt-6 font-bold text-3xl">
                $ 2.50
              </span>
              <span class="block mt-8"></span>
              <button class="rounded-lg bg-custom-yellow px-4 py-2 font-bold mt-6">
                Add to Order
              </button>
            </main>
          </div> */}
          <div
            class="p-8 pt-4 bg-gray-100 border border-gray-600"
            aria-modal="true"
            role="dialog"
            tabindex="-1"
          >
            <button
              class="relative block ml-auto -mr-4 text-gray-600 transition hover:scale-110"
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
                  src="./coffee.jpg"
                  alt="coffee"
                  class="w-56 mx-auto mt-16 mb-8"
                />
                <span class="block font-bold text-3xl text-center">돌체 콜드 브루</span>
                <span class="block text-gray-600 text-sm text-center">
                  Dolce Cold Brew
                </span>
                <span class="block text-custom-yellow mt-6 font-bold text-3xl text-center">
                  6,000원
                </span>
              </div>

              <div class="space-y-4 text-center">
                <Link class="block px-5 py-3 text-sm text-gray-100 transition bg-[#1B3C34] rounded hover:bg-gray-600">
                  Checkout
                </Link>
                <Link class="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600">
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default OrderModal;
