import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth-service';
import { Button, Card, CardBody, Divider, Input, Link } from '@nextui-org/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      setError('Error logging in. Please check your credentials.');
    }
  };

  return (
    <div className="w-auto flex justify-center flex-col items-center gap-4 p-8">
      <Card shadow="sm" className="max-w-sm w-full">
        <CardBody className="flex flex-col gap-4 p-4">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <Divider />
          <Input
            placeholder="Username/email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg"
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg"
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <Button color="primary" onClick={handleLogin}>
            Login
          </Button>
          <p className="text-sm text-center">
            Don't have an account?{' '}
            <Link href="/signup" color="primary">
              Sign Up
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
