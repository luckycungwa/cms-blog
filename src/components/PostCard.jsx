import React from "react";
import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";

const PostCard = ({ post }) => {
  if (!post) {
    return null;
  }

  const TruncateText = ({ text, lines }) => {
    const truncatedText = text.split('\n').slice(0, lines).join('\n');
    return (
      <>
        {truncatedText}
        {text.split('\n').length > lines ? '...' : ''}
      </>
    );
  };
  // navigate to Post with card data
  const handleReadPost = () => {
    window.location.href = "/blog";
  };

  return (
    <>
      <Card isPressable className="py-1 max-w-[320px] min-w-[320px] max-h-[420px] min-h-[420px]" onClick={handleReadPost}>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={post.image.alt}
            className="object-cover rounded-xl"
            src={post.image.url || 'https://nextui.org/images/hero-card-complete.jpeg'}
          />
        </CardBody>
        <CardHeader className="text-start flex gap-2 pb-4 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large mb-2 truncate-text2">
          {post.title}
          </h4>

          <p className="text-default-500 truncate-text mb-2">{post.briefDescription}</p>
          <div className="flex justify-between w-full items-center pt-2">
            <small className="text-default-500">{new Date(post.publishedDate).toLocaleDateString()}</small>
            <small className="text-default-500">
              <Chip size="sm" color="default" className="px-2">
              {post.category?.name || 'Uncategorized'}
              </Chip>
            </small>
          </div>
        </CardHeader>
      </Card>
    </>
  );
};

export default PostCard;
