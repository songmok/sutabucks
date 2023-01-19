import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginDiv from "../../style/memberCss/loginCSS";
import { Err, Div } from "../../style/memberCss/basicCSS";

const Login = () => {
  
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* 배경이미지 삽입 */}
      <div className="text-center text-4xl font-semibold my-8">로그인</div>
      {/*  text-white 배경 삽입 후 추가 */}
      <LoginDiv>
        <div className="ml-5 pb-6 border-b ">
          <p>Welcome!</p> 수타벅스 코리아에 오신 것을 환영합니다.
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="아이디(이메일)를 입력해 주세요."
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors.email && <Err>{errors.email.message}</Err>}
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
          <div>
            <label>
              <input type="checkbox" className="accent-green-700" />
            </label>
            <span className="ml-2 mt-3">아이디 저장</span>
          </div>
          <button type="submit">로그인</button>
          <div className="flex items-center justify-around m-5">
            <Link to="/signup">회원가입</Link>|
            <Link to="/idfind">아이디 찾기</Link>|
            <Link to="/pwfind">비밀번호 찾기</Link>
          </div>
        </form>
      </LoginDiv>
    </>
  );
};

export default Login;
