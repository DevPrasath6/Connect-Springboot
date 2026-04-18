import React, { useState } from 'react';
import {
  Box,
  Button,
  VStack,
  HStack,
  Textarea,
  Input,
  useToast,
  Heading,
  FormControl,
  FormLabel,
  Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1010';

export default function CreatePost() {
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl || !imageUrl.trim()) {
      toast({
        title: 'Error',
        description: 'Please select an image',
        status: 'error',
        duration: 3,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/posts/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.username,
          caption: caption.trim(),
          imageUrl: imageUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create post');
      }

      toast({
        title: 'Success',
        description: 'Post created successfully!',
        status: 'success',
        duration: 3,
        isClosable: true,
      });

      setCaption('');
      setImageUrl('');
      setImagePreview('');

      // Redirect to feed or home
      setTimeout(() => navigate('/'), 1000);
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to create post',
        status: 'error',
        duration: 3,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <VStack spacing={8} maxW="600px" mx="auto" px={4}>
        <Heading as="h1" size="2xl" color="purple.600">
          Create New Post
        </Heading>

        <Box
          bg="white"
          borderRadius="md"
          boxShadow="sm"
          p={6}
          w="100%"
        >
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} align="stretch">
              {/* Image Upload */}
              <FormControl>
                <FormLabel htmlFor="image" fontWeight="bold">
                  Upload Image
                </FormLabel>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  py={2}
                />
                {imagePreview && (
                  <Box mt={4} borderRadius="md" overflow="hidden">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      maxH="300px"
                      w="100%"
                      objectFit="cover"
                    />
                  </Box>
                )}
              </FormControl>

              {/* Caption */}
              <FormControl>
                <FormLabel htmlFor="caption" fontWeight="bold">
                  Caption (Optional)
                </FormLabel>
                <Textarea
                  id="caption"
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  minH="120px"
                  resize="none"
                />
              </FormControl>

              {/* Buttons */}
              <HStack spacing={3} justify="flex-end" pt={4}>
                <Button
                  variant="outline"
                  onClick={() => navigate('/')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  bg="purple.600"
                  color="white"
                  isLoading={loading}
                  loadingText="Creating..."
                >
                  Create Post
                </Button>
              </HStack>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
}
