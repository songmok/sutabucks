import React from "react";
import ReactModal from "react-modal";

const CardQrModal = ({ isopen, setIsOpen, detail }) => {
  const clickSubmit = () => {
    alert("충전이 완료되었습니다.");
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "27%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
    },
  };

  return (
    <ReactModal isOpen={isopen} style={customStyles}>
      <section>
        <div className="p-8 pt-4 border border-[#1B3C34]" aria-modal="true">
          <button
            className="absolute block top-7 right-7 text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mt-6 ">
            <span>충전을 위해 QR코드를 스캔해주세요.</span>
            <form className=" flex flex-col flex- space-y-4 text-center">
              {/* qr 이미지 작업 완료되면 풀기 */}
              <img
                src={detail.cardQRUri}
                alt="card"
                className="w-56 mx-auto mt-6 mb-6"
              />
              <button
                onClick={() => clickSubmit()}
                className="block w-full px-5 py-3 text-sm text-gray-100
                bg-[#1B3C34] rounded"
              >
                완료
              </button>
              <button
                className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                되돌아가기
              </button>
            </form>
          </div>
        </div>
      </section>
    </ReactModal>
  );
};

export default CardQrModal;
