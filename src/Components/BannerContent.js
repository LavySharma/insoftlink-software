import React from "react";
import "./Banner.css";
export default function BannerContent(props) {
  return (
    <div>
      <p class="para">{props.children}</p>
    </div>
  );
}
