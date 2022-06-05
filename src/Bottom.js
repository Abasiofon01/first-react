import React from "react";
import "./index.css";
import bulb from "./big-light.png";
import carrot from "./carrot.png";
import infinity from "./infinity.png";

export default function Bottom() {
  return (
    <div className="bottomWrapper">
      <div className="bulb">
        <img src={bulb} alt="bulb" />
        <h4>Intuitive Thinking</h4>
        <p>
          A small river named Dudeb flows by their place and supplies it with
          the necessary regelialia Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iure, ipsam?
        </p>
      </div>
      <div className="carrot">
        <img src={carrot} alt="carrot" />
        <h4>Orange from Carrots</h4>
        <p>
          A small river named Dudeb flows by their place and supplies it with
          the necessary regelialia Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iure, ipsam?
        </p>
      </div>
      <div className="infinity">
        <img src={infinity} alt="infinity" />
        <h4>Infinite Possibilities</h4>
        <p>
          A small river named Dudeb flows by their place and supplies it with
          the necessary regelialia Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iure, ipsam?
        </p>
      </div>
    </div>
  );
}
