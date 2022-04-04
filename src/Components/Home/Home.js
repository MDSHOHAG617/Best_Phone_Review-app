import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../Hook/useReviews";
import ReviewItems from "../ReviewItems/ReviewItems";
import Reviews from "../Reviews/Reviews";
const Home = () => {
  const [reviews] = useReviews();
  const navigate = useNavigate();
  let customerReview = reviews.slice(0, 3);

  const goToReviews = () => {
    navigate("/Reviews");
  };

  return (
    <div>
      <div className="flex items-center m-10">
        <div className="w-[800px] ">
          <h1 className="text-5xl font-bold">
            <span className="">
              YOUR NEXT PHONE<br></br>
            </span>
            <span className="text-violet-500">WILL BE THE BEST PHONE!!!</span>
          </h1>
          <p className="my-3 ">
            Your Next Phone Will Be The Best Phone. Because of technology is
            changing day by day which has some good and bad side for all of us.
            changing is good but it's too hurry to adapt with it, for this
            reason many of us fall back. Though we changing our personal smart
            phone after some time it's also bad for our financial condition. But
            the thing is you should adapt with the world as much as hurry
            possible. Here some of our clients Reviewing our products, so it
            could be helpful.
          </p>
          <button className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-sky-300  p-2 rounded text-xl font-medium text-white my-5 ">
            Live Demo
          </button>
        </div>
        <div className="w-[700px]">
          <img
            className="h-[500px]"
            src="https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-65749.jpg?t=st=1649000045~exp=1649000645~hmac=b3cb2255460996e33615e3920cd1c66a101fdb42fa55df986875036987bc4c87&w=740"
            alt=""
          />
        </div>
      </div>
      <div className="my-16">
        <h1 className="text-4xl font-bold">
          Customer Reviews ({reviews.slice(0, 3).length})
        </h1>
        <div className="">
          <div className="cards grid grid-cols-3 justify-items-center my-10  ">
            {customerReview.map((review) => (
              <ReviewItems key={review.id} review={review}></ReviewItems>
            ))}
          </div>
        </div>
        <button
          onClick={goToReviews}
          className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-sky-300  p-2 rounded text-xl font-medium text-white  "
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
