import React from "react";
import Bucketgirl from "../../assets/images/bucketgirl.png";
const Landing = () => {
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content mt-10 flex-col lg:flex-row">
        
        <div className="mt-8" >
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src={Bucketgirl} className="lg:h-full " alt="" />
      </div>
    </div>
  );
};

export default Landing;
