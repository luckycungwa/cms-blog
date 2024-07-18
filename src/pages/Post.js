import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPost } from "../services/api";
import { getCurrentUser } from "../services/auth-service";
import { getComments, likePost } from "../services/interactionService";
import { Divider, Button, Badge } from "@nextui-org/react";
import { FiHeart, FiShare } from "react-icons/fi";
import { BsChat } from "react-icons/bs";

import FeaturedPosts from "../components/FeaturedPosts";
import SuggestedPosts from "../components/SuggestedPosts";
import CommentSection from "../components/CommentSection";

// Recursive function to render content based on its type and properties
const renderContent = (content) => {
  return content.map((block, index) => {
    const children = block.children.map((child, childIndex) => {
      let childContent = child.text;

      // Apply inline formatting
      if (child.bold) {
        childContent = <strong key={childIndex}>{childContent}</strong>;
      }
      if (child.italic) {
        childContent = <em key={childIndex}>{childContent}</em>;
      }
      if (child.underline) {
        childContent = <u key={childIndex}>{childContent}</u>;
      }

      return childContent;
    });

    // Handle block elements
    switch (block.type) {
      case "h3":
        return <h3 key={index}>{children}</h3>;
      case "h4":
        return <h4 key={index}>{children}</h4>;
      case "h5":
        return <h5 key={index}>{children}</h5>;
      case "ul":
        return (
          <ul key={index}>
            {block.children.map((li, liIndex) => (
              <li key={liIndex}>{renderContent([li])}</li>
            ))}
          </ul>
        );
      case "li":
        return <li key={index}>{children}</li>;
      default:
        return <p key={index}>{children}</p>;
    }
  });
};

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(id);
        setPost(data);
        setLikes(data.likes || 0);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        setUser(user);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const data = await getComments(id);
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchPost();
    fetchCurrentUser();
    fetchComments();
  }, [id]);

  const handleLike = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      await likePost(id);
      setLikes(likes + 1);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.briefDescription,
        url: window.location.href,
      })
      .then(() => console.log('Post shared successfully'))
      .catch((error) => console.error('Error sharing post:', error));
    } else {
      // Fallback sharing method
      alert('Sharing is not supported on this browser.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <div className="w-full">
        <div className="post-hero flex justify-center items-end ">
          {/* post image */}
          <img
            src={post.image?.url || "no image"}
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
            <p className="text-xl font-bold my-4">{post.title}</p>
            <div className="text-sm">{renderContent(post.content)}</div>

            <div className="flex justify-between items-center mt-8">
              <p>Written by: {post.author || "Anonymous"}</p>
              {/* like, comment, and share buttons */}
              <div className="flex gap-4 items-center my-4">
                <Badge color="secondary" content={likes}>
                  <Button
                    size="sm"
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label="Likes"
                    onClick={handleLike}
                  >
                    <FiHeart size={16} />
                  </Button>
                </Badge>

                <Badge color="secondary" content={comments.length}>
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
                  onClick={handleShare}
                >
                  <FiShare size={16} />
                </Button>
              </div>
            </div>

            <Divider />
            {/* comment section */}
            <CommentSection user={user} comments={comments} setComments={setComments} />
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
