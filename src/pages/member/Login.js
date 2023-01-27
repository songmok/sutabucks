import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginDiv from "../../style/memberCss/loginCSS";
import { Err } from "../../style/memberCss/basicCSS";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { loginAccount } from "../../reducer/loggedState";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [validText, setValidText] = useState("");
  // const [isValid, setIsValid] = useState({
  //   isEmail: false,
  // });

  const onSubmit = (data, user) => {
    console.log("데이터", data);
    // const exp = /\S+@\S+\.\S+/;
    // if (!exp.test(email)) {
    //   setValidText("이메일을 확인해주세요");
    //   setIsValid({ ...isValid, isEmail: false });
    // } else {
    //   setValidText("");
    //   setIsValid({ ...isValid, isEmail: true });
    // }

    const body = {
      id: data.email,
      pwd: data.pw,
    };
    axios
      .post("member/login", body)
      .then((res) => {
        // console.log(res.data);
        const userInfo = {
          email: data.email,
          name: user.name,
        };
        console.log("유저", userInfo);
        dispatch(loginAccount(userInfo));
        // 나중에 홈으로 변경
        navigate("/mypage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 아이디 저장체크시
  // const [email, setEmail] = useState("");
  // const [isRemember, setIsRemember] = useState(false);
  // const [cookies, setCookie, removeCookie] = useCookies(["rememberEmail"]);
  // useEffect(() => {
  //   if (cookies.rememberEmail !== undefined) {
  //     setEmail(cookies.rememberEmail);
  //     setIsRemember(true);
  //   }
  // }, []);

  // const handleOnChange = (e) => {
  //   setIsRemember(e.target.check);
  //   if (e.target.check) {
  //     setCookie("rememberEmail", email, { maxAge: 2000 });
  //   } else {
  //     removeCookie("rememberEmail");
  //   }
  // };

  // const handleEmailOnChange = (e) => {
  //   setEmail(e.target.value);
  // };

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
            // value={email}
            // onChange={(e) => handleEmailOnChange(e)}
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
              <input
                type="checkbox"
                // onChange={handleOnChange}
                // checked={isRemember}
                className="accent-green-700"
              />
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
