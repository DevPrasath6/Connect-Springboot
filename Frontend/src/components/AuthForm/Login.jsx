import {React,useState} from 'react'
import { Button, Input, VStack, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1010'

function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const[input,setInput] = useState({
    username : "",
    password : "",
  });

  const handleLogin = async () => {
    if (!input.username.trim() || !input.password.trim()) {
      toast({
        title: 'Missing details',
        description: 'Please enter both username and password.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: input.username.trim(),
          password: input.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('connect_user', JSON.stringify({ username: data.username }));
      toast({
        title: 'Welcome back',
        description: 'Login successful.',
        status: 'success',
        duration: 2500,
        isClosable: true,
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error.message || 'Could not login. Please try again.',
        status: 'error',
        duration: 3500,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack spacing={3} w={'full'}>
     <Input
          placeholder='Username'
          fontSize={15}
          type='text'
          value={input.username}
          onChange={(e)=> setInput({...input,username:e.target.value})}
          bg={'blackAlpha.300'}
          borderColor={'whiteAlpha.200'}
        />

        <Input
          placeholder='Password'
          fontSize={15}
          type='password'
          value={input.password}
          onChange={(e)=> setInput({...input,password:e.target.value})}
          bg={'blackAlpha.300'}
          borderColor={'whiteAlpha.200'}
        />

        <Button
          colorScheme={'orange'}
          width={'full'}
          variant={'solid'}
          fontSize={15}
          borderRadius={'xl'}
          onClick={handleLogin}
          isLoading={isLoading}
          loadingText='Logging in'
        >
          Log in
        </Button>
    </VStack>
  )
}

export default Login
