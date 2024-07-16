import React, { useState, useEffect } from "react";
import { getPosts } from "../services/api";
import { Button, Divider } from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";
import PostCard from "./PostCard";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts({ limit: 9, sort: '-publishedDate' });
        setPosts(fetchedPosts.docs);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleViewBlog = () => {
    window.location.href = "/blog";
  };

  return (
    <div className="py-4 flex-col gap-2 md:px-32 px-5">
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
      {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
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
