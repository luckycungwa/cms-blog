import {
  Button,
  Textarea,
  Card,
  CardHeader,
  CardBody,
  Divider,
  User,
  CardFooter,
} from "@nextui-org/react";
import React from "react";
import { BsFillReplyAllFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const CommentSection = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (value) => {
    setValue(value);
  };

  const handleReply = () => {
    console.log("reply");
  };

  const handleSubmitCOmment = () => {
    console.log("submit");
  };

  const comments = [
    {
      id: 1,
      name: "John Doe",
      date: "10/08/2024",
      text: "This is a great article!",

      replies: [
        {
          id: 2,
          name: "Jane Doe",
          date: "10/08/2024",
          text: "I completely agree!",
        },
        {
          id: 3,
          name: "John Doesnaught",
          date: "10/08/2024",
          text: "Thanks for sharing!",
        },
      ],
    },
    {
      id: 4,
      name: "Admin",
      date: "10/08/2024",
      text: "I have a question about this topic...",
    },
  ];

  return (
    <>
      <div className="my-8 w-auto flex flex-col">
        <p className="text-xl font-bold mb-2">Comments</p>
        <Textarea
          isInvalid={true}
          variant="bordered"
          placeholder="Enter your comment"
          errorMessage="The comment should be at least 10 characters long."
        />
        <Button
          size="sm"
          color="secondary"
          className="mt-4 flex"
          auto
          rounded
          shadow
        >
          Post Comment
        </Button>
      </div>
      <div>
        <div className="my-4 flex flex-col gap 2">
          {comments.map((comment) => (
            <div key={comment.id}>
              <Card className="my-2">
                <CardHeader>
                  <CardHeader className="flex gap-2 flex-row justify-between items-start">
                    <User
                      size="xs"
                      name={comment.name}
                      description={comment.text}
                      avatarProps={{
                        src: "https://api.dicebear.com/9.x/fun-emoji/svg",
                      }}
                      alt={comment.name + "avatar"}
                    />
                    <Button
                      isIconOnly
                      color="secondary"
                      variant="subtle"
                      onClick={handleReply}
                    >
                      <FiArrowRight size={12} />
                    </Button>
                  </CardHeader>
                </CardHeader>
                <CardBody>
                  {comment.replies && (
                    <div className="flex flex-col gap-1 flex-row justify-between">
                      {comment.replies.map((reply) => (
                        <div key={reply.id}>
                          <Card radius="">
                            <CardHeader className="flex gap-3 flex-row justify-between">
                              <User
                                name={reply.name}
                                description={reply.text}
                                avatarProps={{
                                  src: "https://api.dicebear.com/9.x/fun-emoji/svg?randomizeIds=true",
                                }}
                              />
                              <Button
                                isIconOnly
                                color="secondary"
                                variant="subtle"
                                onClick={handleReply}
                              >
                                <FiArrowRight size={12} />
                              </Button>
                            </CardHeader>
                          </Card>
                        </div>
                      ))}
                    </div>
                  )}
                </CardBody>
              </Card>
            </div>
          ))}
          
        </div>
        <Divider />
      </div>
    </>
  );
};

export default CommentSection;
