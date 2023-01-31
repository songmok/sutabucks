import React, { useState } from "react";
import SignUpDiv from "../../style/memberCss/signUpCSS";
import { Div, Err } from "../../style/memberCss/basicCSS";
import { useForm } from "react-hook-form";
import CloseModal from "././modals/CloseModal";
import CardModal from "././modals/CardModal";
import { useDispatch, useSelector } from "react-redux";
import { loginAccount, logoutAccount } from "../../reducer/loggedState";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  const [id, setId] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const closeAccount = () => {
    setIsOpen(true);
  };
  const [isCard, setIsCard] = useState(false);
  const closeCard = () => {
    setIsCard(true);
  };

  const btStyle = {
    position: "absolute",
    top: "24.5%",
    right: "34%",
    border: "2px solid #006633",
    padding: "10px",
    backgroundColor: "#fff",
    color: "#006633",
    fontWeight: "bold",
    borderRadius: "10px",
  };

  return (
    <>
      <div className="text-center text-3xl mb-8 mt-14 ">
        개인정보 확인 및 수정
      </div>
      <button style={btStyle} onClick={closeCard}>
        멤버십 카드
      </button>
      <CardModal isopen={isCard} setIsOpen={setIsCard} />
      <SignUpDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>{user.email}</label>
            <input
              type="email"
              required
              maxLength={20}
              value={user.email}
              disabled
            />
          </div>
          <div className="relative items-start ">
            <label>이름</label>
            <input
              type="text"
              className="w-72"
              {...register("name", {
                required: "이름을 입력해주세요.",
                maxLength: 10,
              })}
            />
            <span className="absolute top-16 right-16 ">
              <label className="pr-5">
                <input
                  type="radio"
                  name="gender"
                  className="accent-green-800 shadow-none"
                />
                남자
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  className="accent-green-800"
                />
                여자
              </label>
            </span>
            {errors.name && <Err>{errors.name.message}</Err>}
          </div>
          <div>
            <label>닉네임</label>
            <input
              type="text"
              {...register("nickName", {
                required: "닉네임을 입력해주세요.",
                maxLength: 10,
              })}
            />
            {errors.nickName && <Err>{errors.nickName.message}</Err>}
          </div>
          <div>
            <label>생년월일(필수)</label>
            <input
              type="date"
              placeholder="생년월일을 입력하세요."
              className="mr-56"
              {...register("year", {
                required: "생년월일을 입력해주세요.",
              })}
            />
            {errors.year && <Err>{errors.year.message}</Err>}
            <span className="mt-3">
              생일 무료 음료 쿠폰은 1년에 1번만 발행되므로, 변경 후에도 해당
              <br />
              연도 내 발행 이력이 있는 경우 추가 발행되지않습니다.
            </span>
          </div>
          <div>
            <label>휴대폰(필수)</label>
            <input
              type="tel"
              {...register("tel", {
                required: "휴대폰 번호를 입력해주세요.",
                maxLength: 11,
              })}
            />
            {errors.tel && <Err>{errors.tel.message}</Err>}
          </div>
          <div>
            <label>배송 주소</label>
            <input type="text" />
          </div>
          <div>
            <label>상세 주소</label>
            <input type="text" />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              autoComplete="on"
              {...register("pw", {
                required: "비밀번호를 입력해주세요.",
                minLength: {
                  value: 6,
                  message: "최소 6자 이상의 비밀번호를 입력해주세요.",
                },
                maxLength: {
                  value: 16,
                  message: "최소 16자 이하의 비밀번호를 입력해주세요.",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message: "영문, 숫자를 혼용하여 입력해주세요.",
                },
              })}
            />
            {errors.pw && <Err>{errors.pw.message}</Err>}
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input
              type="password"
              autoComplete="on"
              {...register("pwConfirm", {
                required: "비밀번호를 확인해주세요!",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { pw } = getValues();
                    return pw === value || "비밀번호가 일치하지 않습니다";
                  },
                },
              })}
            />
            {errors.pwConfirm && <Err>{errors.pwConfirm.message}</Err>}
          </div>
          <button type="submit">정보수정</button>
        </form>
        {/* 회원탈퇴 모달창만들기 */}
        <button onClick={closeAccount}>회원 탈퇴</button>
        <CloseModal isopen={isOpen} setIsOpen={setIsOpen} />
      </SignUpDiv>
    </>
  );
};

export default MyPage;
