import React, { useState, useEffect } from "react";
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
import { BsFillReplyAllFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { commentOnPost, getComments } from "../services/interactionService";
import { useParams, useNavigate } from "react-router-dom";

const CommentSection = ({ user, comments, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmitComment = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (newComment.length < 10) {
      alert("The comment should be at least 10 characters long.");
      return;
    }

    try {
      const response = await commentOnPost(id, newComment);
      setComments([...comments, response]);
      setNewComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <>
      <div className="my-8 w-auto flex flex-col">
        <p className="text-xl font-bold mb-2">Comments</p>
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          variant="bordered"
          placeholder="Enter your comment"
        />
        <Button
          size="sm"
          color="secondary"
          className="mt-4 flex"
          auto
          rounded
          shadow
          onClick={handleSubmitComment}
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
                      onClick={() => console.log("reply")}
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
                                onClick={() => console.log("reply")}
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
