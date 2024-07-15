import { Divider, Image, Button, Badge } from "@nextui-org/react";
import React from "react";
import { FiHeart, FiShare } from "react-icons/fi";
import { BsChat } from "react-icons/bs";

import FeaturedPosts from "../components/FeaturedPosts";
import SearchBar from "../components/SearchBar";
import SuggestedPosts from "../components/SuggestedPosts";
import CommentSection from "../components/CommentSection";

const Post = () => {
  return (
    <>
      <div className="w-full">
        <div className="post-hero flex justify-center items-end ">
          {/* post image */}
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="hero"
            className="w-full object-cover post-hero-img"
          />
          {/* post title */}
          <div className="post-hero-content flex flex-col justify-center items-center">
            <p className="text-3xl font-bold text-white text-center">
              Post Title
            </p>
            <Divider />
          </div>
        </div>

        {/* post content */}
        <div className="md:grid md:grid-cols-12 flex flex-col text-start mt-16 px-5 lg:px-16 justify-between flex-col gap-16">
          <div className=" w-auto mb-8 flex flex-col w-1/2 lg:w-full col-span-12 md:col-span-8">
            <p className="text-xl font-bold my-4">
              Post Title: In the beginning
            </p>
            <p className="text-sm ">
              As a remote worker, staying focused and productive can be a
              challenge. With the absence of a traditional office environment,
              it's easy to get distracted and lose track of tasks. However, with
              the right tools, you can stay on top of your work and achieve your
              goals. Here are the top 5 productivity apps for remote workers:
              Trello: A visual project management tool that helps you organize
              tasks and collaborate with team members. RescueTime: A time
              management app that tracks how you spend your time on your
              computer or mobile device, providing insights on how to stay
              focused. Evernote: A note-taking app that allows you to capture,
              organize, and store information across multiple devices.
              Focus@Will: A music service specifically designed to help you
              concentrate and stay productive. Calendly: A scheduling tool that
              helps you manage meetings and appointments with ease.
            </p>

            <div className="flex justify-between items-center mt-8">
              <p>Written by: Author</p>
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
