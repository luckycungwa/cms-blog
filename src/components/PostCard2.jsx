import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const PostCard2 = ({post}) => {

  const handleReadPost = () => {
    window.location.href = `/post/${post.id}`;
  };

  return (
    <>
     <Card isPressable className="py-1 max-w-[340px] min-w-[320px] max-h-[120px] min-h-[120px]" onClick={handleReadPost}>
        <CardBody className="flex gap-4 flex-row">
          <img
            alt={post.image.alt}
            className="object-cover w-[90px] h-[90px] rounded-xl"
            
            src={post.image?.url || 'https://nextui.org/images/hero-card-complete.jpeg'}
            
            
          />
          <div className="flex flex-col gap-2 justify-between">
            <p className="text-sm font-bold truncate-text2">{post.title} </p>
            <p className="text-xs font-light text-default-500 trancate-text">{new Date(post.publishedDate).toLocaleDateString()}</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default PostCard2;
