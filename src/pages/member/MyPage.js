import React, { useState } from "react";
import SignUpDiv from "../../style/memberCss/signUpCSS";
import { Err } from "../../style/memberCss/basicCSS";
import { useForm } from "react-hook-form";
import CloseModal from "././modals/CloseModal";
import CardModal from "././modals/CardModal";
import { useDispatch, useSelector } from "react-redux";
import axios from "api/axios";
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
  } = useForm({
    defaultValues: {
      email: `${user.miId}`,
      name: `${user.miName}`,
      gender: "male",
      nickName: `${user.miNickname}`,
      birth: `${user.miBirth}`,
      tel: `${user.miPhoneNum}`,
      address: `${user.miAddress}`,
      detailAddress: `${user.miDetailAddress}`,
    },
  });

  const onSubmit = async (data) => {
    console.log("데이터", data);
    const body = {
      miId: data.email,
      miPwd: data.pw,
      miName: data.name,
      miPhoneNum: data.tel,
      miAdress: data.address,
      miDetailAdress: data.detailAddress,
      miSeq: user.miSeq,
    };
    console.log("터치마바디", body);
    axios
      .patch("member/edit", body)
      .then((res) => {
        console.log(res);
        alert("회원정보가 수정되었습니다.");
      })
      .catch((err) => {
        console.log(err);
        alert("회원정보 수정에 실패하였습니다. 다시 시도해주세요.");
      });
  };

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
            <label>아이디</label>
            <input type="email" required disabled {...register("email")} />
          </div>
          <div className="relative items-start ">
            <label>{user.name}</label>
            <input
              type="text"
              className="w-72"
              disabled
              {...register("name", {
                required: "이름을 입력해주세요.",
                maxLength: 10,
              })}
            />
            <span className="absolute top-11 right-16 ">
              <label className="pr-5">
                <input
                  type="radio"
                  name="gender"
                  className="accent-green-800 shadow-none"
                  value="male"
                  {...register("gender")}
                />
                남자
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  className="accent-green-800"
                  value="female"
                  {...register("gender")}
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
              {...register("birth", {
                required: "생년월일을 입력해주세요.",
              })}
            />
            {errors.birth && <Err>{errors.birth.message}</Err>}
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
            <input type="text" {...register("address")} />
          </div>
          <div>
            <label>상세 주소</label>
            <input type="text" {...register("detailAddress")} />
          </div>
          <div>
            <label>새 비밀번호</label>
            <input
              type="password"
              autoComplete="on"
              {...register("pw", {
                minLength: {
                  value: 8,
                  message: "최소 8자 이상의 비밀번호를 입력해주세요.",
                },
                maxLength: {
                  value: 16,
                  message: "최소 16자 이하의 비밀번호를 입력해주세요.",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: "영문, 숫자를 혼용하여 입력해주세요.",
                },
              })}
            />
            {errors.pw && <Err>{errors.pw.message}</Err>}
          </div>
          <div>
            <label>새 비밀번호 확인</label>
            <input
              type="password"
              autoComplete="on"
              {...register("pwConfirm", {
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
