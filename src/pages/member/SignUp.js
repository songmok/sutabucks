import React from "react";
import SignUpDiv from "../../style/memberCss/signUpCSS";
import { Err, Div } from "../../style/memberCss/basicCSS";
import FindImg from "asset/images/icon_find_sally.png";
import { Link } from "react-router-dom";
// 리엑트 훅 폼 라이브러리 사용
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="my-8 text-white">d</div>
      <Div>
        <img src={FindImg} alt="" className="pt-9" />
        <p>회원정보를 입력해 주세요.</p>
      </Div>
      <SignUpDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <input
                type="email"
                placeholder="아이디"
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                })}
              />
              {errors.email && <Err>{errors.email.message}</Err>}
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
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
              <input
                type="password"
                placeholder="비밀번호 확인"
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
              <label>생년월일</label>
              <input
                type="date"
                placeholder="생년월일을 입력하세요."
                className="mr-56 box"
                {...register("year", {
                  required: "생년월일을 입력해주세요.",
                })}
              />
              {errors.year && <Err>{errors.year.message}</Err>}
              <span className="mt-2">
                회원 가입 완료 후 스타벅스 카드를 등록하시면 생일 무료음료
                <br />
                쿠폰이 발행됩니다.
              </span>
            </div>
            <div>
              <label>휴대폰</label>
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
          </div>
          {/* 성공하면 /login 위에 함수에서 구현 */}
          <button type="submit">회원가입</button>
        </form>
        <Link to="/login" className="pb-8 ml-64">
          이미 가입하셨다면, 로그인해주세요!
        </Link>
      </SignUpDiv>
    </>
  );
};

export default SignUp;
