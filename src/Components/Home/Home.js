import React from "react";

const Home = () => {
  return (
    <div className="flex items-center m-10">
      <div className="w-[800px] ">
        <h1 className="text-5xl font-bold">
          {" "}
          <span className="text-sky-500">
            YOUR NEXT PHONE<br></br>{" "}
          </span>{" "}
          WILL BE THE BEST PHONE!!!{" "}
        </h1>
        <p className="my-3 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          dignissimos sint quaerat eos cumque harum ducimus id sunt illum velit
          mollitia sapiente autem repellendus dicta iusto quasi rerum veniam,
          illo magni consectetur natus labore sed! Temporibus harum distinctio
          praesentium excepturi.
        </p>

        <button className="bg-red-500 p-2 rounded">Live Demo</button>
      </div>

      <div className="w-[700px]">
        <img
          className=" h-[500px]"
          src="https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-65749.jpg?t=st=1649000045~exp=1649000645~hmac=b3cb2255460996e33615e3920cd1c66a101fdb42fa55df986875036987bc4c87&w=740"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
