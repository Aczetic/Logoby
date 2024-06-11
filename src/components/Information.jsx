import React from "react";
import sittingWithLaptop from "../images/sittingWithLaptop.png";

const Information = ({ Heading, imgOrder = "orderLeft" }) => {
  return (
    <div class="information">
      <span
        class={`img ${imgOrder}`}
        style={{
          backgroundImage: `url(${sittingWithLaptop})`,
        }}
      ></span>
      <div class="data">
        <div class="Heading">
          {Heading.map((heading, index) => (
            <div class="heading">{heading}</div>
          ))}
        </div>
        <div class="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex inventore
          quia consequuntur
        </div>
        <div class="input">
          <input type="eamil" class="inputBox" placeholder="Your email" />
          <div class="button">Notify Me</div>
        </div>
      </div>
    </div>
  );
};

export default Information;
