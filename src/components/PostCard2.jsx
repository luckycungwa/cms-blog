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

  return (
    <>
      <Card isPressable as={Link} to={`/post/${post.id}`} className="w-full">
        <CardBody className="flex gap-4 flex-row">
          <Image
            alt={post.image.alt}
            height={100}
            radius="sm"
            src={post.image?.url || 'https://nextui.org/images/hero-card-complete.jpeg'}
            width={100}
          />
          <div className="flex flex-col gap-2">
            <p className="text-md font-bold truncate-text2">{post.title} </p>
            <p className="text-xs text-default-500 trancate-text">{new Date(post.publishedDate).toLocaleDateString()}</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default PostCard2;
