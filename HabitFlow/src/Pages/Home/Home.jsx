import React from "react";
import HomeHeading from "../../components/HomeComponents/HomeHeading";
import HeroSection from "../../components/HomeComponents/HeroSection";

const Home = () => {
  const count = 0;

  return (
    <div className="w-full lg:max-w-6xl lg:mx-auto py-2">
      <HomeHeading />

      {
        count <1 ? <HeroSection/> : "<h2>Go Go Run</h2>"
      }


    </div>
  );
};

export default Home;
