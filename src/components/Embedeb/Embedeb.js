import React from "react";

const Embedeb = () => {
  return (
    <div className="text-center w-75 mx-auto">
      <h1 className=" text-success my-5 border-top border-5 border-success rounded border-bottom py-3">
        Tour Advice in 1 min.
      </h1>
      <iframe
        className="text-center w-100"
        src="https://www.youtube.com/embed/EnX1wLPjxVw"
        height="350px"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Embedeb;
