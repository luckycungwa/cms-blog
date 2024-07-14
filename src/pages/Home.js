import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import FeaturedPosts from "../components/FeaturedPosts";
import RecentPosts from "../components/RecentPostsGrid";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col gap-4 px-2 ">
        <div className="flex justify-center items-center my-8">
          <p className="text-2xl text-center font-bold uppercase mt-4">
            Discover the latest posts
          </p>
        </div>
        <FeaturedPosts />
        <RecentPosts />
      </div>
    </div>
  );
};

export default Home;
