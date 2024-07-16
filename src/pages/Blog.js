import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import { Button, Divider, Pagination } from "@nextui-org/react";
import PostCard from "../components/PostCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import SubscriptionSection from "../components/SubscriptionSection";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts(page);
        setPosts(response.docs);
        setTotalPages(response.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="justify-between flex-col px-5 lg:px-32 flex gap-8">
        <div className="flex flex-col gap-2 justify-center items-center ">
          <div className="flex flex-col gap-2 justify-center items-center my-8">
            <p className="text-2xl text-center font-bold uppercase mt-4">
              Discover the latest posts
            </p>{" "}
            <p className=" text-center text-gray-500 w-5/6">
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
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <Pagination total={totalPages} initialPage={1} onChange={(page) => setPage(page)} />
        </div>
        <SubscriptionSection />
      </div>
    </div>
  );
};

export default Blog;
