import React from "react";
import PostCard from "./PostCard";
import { Divider } from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";
import PostCard2 from "./PostCard2";

const SuggestedPosts = () => {
  const handleViewBlog = () => {
    window.location.href = "/post";
  };

  return (
    <div className="py-4 flex-col gap-2 w-auto ">
      <div className="flex flex-col gap-2 justify-center ">
        <h1 className="text-md flex font-bold justify-between justify-center items-end">
          Suggested Posts{" "}
        </h1>
        <Divider />
      </div>
      {/* grid card display here */}
      <div className="flex flex-row gap-2 flex-wrap py-4 justify-center items-center">
        <PostCard2 />
        <PostCard2 />
        <PostCard2 />
        <PostCard2 />
      </div>
    </div>
  );
};

export default SuggestedPosts;
