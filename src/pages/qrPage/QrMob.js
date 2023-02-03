import React, { useEffect } from "react";
import QrCss from "style/qrCss/qrCss";

const QrMob = () => {
  useEffect(() => {
    document.querySelector("header").style.display = "none";
  }, []);

  return (
    <>
      <QrCss>충전하시겠습니까</QrCss>
    </>
  );
};

export default QrMob;
