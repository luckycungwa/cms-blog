import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import PostCard from "./PostCard";

const RecentPosts = () => {
  const handleViewBlog = () => {
    window.location.href = "/post";
  };

  return (
    <div className="py-4 flex-col gap-2 md:px-32">
      <div className="flex flex-col gap-2 justify-center md:px-3">
        <h1 className="text-md flex font-bold justify-between justify-center items-end">
          Recent Posts{" "}
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
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <div className="flex justify-center">
        <Button onClick={handleViewBlog} className="px-8">
          View All
        </Button>
      </div>
    </div>
  );
};

export default RecentPosts;
