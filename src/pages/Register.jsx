import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth-service";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Input,
  Link,
} from "@nextui-org/react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const notify = () => toast.success(<p className="text-sm">Registration Successful</p>);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }
    try {
      await register(email, password, username);
      
      notify();
      navigate('/');
    } catch (error) {
      setError("Error registering. Please try again.");
    }
  };

  return (
    <div className="w-auto flex flex-col justify-center items-center gap-4 p-8">
      <Card shadow="sm" className="max-w-sm w-full">
        <CardBody className="flex flex-col gap-4 p-4">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <Divider />
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="rounded-lg"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="rounded-lg"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="rounded-lg"
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <Button color="primary" onClick={handleRegister}>
            Sign Up
          </Button>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/login" color="primary">
              Login
            </Link>
          </p>
        </CardBody>
      </Card>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
          transition={Slide}
      />
    </div>
  );
};

export default Register;
