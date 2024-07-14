import { Button, Divider, Pagination } from "@nextui-org/react";
import React from "react";
import PostCard from "../components/PostCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import SubscriptionSection from "../components/SubscriptionSection";

const Blog = () => {
  const handleViewBlog = () => {
    window.location.href = "/blog";
  };

  return (
    <div>
      <div className="justify-between flex-col px-5 lg:px-32 flex gap-8">
        <div className="flex flex-col gap-2 justify-center items-center ">
        <div className="flex flex-col gap-2 justify-center items-center my-8">
          <p className="text-2xl text-center font-bold uppercase mt-4">
            Discover the latest posts
          </p> <p className=" text-center text-gray-500 w-5/6">
          Where Conversations Start and Ideas Take Flight{" "}
          </p>
        </div>
         
          <Divider />
        </div>
        {/* grid card display here */}
        <div className="flex flex-row gap-4 flex-wrap justify-between lg:flex-row-reverse items-center items-center">
          <SearchBar />
          <CategoryFilter />
          
        </div>
        <div className="flex flex-row lg:justify-between gap-4 flex-wrap py-4 justify-center items-start">

          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        <div className="flex justify-center mb-8">
        <Pagination showControls total={5} initialPage={1} />
        </div>
        <SubscriptionSection />
      </div>
    </div>
  );
};

export default Blog;
