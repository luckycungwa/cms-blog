import React from "react";
import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";

const PostCard = ({ post }) => {
  // const text = post.content;
  const text =
    "Artificial intelligence (AI) is transforming the music industry in ways we never thought possible. From music composition to audio mastering, AI is changing the game for musicians, producers, and music enthusiasts alike. Here are some ways AI is impacting the music industry and making it even more exciting.";

  const TruncateText = ({ text, lines }) => {
    const truncatedText = text.split("\n").slice(0, lines).join("\n");
    return (
      <p className="text-tiny font-normal truncate-text">
        {truncatedText}
        {text.split("\n").length > lines ? "..." : ""}
      </p>
    );
  };
  // navigate to Post with card data
  const handleReadPost = () => {
    window.location.href = "/blog";
  };

  return (
    <>
      <Card isPressable className="py-1 max-w-[320px]" onClick={handleReadPost}>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
        <CardHeader className="flex gap-2 pb-4 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large mb-2 truncate-text2">
            The Beat of the Future: Ai egee ewgwe  gewgwgew weg wg we gew weweg  of the Future: Ai egee ewgwe  gewgw {" "}
          </h4>

          <TruncateText text={text} lines={2} />
          <div className="flex justify-between w-full items-center pt-2">
            <small className="text-default-500">12/12/2022</small>
            <small className="text-default-500">
              <Chip size="sm" color="default" className="px-2">
                Entertainment
              </Chip>
            </small>
          </div>
        </CardHeader>
      </Card>
    </>
  );
};

export default PostCard;
