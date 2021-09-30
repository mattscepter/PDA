import React from "react";
import "./Counter.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter({ end, text }) {
  return (
    <div className="Counter">
      <div className="Counter__circle">
        <div className="Counter__circletext">
          <CountUp end={end} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <span>+</span>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Counter;
