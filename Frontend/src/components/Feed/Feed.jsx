import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Avatar,
  Heading,
  Spinner,
  useToast,
  Button,
  Divider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1010';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/posts/feed`);
      const data = await response.json();

      if (response.ok) {
        setPosts(data.posts || []);
      } else {
        toast({
          title: 'Error',
          description: data.message || 'Failed to fetch posts',
          status: 'error',
          duration: 3,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to fetch posts',
        status: 'error',
        duration: 3,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="purple.600" />
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="gray.50" py={4}>
      <VStack spacing={0} maxW="600px" mx="auto" px={4}>
        {/* Header */}
        <HStack
          w="100%"
          h="60px"
          bg="white"
          px={4}
          boxShadow="sm"
          justify="space-between"
          mb={4}
          borderRadius="md"
        >
          <Heading as="h1" size="lg" color="purple.600">
            Feed
          </Heading>
          {user.username && (
            <Button
              size="sm"
              bg="purple.600"
              color="white"
              onClick={() => navigate('/create-post')}
            >
              Create Post
            </Button>
          )}
        </HStack>

        {/* Posts */}
        {posts.length === 0 ? (
          <Box textAlign="center" py={12}>
            <Text fontSize="lg" color="gray.500">
              No posts yet. Start creating!
            </Text>
          </Box>
        ) : (
          <VStack spacing={4} w="100%">
            {posts.map((post) => (
              <Box
                key={post.id}
                bg="white"
                borderRadius="md"
                boxShadow="sm"
                overflow="hidden"
                w="100%"
              >
                {/* Post Header */}
                <HStack px={4} py={3} spacing={3} borderBottomWidth="1px">
                  <Avatar name={post.username} size="sm" />
                  <VStack spacing={0} align="flex-start" flex={1}>
                    <Text fontWeight="bold" fontSize="sm">
                      {post.username}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </Text>
                  </VStack>
                </HStack>

                {/* Image */}
                <Image
                  src={post.imageUrl}
                  alt={post.caption}
                  w="100%"
                  h="400px"
                  objectFit="cover"
                />

                {/* Caption */}
                {post.caption && (
                  <Box px={4} py={3}>
                    <Text fontSize="sm">
                      <Text as="span" fontWeight="bold" mr={1}>
                        {post.username}
                      </Text>
                      {post.caption}
                    </Text>
                  </Box>
                )}
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
}
