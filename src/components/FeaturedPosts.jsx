import React from "react";
import PostCard from "./PostCard";
import { Divider } from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";

const FeaturedPosts = () => {
  const handleViewBlog = () => {
    window.location.href = "/blog";
  };

  return (
    <div className="py-4 flex-col gap-2 lg:px-32">
      <div className="flex flex-col gap-2 justify-center px-5">
        <h1 className="text-md flex font-bold justify-between justify-center items-end">
          Featured Posts{" "}
          <span
            className="tracking-wider text-xs text-gray-500 flex gap-1"
            onClick={handleViewBlog}
          >
            View All <FiArrowUpRight size={16} />{" "}
          </span>
        </h1>
        <Divider />
      </div>
      {/* grid card display here */}
      <div className="flex flex-row gap-4 flex-wrap py-4 justify-center items-center">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default FeaturedPosts;
