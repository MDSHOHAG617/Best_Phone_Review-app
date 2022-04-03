import React from "react";
import useReviews from "../Hook/useReviews";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  console.log(reviews);
  return (
    <div>
      <h1>Welcome to reviews</h1>
      <h1>Reviews: {reviews.length}</h1>
    </div>
  );
};

export default Reviews;
