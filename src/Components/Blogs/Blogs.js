import React from "react";

const Blogs = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold my-5">Welcome to Blogs</h1>

      <div className="card-container flex justify-center m-10 pb-80">
        <div className="border-2 border-black rounded m-5 p-5">
          <h1 className="text-xl font-bold my-3">What is Context Api?</h1>
          <p>
            Context Api is a a powerful features of react, it's allow us to
            ignore props drilling by using this we can provide variables
            globally. By using this we can provide variable grandparent to
            parent and so on. Context Api is react structure which is enables
            you to change uniquely details and assists in solving props-drilling
            from all levels of your react app.
          </p>
        </div>
        <div className="border-2 border-black rounded m-5 p-5">
          <h1 className="text-xl font-bold my-3">What is Semantic Tag?</h1>
          <p>
            Semantic means meaningful, so we can clearly understand the tag will
            be also meaningful. Elements such as header, footer amd article all
            are consider semantic because they are describing the purpose of the
            element and the type of content that is inside them. it's help us as
            a developer , because we can easily understand about the tag and
            also the roll of that particular tag.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
