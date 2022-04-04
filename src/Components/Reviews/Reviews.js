import React from "react";
import AllReviewItems from "../AllReviewItems/AllReviewItems";
import useReview from "../Hook/useReviews";

const Reviews = () => {
  const [reviews] = useReview();
  return (
    <div>
      <h1 className="text-3xl font-bold my-5">Welcome to reviews</h1>
      <h1 className="text-slate-400 font-normal">Reviews: {reviews.length}</h1>

      <div className="allReviewItems grid grid-cols-3 gap-4 justify-items-center my-10">
        {reviews.map((review) => (
          <AllReviewItems key={review.id} review={review}></AllReviewItems>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
