"use client";

import { useParams } from "next/navigation";
import { Box, Heading, Text, Image, VStack, Button, Link, Divider, HStack, Input } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const blogPosts = [
  {
    id: "0",
    title: "The Future of Industrial Engineering",
    date: "2025-02-01",
    content: "This article explores how AI, automation, and new materials are transforming industrial engineering...",
    image: "https://via.placeholder.com/600x400",
    category: "Automation",
  },
  {
    id: "1",
    title: "Efficiency Optimization Techniques",
    date: "2025-01-15",
    content: "Industrial efficiency depends on workflow design, automation, and lean manufacturing principles...",
    image: "https://via.placeholder.com/600x400",
    category: "Efficiency",
  },
  {
    id: "2",
    title: "Automation in Manufacturing",
    date: "2025-01-10",
    content: "How robotics and AI are changing the way we manufacture products and increase productivity...",
    image: "https://via.placeholder.com/600x400",
    category: "Manufacturing",
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  if (!post) {
    return <Text color="red.500">Blog post not found.</Text>;
  }

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id);

  return (
    <Box as="section" bg="gray.800" color="white" minH="100vh" py={10} px={6}>
      <VStack spacing={6} textAlign="center">
        <Image src={post.image} alt={post.title} w="full" h="300px" objectFit="cover" borderRadius="md" />
        <Heading fontSize="3xl">{post.title}</Heading>
        <Text fontSize="sm" color="gray.400">{post.date}</Text>
        <Text fontSize="lg" maxW="800px">{post.content}</Text>

        {/* Social Sharing */}
        <HStack spacing={4} mt={4}>
          <Button leftIcon={<FaFacebook />} colorScheme="facebook" variant="outline">
            Share
          </Button>
          <Button leftIcon={<FaTwitter />} colorScheme="twitter" variant="outline">
            Tweet
          </Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" variant="outline">
            Share
          </Button>
        </HStack>

        <Divider my={6} />

        {/* Comment Section */}
        <Heading fontSize="xl">Join the Discussion</Heading>
        <Input
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          bg="gray.700"
        />
        <Button onClick={handleCommentSubmit} colorScheme="blue" mt={2}>
          Submit
        </Button>

        {comments.length > 0 && (
          <Box mt={4} p={4} bg="gray.700" w="full" borderRadius="md">
            {comments.map((c, index) => (
              <Text key={index} fontSize="md" p={2} borderBottom="1px solid gray">
                {c}
              </Text>
            ))}
          </Box>
        )}

        <Divider my={6} />

        {/* Related Blogs */}
        <Heading fontSize="xl" mb={4}>Related Articles</Heading>
        <VStack spacing={4}>
          {relatedPosts.map((related) => (
            <Link key={related.id} href={`/blog/${related.id}`} _hover={{ textDecoration: "none" }}>
              <Box bg="gray.700" p={4} borderRadius="md" w="full">
                <Text fontSize="lg" color="white">{related.title}</Text>
                <Text fontSize="sm" color="gray.400">{related.date}</Text>
              </Box>
            </Link>
          ))}
        </VStack>

        <Button as={Link} href="/blog" colorScheme="blue" mt={6}>
          Back to Blog
        </Button>
      </VStack>
    </Box>
  );
};

export default BlogPost;
