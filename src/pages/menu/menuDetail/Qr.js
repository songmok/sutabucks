import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Qr = ({ closeModal, detail, modalIsOpen }) => {
  useEffect(() => {}, [modalIsOpen]);
  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };
  return (
    <motion.div
      animate={modalIsOpen ? "open" : "closed"}
      variants={variants}
      className="absolute w-full h-full rounded"
      onClick={closeModal}
    >
      <button className="absolute block top-5 right-5 z-10">
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
      </button>
      <img
        src={detail.menuQrUri}
        alt="qr"
        className="absolute w-1/2 h-1/2 top-1/4 left-1/4 z-10"
      />
      <div className="absolute w-full h-full bg-white opacity-50"></div>
    </motion.div>
  );
};

export default Qr;
