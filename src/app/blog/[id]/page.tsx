"use client";

import { useParams } from "next/navigation";
import { 
  Box, 
  Heading, 
  Text, 
  Image, 
  VStack, 
  Button, 
  Link, 
  Divider, 
  HStack, 
  Input,
  Container,
  Badge,
  Flex,
  Icon,
  useColorModeValue,
  Textarea,
  Avatar,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  useToast
} from "@chakra-ui/react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaCalendarAlt, 
  FaUser, 
  FaClock, 
  FaTag,
  FaArrowLeft,
  FaHeart,
  FaComment,
  FaShare
} from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
});

const blogPosts = [
  {
    id: "0",
    title: "The Future of Industrial Engineering",
    date: "2025-02-01",
    author: "John Doe",
    authorImage: "https://via.placeholder.com/50",
    content: `Industrial engineering is undergoing a significant transformation, driven by technological advancements and changing market demands. This article explores how AI, automation, and new materials are reshaping the field.

Key Trends:
1. Artificial Intelligence Integration
- Machine learning algorithms optimizing production processes
- Predictive maintenance reducing downtime
- AI-driven quality control systems

2. Sustainable Manufacturing
- Green energy solutions
- Waste reduction techniques
- Circular economy practices

3. Digital Twin Technology
- Real-time process simulation
- Virtual testing environments
- Performance optimization

The future of industrial engineering lies in the seamless integration of these technologies, creating more efficient, sustainable, and intelligent manufacturing processes.`,
    image: "https://via.placeholder.com/1200x600",
    category: "Automation",
    readTime: "5 min read",
    tags: ["AI", "Manufacturing", "Technology"],
    likes: 245,
    comments: 18
  },
  {
    id: "1",
    title: "Efficiency Optimization Techniques",
    date: "2025-01-15",
    author: "Jane Smith",
    authorImage: "https://via.placeholder.com/50",
    content: `Industrial efficiency depends on workflow design, automation, and lean manufacturing principles. This comprehensive guide explores various techniques for optimizing industrial processes.

Key Areas:
1. Process Optimization
- Value stream mapping
- Waste elimination
- Cycle time reduction

2. Resource Management
- Inventory optimization
- Workforce scheduling
- Equipment utilization

3. Quality Control
- Statistical process control
- Six Sigma methodologies
- Continuous improvement

By implementing these techniques, organizations can achieve significant improvements in productivity and cost-effectiveness.`,
    image: "https://via.placeholder.com/1200x600",
    category: "Efficiency",
    readTime: "7 min read",
    tags: ["Process", "Optimization", "Quality"],
    likes: 189,
    comments: 12
  },
  {
    id: "2",
    title: "Automation in Manufacturing",
    date: "2025-01-10",
    author: "Mike Johnson",
    authorImage: "https://via.placeholder.com/50",
    content: `How robotics and AI are changing the way we manufacture products and increase productivity. This article delves into the latest developments in manufacturing automation.

Key Developments:
1. Robotics Integration
- Collaborative robots (cobots)
- Automated assembly lines
- Material handling systems

2. Smart Manufacturing
- IoT-enabled devices
- Real-time monitoring
- Predictive analytics

3. Workforce Transformation
- New skill requirements
- Training programs
- Human-robot collaboration

The integration of these technologies is revolutionizing manufacturing processes and creating new opportunities for growth and innovation.`,
    image: "https://via.placeholder.com/1200x600",
    category: "Manufacturing",
    readTime: "6 min read",
    tags: ["Robotics", "AI", "Innovation"],
    likes: 312,
    comments: 24
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);
  const toast = useToast();

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [liked, setLiked] = useState(false);

  // Color mode values
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('purple.500', 'purple.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const gradientStart = useColorModeValue('purple.500', 'purple.400');
  const gradientEnd = useColorModeValue('purple.700', 'purple.500');

  if (!post) {
    return (
      <Box 
        as="section" 
        bg={bgColor}
        color={textColor}
        minH="100vh" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
      >
        <Text fontSize="xl" color="red.500">Blog post not found.</Text>
      </Box>
    );
  }

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
      toast({
        title: "Comment added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? "Post unliked" : "Post liked",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id);

  return (
    <Box 
      as="section" 
      bg={bgColor}
      color={textColor}
      minH="100vh" 
      py={{ base: 8, md: 12 }}
    >
      <Container maxW="container.xl">
        <VStack spacing={{ base: 8, md: 12 }} align="stretch">
          {/* Back Button */}
          <Link href="/blog" _hover={{ textDecoration: "none" }}>
            <Button
              leftIcon={<FaArrowLeft />}
              variant="ghost"
              colorScheme="purple"
              size="sm"
            >
              Back to Blog
            </Button>
          </Link>

          {/* Featured Image */}
          <MotionBox
            variants={fadeIn(0.2)}
            initial="initial"
            animate="animate"
          >
            <Image 
              src={post.image} 
              alt={post.title} 
              w="full" 
              h={{ base: "200px", md: "400px" }} 
              objectFit="cover" 
              borderRadius="xl"
              boxShadow="xl"
            />
          </MotionBox>

          {/* Post Header */}
          <MotionVStack
            spacing={4}
            align="stretch"
            variants={fadeIn(0.3)}
            initial="initial"
            animate="animate"
          >
            <Badge
              colorScheme="purple"
              alignSelf="start"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              {post.category}
            </Badge>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              color={headingColor}
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
            >
              {post.title}
            </Heading>
            <HStack spacing={4} color={textColor} fontSize="sm">
              <Flex align="center" gap={2}>
                <Avatar size="sm" src={post.authorImage} name={post.author} />
                <Text>{post.author}</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Icon as={FaCalendarAlt} />
                <Text>{post.date}</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Icon as={FaClock} />
                <Text>{post.readTime}</Text>
              </Flex>
            </HStack>
          </MotionVStack>

          {/* Post Content */}
          <MotionBox
            variants={fadeIn(0.4)}
            initial="initial"
            animate="animate"
            bg={cardBg}
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            boxShadow="xl"
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              whiteSpace="pre-line"
              lineHeight="tall"
            >
              {post.content}
            </Text>
          </MotionBox>

          {/* Tags */}
          <MotionHStack
            spacing={2}
            variants={fadeIn(0.5)}
            initial="initial"
            animate="animate"
          >
            {post.tags.map((tag, index) => (
              <Tag
                key={index}
                size="md"
                colorScheme="purple"
                variant="subtle"
                borderRadius="full"
              >
                <TagLeftIcon as={FaTag} />
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </MotionHStack>

          {/* Social Sharing and Engagement */}
          <MotionHStack
            spacing={4}
            variants={fadeIn(0.6)}
            initial="initial"
            animate="animate"
            justify="space-between"
            bg={cardBg}
            p={4}
            borderRadius="lg"
            boxShadow="md"
          >
            <HStack spacing={4}>
              <Button
                leftIcon={<FaHeart />}
                colorScheme={liked ? "red" : "gray"}
                variant={liked ? "solid" : "ghost"}
                onClick={handleLike}
              >
                {post.likes + (liked ? 1 : 0)}
              </Button>
              <Button
                leftIcon={<FaComment />}
                colorScheme="purple"
                variant="ghost"
              >
                {post.comments + comments.length}
              </Button>
            </HStack>
            <HStack spacing={2}>
              <Button leftIcon={<FaFacebook />} colorScheme="facebook" variant="outline" size="sm">
                Share
              </Button>
              <Button leftIcon={<FaTwitter />} colorScheme="twitter" variant="outline" size="sm">
                Tweet
              </Button>
              <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" variant="outline" size="sm">
                Share
              </Button>
            </HStack>
          </MotionHStack>

          <Divider borderColor={`${accentColor}20`} />

          {/* Comments Section */}
          <MotionVStack
            spacing={6}
            align="stretch"
            variants={fadeIn(0.7)}
            initial="initial"
            animate="animate"
          >
            <Heading fontSize="2xl" color={headingColor}>
              Join the Discussion
            </Heading>
            <VStack spacing={4}>
              <Textarea
                placeholder="Leave a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                bg={cardBg}
                size="lg"
                minH="100px"
              />
              <Button
                onClick={handleCommentSubmit}
                colorScheme="purple"
                size="lg"
                rightIcon={<FaComment />}
                alignSelf="flex-end"
              >
                Post Comment
              </Button>
            </VStack>
            <VStack spacing={4} align="stretch">
              {comments.map((c, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  p={4}
                  borderRadius="lg"
                  boxShadow="sm"
                >
                  <HStack spacing={4} mb={2}>
                    <Avatar size="sm" src={post.authorImage} />
                    <Text fontWeight="bold">{post.author}</Text>
                  </HStack>
                  <Text>{c}</Text>
                </Box>
              ))}
            </VStack>
          </MotionVStack>

          {/* Related Posts */}
          <MotionVStack
            spacing={6}
            align="stretch"
            variants={fadeIn(0.8)}
            initial="initial"
            animate="animate"
          >
            <Heading fontSize="2xl" color={headingColor}>
              Related Articles
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.id}`} _hover={{ textDecoration: "none" }}>
                  <Box
                    bg={cardBg}
                    p={6}
                    borderRadius="xl"
                    boxShadow="md"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                      borderColor: accentColor
                    }}
                    transition="all 0.3s ease"
                    border="1px solid"
                    borderColor={`${accentColor}10`}
                  >
                    <VStack align="start" spacing={3}>
                      <Badge colorScheme="purple">{related.category}</Badge>
                      <Heading fontSize="xl" color={headingColor}>
                        {related.title}
                      </Heading>
                      <HStack spacing={4} color={textColor} fontSize="sm">
                        <Flex align="center" gap={2}>
                          <Icon as={FaCalendarAlt} />
                          <Text>{related.date}</Text>
                        </Flex>
                        <Flex align="center" gap={2}>
                          <Icon as={FaClock} />
                          <Text>{related.readTime}</Text>
                        </Flex>
                      </HStack>
                    </VStack>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          </MotionVStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default BlogPost;
