import React from "react";
import comingSoonImg from "../../assets/coming-soon.jpg";

function ComingSoon() {
  return (
    <div className="work__card">
      <img src={comingSoonImg} alt="" className="work__img" />
      <h3 className="work__title">Coming soon</h3>
    </div>
  );
}

export default ComingSoon;
