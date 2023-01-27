import React from "react";
import { Link } from "react-router-dom";
import SubHeaderCss from "style/subHeaderCss/SubHeaderCss";

const Maps = () => {
  return (
    <>
      <SubHeaderCss>
        <div className="SubHeader wrap">
          <h1 className="subHeader">매장찾기</h1>
          <div className="link">
            <ul>
              <li>
                <Link to="/" className="item">
                  홈
                </Link>
              </li>
              <li className="arrow">{">"}</li>
              <li>
                <Link to="/maps" className="item">
                  매장찾기
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SubHeaderCss>
      {/* <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="1920"
        height="1080"
        src="http://192.168.0.190:3000/"
      ></iframe> */}
    </>
  );
};

export default Maps;
