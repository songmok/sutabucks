import React from "react";
import { Link } from "react-router-dom";
import PagesLinkCss from "style/pagesHeaderCss/pagesLink";

const PagesLink = ({
  first,
  second,
  firstLink,
  secondLink,
  third,
  thirdLink,
  count,
}) => {
  return (
    <PagesLinkCss>
      {count === "one" ? (
        <>
          <ul className="wrap">
            <li>
              <Link to="/" className="gray">
                홈
              </Link>
            </li>
            <li className="arrow">{">"}</li>
            <li>
              <Link to={`/${firstLink}`} className="item">
                {first}
              </Link>
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
      {count === "two" ? (
        <ul className="wrap">
          <li>
            <Link to="/" className="gray">
              홈
            </Link>
          </li>
          <li className="arrow">{">"}</li>
          <li>
            <Link to={`${firstLink}`} className="gray">
              {first}
            </Link>
          </li>
          <li className="arrow">{">"}</li>
          <li>
            <Link to={`${secondLink}`} className="item">
              {second}
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
      {count === "three" ? (
        <>
          <ul className="wrap">
            <li>
              <Link to="/" className="gray">
                홈
              </Link>
            </li>
            <li className="arrow">{">"}</li>
            <li>
              <Link to={`${firstLink}`} className="gray">
                {first}
              </Link>
            </li>
            <li className="arrow">{">"}</li>
            <li>
              <Link to={`${secondLink}`} className="gray">
                {second}
              </Link>
            </li>
            <li className="arrow">{">"}</li>
            <li>
              <Link to={`${thirdLink}`} className="item">
                {third}
              </Link>
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
    </PagesLinkCss>
  );
};

export default PagesLink;
