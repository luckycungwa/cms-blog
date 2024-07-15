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

const PostCard2 = () => {
  return (
    <>
      <Card className="w-full">
        <CardBody className="flex gap-4 flex-row">
          <Image
            alt="nextui logo"
            height={100}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={100}
          />
          <div className="flex flex-col gap-2">
            <p className="text-md font-bold truncate-text2">Replace: Fetch title of the post from cms api </p>
            <p className="text-xs text-default-500 trancate-text">01 August 2024</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default PostCard2;
