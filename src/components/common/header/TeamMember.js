import React, { cloneElement } from "react";
import { Layout } from "utils/layout";
import img from "asset/images/card.png";

const TeamMember = () => {
  const btStyle = {
    border: "2px solid #006633",
    padding: "10px",
    backgroundColor: "#fff",
    color: "#006633",
    fontWeight: "bold",
    borderRadius: "10px",
  };

  return (
    <Layout>
      <h1 className="text-xl text-center pt-32">
        <span className="font-semibold text-2xl text-green-800">SUTABUCKS</span>{" "}
        의 멤버들을 소개합니다.
      </h1>
      <div className="flex flex-row justify-center gap-10">
        <div className="flex justify-center gap-16 pt-14">
          <div className="w-80">
            <img
              src={img}
              alt=""
              style={{ border: "1px solid black ", borderRadius: "4px" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="pb-6 text-lg">
              이름 : 오한수 <br /> 역할 : 프론트 팀장
            </span>
            <button
              style={btStyle}
              onClick={() => {
                window.open("https://github.com/songmok/sutabucks.git");
              }}
            >
              더 알아보기
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-16 pt-14">
          <div className="w-80">
            <img
              src={img}
              alt=""
              style={{ border: "1px solid black ", borderRadius: "4px" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="pb-6 text-lg">
              이름 : 김철호 <br /> 역할 : 든든한 팀원
            </span>
            <button
              style={btStyle}
              onClick={() => {
                window.open("https://github.com/Haeparic/sutabucks.git");
              }}
            >
              더 알아보기
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-16 pt-14">
          <div className="w-80">
            <img
              src={img}
              alt=""
              style={{ border: "1px solid black ", borderRadius: "4px" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="pb-6 text-lg">
              이름 : 이예은 <br /> 역할 : 든든한 팀원
            </span>
            <button
              style={btStyle}
              onClick={() => {
                window.open("https://github.com/Yenhj/sutabucks-1.git");
              }}
            >
              더 알아보기
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="flex justify-center gap-16 pt-14">
          <div className="w-80">
            <img
              src={img}
              alt=""
              style={{ border: "1px solid black ", borderRadius: "4px" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="pb-6 text-lg">
              이름 : 이도영 <br /> 역할 : 백엔드 팀장
            </span>
            <button
              style={btStyle}
              onClick={() => {
                window.open("https://github.com/doyouee/Project1st");
              }}
            >
              더 알아보기
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-16 pt-14">
          <div className="w-80">
            <img
              src={img}
              alt=""
              style={{ border: "1px solid black ", borderRadius: "4px" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="pb-6 text-lg">
              이름 : 류승지 <br /> 역할 : 든든한 팀원
            </span>
            <button
              style={btStyle}
              onClick={() => {
                window.open("https://github.com/songmok/sutabucks.git");
              }}
            >
              더 알아보기
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-16 pt-14">
          <div className="w-80">
            <img
              src={img}
              alt=""
              style={{ border: "1px solid black ", borderRadius: "4px" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="pb-6 text-lg">
              이름 : 박진혁 <br /> 역할 : 든든한 팀원
            </span>
            <button
              style={btStyle}
              onClick={() => {
                window.open("https://github.com/songmok/sutabucks.git");
              }}
            >
              더 알아보기
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-16 pt-14">
          <div className="w-80">
            <img
              src={img}
              alt=""
              style={{ border: "1px solid black ", borderRadius: "4px" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="pb-6 text-lg">
              이름 : 주봉진 <br /> 역할 : 든든한 팀원
            </span>
            <button
              style={btStyle}
              onClick={() => {
                window.open("https://github.com/songmok/sutabucks.git");
              }}
            >
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamMember;
