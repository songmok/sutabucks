import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CheckouttCss from "style/cartCss/CheckoutCss";
import cardImg from "asset/images/card.png";
import CardQrModal from "pages/member/modals/CardQrModal";

const Checkout = () => {
  const userData = useSelector((state) => state.user);
  const miSeq = userData.miSeq;

  const [totalPrice, setTotalPrice] = useState("");
  const [cartList, setCartList] = useState([]);
  const [request, sedivequest] = useState("");
  const [store, setStore] = useState([]);
  const [pick, setPick] = useState(1);
  const [detail, setDetail] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const reviewCard = () => {
    setIsOpen(true);
  };
  const navigate = useNavigate();
  const getPosts = async () => {
    const posts = await axios.get(
      `http://haeji.mawani.kro.kr:9999/cart/list?miSeq=${miSeq}&status=1`
    );
    setStore({
      sbiBranchName:
        posts.data.memberBasket[0].storeMenuConnect.store.sbiBranchName,
      sbiAddressDetail:
        posts.data.memberBasket[0].storeMenuConnect.store.sbiAddressDetail,
    });
    setCartList(posts.data.memberBasket);
    setTotalPrice(posts.data.totalPrice);
  };

  const payPosts = async () => {
    axios
      .get(`http://haeji.mawani.kro.kr:9999/card/detail?memberNo=${miSeq}`)
      .then((res) => {
        setDetail(res.data.detail);
      })
      .catch((err) => console.log(err));
  };

  const cartItems = cartList.map((item) => {
    // console.log(item.shoppingBasketOption);
    let itemArr = item.shoppingBasketOption;
    // console.log("itemArr : ", itemArr);
    if (itemArr.length == 0) {
      return {
        id: item.id,
        sbiBranchName: item["storeMenuConnect"]["store"].sbiBranchName,
        sbiAddressDetail: item["storeMenuConnect"]["store"].sbiAddressDetail,
        mbiName: item["storeMenuConnect"]["menu"].mbiName,
        sbNumber: item.sbNumber,
        optionIncludePrice: item.optionIncludePrice,
        mbiSeq: item["storeMenuConnect"]["menu"].mbiSeq,
        sbOrderNumber: item.sbOrderNumber,
        sbSmcSeq: item["storeMenuConnect"].smcSeq,
        sbBasketPrice: item.sbBasketPrice,
        moiName: "",
      };
    } else {
      return {
        id: item.id,
        sbiBranchName: item["storeMenuConnect"]["store"].sbiBranchName,
        sbiAddressDetail: item["storeMenuConnect"]["store"].sbiAddressDetail,
        mbiName: item["storeMenuConnect"]["menu"].mbiName,
        sbNumber: item.sbNumber,
        optionIncludePrice: item.optionIncludePrice,
        mbiSeq: item["storeMenuConnect"]["menu"].mbiSeq,
        sbOrderNumber: item.sbOrderNumber,
        sbSmcSeq: item["storeMenuConnect"].smcSeq,
        sbBasketPrice: item.sbBasketPrice,
        moiName: item["shoppingBasketOption"][0]["menuOption"].moiName,
      };
    }
  });

  useEffect(() => {
    payPosts();
    getPosts();
  }, []);

  const textarea = useRef();
  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  const pay = () => {
    if (cartItems.length <= 0) {
      alert("장바구니에 담긴 상품이 없습니다.");
    } else {
      const body = {
        miSeq: miSeq,
        sbRequest: request,
        sbReceive: pick,
        sbPayment: 1,
        couponUse: 0,
        couponNumber: 0,
      };
      axios
        .patch("http://haeji.mawani.kro.kr:9999/cart/payment", body)
        .then((res) => {
          console.log(res);
          console.log(body);
          alert("결제가 완료되었습니다.");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          console.log(body);
          alert("잔액이 없습니다.");
        });
    }
  };
  return (
    <CheckouttCss>
      <section className="container mx-auto">
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex justify-between w-full items-start">
              <span className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Checkout
              </span>
              <Link
                to="/cart"
                className="flex items-center text-gray-600 hover:text-gray-500 space-x-1"
              >
                <p className="text-lg leading-none">&lt; Back</p>
              </Link>
            </div>
            <div className="flex flex-col justify-center space-y-6 w-full">
              <div className="flex flex-col bg-gray-100 py-7 xl:py-10 px-10 xl:w-full shadow-md">
                <span className="mb-4 text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                  주문메뉴
                </span>
                <div className="flex flex-col itmes-center w-full">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center hover:bg-gray-100 mx-5 py-7"
                      style={{ borderBottom: "1px solid #cccccc" }}
                    >
                      <div className="flex w-4/6 items-center">
                        <div className="flex flex-col justify-center ml-4 flex-grow">
                          <span className="font-bold">
                            {item.mbiName} &nbsp;
                            <span className="font-normal">{item.moiName}</span>
                          </span>
                        </div>
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <span className="mx-4">{item.sbNumber}</span>
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <span className="font-semibold">
                          {item.optionIncludePrice}원
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end items-center mx-5 py-7">
                    <span className="w-1/6 text-center">Total</span>
                    <span className="w-1/6 text-center font-semibold text-xl">
                      {totalPrice}원
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-gray-100 py-7 xl:py-10 px-10 xl:w-full shadow-md">
                <span className="mb-4 text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                  주문매장
                </span>
                <div className="flex flex-col itmes-center w-full">
                  <div className="mx-5">
                    <div
                      className="flex justify-start py-7"
                      style={{ borderBottom: "1px solid #cccccc" }}
                    >
                      <div className="w-1/4 text-xl font-semibold">
                        {store.sbiBranchName}
                      </div>
                      <div className="text-slate-500 text-xl">
                        {store.sbiAddressDetail}
                      </div>
                    </div>
                    <div
                      className="flex justify-start py-7"
                      style={{ borderBottom: "1px solid #cccccc" }}
                    >
                      <div className="w-1/4 text-xl font-semibold">
                        매장픽업 / 배달
                      </div>
                      <div className="flex gap-16">
                        <div className="flex items-center gap-2">
                          <input
                            className="focus:outline-none border border-gray-400 rounded-full cursor-pointer w-5 h-5 checked:border-[5px] checked:border-[#1B3C34]"
                            type="radio"
                            name="pick"
                            value="1"
                            checked={parseInt(pick) === 1}
                            onClick={(e) => {
                              setPick(e.target.value);
                            }}
                          />
                          <span className="text-xl">매장픽업</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            className="focus:outline-none border border-gray-400 rounded-full cursor-pointer w-5 h-5 checked:border-[5px] checked:border-[#1B3C34]"
                            type="radio"
                            name="pick"
                            value="2"
                            checked={parseInt(pick) === 2}
                            onClick={(e) => {
                              setPick(e.target.value);
                            }}
                          />
                          <span className="text-xl">배달</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex justify-start py-7"
                      style={{ borderBottom: "1px solid #cccccc" }}
                    >
                      <div className="w-1/4 text-xl font-semibold">닉네임</div>
                      <div className="text-slate-500 text-xl">
                        {userData.miNickname}
                      </div>
                    </div>
                    <div
                      className="flex justify-start py-7"
                      style={{ borderBottom: "1px solid #cccccc" }}
                    >
                      <div className="w-1/4 text-xl font-semibold">
                        전화번호
                      </div>
                      <div className="text-slate-500 text-xl">
                        {userData.miPhoneNum.replace(
                          /^(\d{2,3})(\d{3,4})(\d{4})$/,
                          `$1-$2-$3`
                        )}
                      </div>
                    </div>
                    <div
                      className="relative flex justify-start items-center py-3"
                      style={{ borderBottom: "1px solid #cccccc" }}
                    >
                      <div className="w-1/4 text-xl font-semibold">
                        주문시 요청사항
                      </div>
                      <div className="w-3/4 text-slate-500 text-xl">
                        <input
                          className="w-full border border-gray-300 p-4 rounded text-base leading-4 placeholder-gray-600 text-gray-600"
                          type="text"
                          placeholder="주문시 요청사항을 입력하세요"
                          onChange={
                            (handleResizeHeight,
                            (e) => {
                              sedivequest(e.target.value);
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-gray-100 py-7 xl:py-10 px-10 xl:w-full shadow-md">
                <span className="mb-4 text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                  결제 수단 선택
                </span>
                <div className="flex flex-col itmes-center w-full">
                  <div className="mx-5">
                    <div className="flex flex-col gap-5 py-7">
                      <div className="flex justify-start py-7">
                        <div className="w-1/4 text-xl font-semibold">
                          <div className="flex items-center gap-2">
                            <input
                              className="focus:outline-none border border-gray-400 rounded-full cursor-pointer w-5 h-5 checked:border-[5px] checked:border- checked:border-[#1B3C34]"
                              type="radio"
                              name="payment"
                              value="membership"
                              checked
                            />
                            <span className="text-xl">멤버십 결제</span>
                          </div>
                        </div>
                        <div className="text-slate-500 text-xl">
                          <div className="w-full">
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
                                  카드명 : {detail.cardName}
                                  <br /> 카드잔액 : {detail.money}원
                                </span>
                                <button
                                  className="p-[10px] bg-white border-2 border-[#006633] rounded font-bold mb-2"
                                  onClick={reviewCard}
                                >
                                  충전하기
                                </button>
                                <button
                                  className="p-[10px] bg-white border-2 border-[#006633] rounded font-bold"
                                  onClick={pay}
                                >
                                  결제하기
                                </button>
                                <CardQrModal
                                  isopen={isOpen}
                                  setIsOpen={setIsOpen}
                                  detail={detail}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="flex mx-10 justify-between">
                        <div className="flex justify-between w-2/5">
                          <div className="flex items-center gap-2">
                            <input
                              className="focus:outline-none border border-gray-400 rounded-full cursor-pointer w-5 h-5 checked:border-[5px] checked:border- checked:border-[#1B3C34]"
                              type="radio"
                              name="payment"
                              value="membership"
                              checked
                            />
                            <span className="text-xl">멤버십 결제</span>
                          </div>
                        </div>
                        <Link
                          to="/payment"
                          className="flex justify-center w-[13%] px-5 py-3 text-sm text-gray-100 bg-[#1B3C34] rounded"
                          onClick={pay}
                        >
                          <span className="text-xl">결제하기</span>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CheckouttCss>
  );
};

export default Checkout;
