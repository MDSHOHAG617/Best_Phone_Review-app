import React from "react";

const AllReviewItems = (props) => {
  const { name, img, ratting, Review } = props.review;
  return (
    <div>
      <div className="rounded border-2 h-[280px] w-[300px] p-5 ">
        <img
          className="w-[100px] h-[100px] m-auto my-5 rounded-xl "
          src={img}
          alt=""
        />
        <h2 className="text-xl font-bold">{name}</h2>
        <h2>
          <span className="text-blue-700">Comments:</span> {Review}
        </h2>
        <h2>
          Ratings: <span className="text-blue-400">{ratting}</span>
        </h2>
      </div>
    </div>
  );
};

export default AllReviewItems;
