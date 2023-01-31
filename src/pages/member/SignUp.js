import React, { useState } from "react";
import SignUpDiv from "../../style/memberCss/signUpCSS";
import { Err, Div } from "../../style/memberCss/basicCSS";
import FindImg from "asset/images/icon_find_sally.png";
import { Link, useNavigate } from "react-router-dom";
// 리엑트 훅 폼 라이브러리 사용
import { useForm } from "react-hook-form";
import Post from "pages/member/Post";
import axios from "../../api/axios";
import { useHistory } from "react-router-dom";
import { loginAccount, logoutAccount } from "../../reducer/loggedState";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  // react-hook0-form 적용
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: user });

  const onSubmit = async (data) => {
    // console.log("데이터", data);
    const body = {
      miId: data.email,
      miPwd: data.pw,
      miName: data.name,
      miNickname: data.nickname,
      miBirth: data.birth,
      miPhoneNum: data.tel,
      miAddress: enroll_company.address,
      miDetailAddress: detailAddress,
    };
    await axios
      .post("member/join", body)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.status) {
          alert("수타벅스의 회원이 되신 것을 환영합니다.");
          navigate("/login");
        } else {
          alert("회원등록에 실패하였습니다. /n 다시 시도해주세요.");
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  const [detailAddress, setDetailAddress] = useState("");
  // 다음 배송주소
  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });
  const [popup, setPopup] = useState(false);
  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };
  const handleComplete = (e, data) => {
    e.preventDefault();
    setPopup(!popup);
  };

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
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
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
                {...register("nickname", {
                  required: "닉네임을 입력해주세요.",
                  maxLength: 10,
                })}
              />
              {errors.nickname && <Err>{errors.nickname.message}</Err>}
            </div>
            <div>
              <label>생년월일</label>
              <input
                type="date"
                placeholder="생년월일을 입력하세요."
                className="mr-56 box"
                {...register("birth", {
                  required: "생년월일을 입력해주세요.",
                })}
              />
              {errors.birth && <Err>{errors.birth.message}</Err>}
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
              <input
                name="address"
                type="text"
                required={true}
                onChange={handleInput}
                value={enroll_company.address}
                onClick={handleComplete}
              />
              {popup && (
                <Post company={enroll_company} setcompany={setEnroll_company} />
              )}
            </div>
            <div>
              <label>상세 주소</label>
              <input
                type="text"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
              />
            </div>
          </div>
          {/* 성공하면 /login 위에 함수에서 구현 */}
          <button type="submit" disabled={isSubmitting}>
            회원가입
          </button>
        </form>
        <Link to="/login" className="pb-8 ml-64">
          이미 가입하셨다면, 로그인해주세요!
        </Link>
      </SignUpDiv>
    </>
  );
};

export default SignUp;
