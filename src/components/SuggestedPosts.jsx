import React, { useState, useEffect } from "react";
import { Divider } from "@nextui-org/react";
import PostCard2 from "./PostCard2";
import {getPosts} from "../services/api"

const SuggestedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts({ limit: 4, where: { featured: true } });
        setPosts(fetchedPosts.docs);
      } catch (error) {
        console.error("Error fetching suggested posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="py-4 flex-col gap-2 w-auto px-5">
      <div className="flex flex-col gap-2 justify-center ">
        <h1 className="text-md flex font-bold justify-between justify-center items-end">
          Suggested Posts{" "}
        </h1>
        <Divider />
      </div>
      {/* grid card display here */}
      <div className="flex flex-row gap-2 flex-wrap py-4 justify-center items-center">
      {posts.map((post) => (
          <PostCard2 key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
