import React from "react";
import PagesHeaderCss from "style/PagesHeaderCss/pagesHeaderCss";

const PagesTitle = ({ title }) => {
  return (
    <PagesHeaderCss>
      <div className="SubHeader wrap">
        <h1 className="subHeader">{title}</h1>
      </div>
    </PagesHeaderCss>
  );
};

export default PagesTitle;
