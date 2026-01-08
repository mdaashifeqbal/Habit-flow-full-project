import React from "react";
import HomeHeading from "../../components/HomeComponents/HomeHeading";
import HeroSection from "../../components/HomeComponents/HeroSection";
import { useAuth } from "../../Hooks/useAuth";
import AppFeature from "../../components/HomeComponents/AppFeature";

const Home = () => {
  const { isAuth } = useAuth();

  return (
    <div className="w-full lg:max-w-6xl lg:mx-auto py-2">
      <HomeHeading />

      {isAuth ? <AppFeature /> : <HeroSection />}
    </div>
  );
};

export default Home;
