import React from "react";
import { Link } from "react-router-dom";
import PagesLinkCss from "style/PagesHeaderCss/PagesLink";

const PagesLink = ({
  first,
  second,
  firstLink,
  secondLink,
  third,
  thirdLink,
}) => {
  return (
    <PagesLinkCss>
      <ul className="wrap">
        <li>
          <Link to="/" className="item">
            홈
          </Link>
        </li>
        {first === undefined ? (
          ""
        ) : (
          <>
            <li className="arrow">{">"}</li>
            <li>
              <Link to={`/${firstLink}`} className="item">
                {first}
              </Link>
            </li>
          </>
        )}
        {second === undefined ? (
          ""
        ) : (
          <>
            <li className="arrow">{">"}</li>
            <li>
              <Link to={`/${secondLink}`} className="item">
                {second}
              </Link>
            </li>
          </>
        )}
        {third === undefined ? (
          ""
        ) : (
          <>
            <li className="arrow">{">"}</li>
            <li>
              <Link to={`/${thirdLink}`} className="item">
                {third}
              </Link>
            </li>
          </>
        )}
      </ul>
    </PagesLinkCss>
  );
};

export default PagesLink;
