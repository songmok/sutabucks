import axios from "axios";
import React, { useEffect } from "react";

const CartList = ({ item, miSeq, click, setClick }) => {
  const minus = () => {
    if (item.sbNumber > 1) {
      const body = {
        miSeq: miSeq,
        sbSmcSeq: item.sbSmcSeq,
        sbNumber: --item.sbNumber,
        sbOrderNumber: item.sbOrderNumber,
      };
      axios
        .patch("http://192.168.0.190:9999/cart/update", body)
        .then((res) => {
          console.log(res);
          console.log(body);
        })
        .catch((err) => {
          console.log(err);
          console.log(body);
        });
      setClick(!click);
    }
  };
  const plus = () => {
    const body = {
      miSeq: miSeq,
      sbSmcSeq: item.sbSmcSeq,
      sbNumber: ++item.sbNumber,
      sbOrderNumber: item.sbOrderNumber,
    };
    axios
      .patch("http://192.168.0.190:9999/cart/update", body)
      .then((res) => {
        console.log(res);
        console.log(body);
      })
      .catch((err) => {
        console.log(err);
        console.log(body);
      });
    setClick(!click);
  };
  const removeItem = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete("http://192.168.0.190:9999/cart/delete", {
          data: {
            miSeq: miSeq,
            sbSmcSeq: item.sbSmcSeq,
            sbOrderNumber: item.sbOrderNumber,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setClick(!click);
    }
  };
  return (
    <div
      key={item.id}
      className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
    >
      <div className="flex w-3/6 items-center">
        <div className="flex flex-col gap-2 justify-center flex-grow">
          <span className="text-sm">{item.sbiBranchName}</span>
          <span className="font-bold">
            {item.mbiName} - {item.moiName}
          </span>
        </div>
      </div>
      <div className="w-1/6 flex justify-center">
        <button onClick={minus}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
        <span className="mx-4">{item.sbNumber}</span>
        <button onClick={plus}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>
      <div className="w-1/6 flex justify-center">
        <button
          className="text-gray-600 transition hover:text-red-600"
          onClick={removeItem}
        >
          <span className="sr-only">Remove item</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
      <div className="w-1/6 flex justify-center">
        <span className="font-semibold text-sm">
          {item.optionIncludePrice}원
        </span>
      </div>
    </div>
  );
};

export default CartList;
