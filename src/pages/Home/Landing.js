import React from "react";
import Bucketgirl from "../../assets/images/bucketgirl.png";
const Landing = () => {
  return (
    <div className="relative">
      <div className="hero  h-screen lg:h-[60vh] relative z-10 bg-accent">
        <div className="hero-content mt-10 flex-col lg:flex-row">
          <div className="mt-8">
            <p>Best Quality</p>
            <h1 className="text-5xl font-bold">
              Professional Cleaning Service
            </h1>
            <p className=" py-6 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>

            <button className="btn btn-primary">GET STARTED</button>
          </div>
          <div className=" lg:h-[60vh] shrink-0">
            <img src={Bucketgirl} className=" h-full " alt="" />
          </div>
        </div>
      </div>
      <div className="shadow-lg w-5/6 mx-auto  bg-base-200 p-10 z-20 mt-[-50] relative rounded-2xl">
        <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <button className='btn btn-primary mt-5'>Get a Quote</button>
      </div>
    </div>
  );
};

export default Landing;
