import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCss from "style/newsCss/eventCss";
import SubHeaderCss from "style/subHeaderCss/SubHeaderCss";
import axios from "axios";

const Event = ({ event }) => {
  return (
    <>
      <SubHeaderCss>
        <div className="SubHeader wrap">
          <h1 className="subHeader">이벤트</h1>
          <div className="link">
            <ul>
              <li>
                <Link to="/" className="item">
                  홈
                </Link>
              </li>
              <li className="arrow">{">"}</li>
              <li>
                <Link to="/news" className="item">
                  새소식
                </Link>
              </li>
              <li className="arrow">{">"}</li>
              <li>
                <Link to="/event" className="item">
                  이벤트
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SubHeaderCss>
      <EventCss>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {event.map((v, i) => {
                return (
                  <div className="group relative" key={i}>
                    <Link to={`/detail/${v.evSeq}`}>
                      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                        <img
                          src={v.evUri}
                          alt="Front of men&#039;s Basic Tee in black."
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full focus"
                        />
                      </div>
                    </Link>
                    <div className="mt-4 flex">
                      <div className="text">
                        <span>{v.evEndDate}</span>
                        <span>~</span>
                        <span>{v.evStartDate}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex">
                      <div className="title">
                        <h3>{v.evTitle}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* 추가됨 */}
            </div>
          </div>
        </div>
      </EventCss>
    </>
  );
};

export default Event;
