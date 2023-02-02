import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

const Timer = ({ setIsOpen }) => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(179);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(
    (setIsOpen) => {
      // 타임아웃이 발생했을 경우
      if (time.current <= 0) {
        console.log("타임 아웃");
        clearInterval(timerId.current);
        // dispatch event
        setIsOpen(false);
      }
    },
    [sec]
  );

  const TimerDiv = styled.div`
    // bottom: 100px;
    // right:
    width: 46.5px;
    border-bottom: 1px solid darkgreen;
    // padding: 5px;
    white-space: nowrap;
  `;

  return (
    <TimerDiv>
      0{min} :{sec < 10 ? `0${sec}` : sec}
    </TimerDiv>
  );
};

export default Timer;
