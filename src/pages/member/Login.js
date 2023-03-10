import React from "react";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginAccount } from "../../reducer/loggedState";
import LoginDiv, { BgSection } from "../../style/memberCss/loginCSS";
import { Err } from "../../style/memberCss/basicCSS";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const body = {
      miId: data.email,
      miPwd: data.pw,
    };
    await axios
      .post("member/login", body)
      .then((res) => {
        if (res.data.status) {
          console.log("유저정보", res.data);
          dispatch(loginAccount(res.data));
          alert(`${res.data.data.miNickname} 님 환영합니다.`);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("존재하지 않는 회원정보 입니다.");
      });
  };

  return (
    <>
      <BgSection>
        <h1 className=" text-center text-3xl mb-8 text-white ">로그인</h1>
        <LoginDiv>
          <div className="ml-5 py-5 border-b ">
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
              autoComplete="on"
              {...register("pw", {
                required: "비밀번호를 입력해주세요.",
                minLength: {
                  value: 8,
                  message: "최소 8자 이상의 비밀번호를 입력해주세요.",
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
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-green-700"
                />
              </label>
              <span className="ml-2 mt-3">아이디 저장</span>
            </div>
            <button type="submit" disabled={isSubmitting}>
              로그인
            </button>
            <div className="flex items-center justify-around m-5">
              <Link to="/signup">회원가입</Link>|
              <Link to="/idfind">아이디 찾기</Link>|
              <Link to="/pwfind">비밀번호 찾기</Link>
            </div>
          </form>
        </LoginDiv>
      </BgSection>
    </>
  );
};

export default Login;
