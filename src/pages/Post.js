import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/api";
import { Divider, Image, Button, Badge } from "@nextui-org/react";
import { FiHeart, FiShare } from "react-icons/fi";
import { BsChat } from "react-icons/bs";

import FeaturedPosts from "../components/FeaturedPosts";
import SearchBar from "../components/SearchBar";
import SuggestedPosts from "../components/SuggestedPosts";
import CommentSection from "../components/CommentSection";

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(id);
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <div className="w-full">
        <div className="post-hero flex justify-center items-end ">
          {/* post image */}
          <img
            src={post.image.url}
            alt={post.image.alt}
            className="w-full object-cover post-hero-img"
          />
          {/* post title */}
          <div className="post-hero-content flex flex-col justify-center items-center">
            <p className="text-3xl font-bold text-white text-center">
              {post.title}
            </p>
            <Divider />
          </div>
        </div>

        {/* post content */}
        <div className="md:grid md:grid-cols-12 flex flex-col text-start mt-16 px-5 lg:px-16 justify-between flex-col gap-16">
          <div className=" w-auto mb-8 flex flex-col w-1/2 lg:w-full col-span-12 md:col-span-8">
            <p className="text-xl font-bold my-4">
              {post.title}
            </p>
            <p className="text-sm ">
             {post.content}
            </p>

            <div className="flex justify-between items-center mt-8">
              <p>Written by: {post.author || "Anonymous"}</p>
              <div className="flex gap-4 items-center my-4">
                <Badge color="secondary" content="12">
                  <Button
                    size="sm"
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label="Likes"
                  >
                    <FiHeart size={16} />
                  </Button>
                </Badge>

                <Badge color="secondary" content="4">
                  <Button
                    size="sm"
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label="comments"
                  >
                    <BsChat size={16} />
                  </Button>
                </Badge>

                <Button
                  size="sm"
                  isIconOnly
                  color="default"
                  variant="faded"
                  aria-label="share post"
                >
                  <FiShare size={16} />
                </Button>
              </div>
            </div>

            <Divider />
            <CommentSection />
          </div>

          <div className="mb-8 w-auto flex flex-col col-span-12 lg:col-span-4">
            <SuggestedPosts />
            <Divider />
          </div>
        </div>
        <FeaturedPosts />
      </div>
    </>
  );
};

export default Post;
