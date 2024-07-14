import { Divider } from "@nextui-org/react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import PostCard from "./PostCard";

const SuggestedPosts = () => {
  const handleViewBlog = () => {
    window.location.href = "/blog";
  };

  return (
    <div>
      <div className="py-4 flex-col gap-2 lg:px-32">
      <div className="flex flex-col gap-2 justify-center px-5 lg:px-3">
          <h1 className="text-xl flex font-bold justify-between justify-center items-end">
            Suggested Posts{" "}
            <span
              className="tracking-wider text-sm text-gray-500 flex gap-1"
              onClick={handleViewBlog}
            >
              View All <FiArrowUpRight size={16} />{" "}
            </span>
          </h1>
          <Divider />
        </div>
        {/* grid card display here */}
        <div className="flex flex-row gap-4 flex-wrap py-4">
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default SuggestedPosts;
