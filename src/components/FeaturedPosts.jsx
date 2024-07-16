import React, { useState, useEffect } from "react";
import { getPosts } from "../services/api";
import PostCard from "./PostCard";
import { Divider } from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts({ limit: 4, where: { featured: true } });
        setPosts(fetchedPosts.docs);
      } catch (error) {
        console.error("Error fetching featured posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleViewBlog = () => {
    window.location.href = "/post";
  };

  return (
    <div className="py-4 flex-col gap-2 md:px-32">
      <div className="flex flex-col gap-2 justify-center">
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
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
