"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text, Input, Textarea, Button, VStack } from "@chakra-ui/react";

const slideIn = (direction: string, type: string, delay: number, duration: number) => ({
  initial: { opacity: 0, x: direction === "left" ? -200 : 200 },
  animate: { opacity: 1, x: 0, transition: { duration, delay, ease: type } },
});

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    }, 1000);
  };

  return (
    <Box as="section" bg="gray.800" color="white" minH="100vh" py={12} px={6} position="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      />
      
      <VStack spacing={6} textAlign="center" position="relative" zIndex={2}>
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.400">
            Connect with Our Engineering Experts
          </Text>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            Contact Our Industrial Team
          </Heading>
        </motion.div>

        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ background: "#1a202c", padding: "20px", borderRadius: "10px", textAlign: "center" }}
          >
            <Text fontSize={{ base: "xl", md: "2xl" }} color="green.400" fontWeight="bold">
              ✅ Message Sent Successfully!
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.300">
              Our team will get back to you shortly.
            </Text>
          </motion.div>
        ) : (
          <motion.div variants={slideIn("left", "tween", 0.2, 1)} style={{ maxWidth: "500px", width: "100%" }}>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <VStack align="start">
                <Text fontWeight="medium">Your Name *</Text>
                <Input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" bg="gray.700" color="white" borderRadius="md" isRequired />
              </VStack>

              <VStack align="start">
                <Text fontWeight="medium">Your Email *</Text>
                <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email address" bg="gray.700" color="white" borderRadius="md" isRequired />
              </VStack>

              <VStack align="start">
                <Text fontWeight="medium">Phone Number *</Text>
                <Input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" bg="gray.700" color="white" borderRadius="md" isRequired />
              </VStack>

              <VStack align="start">
                <Text fontWeight="medium">Company Name</Text>
                <Input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Enter your company name" bg="gray.700" color="white" borderRadius="md" />
              </VStack>

              <VStack align="start">
                <Text fontWeight="medium">Your Message</Text>
                <Textarea rows={5} name="message" value={form.message} onChange={handleChange} placeholder="Describe your project or inquiry" bg="gray.700" color="white" borderRadius="md" />
              </VStack>

              <Button type="submit" colorScheme="blue" isLoading={loading} w="full">
                {loading ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </motion.div>
        )}
      </VStack>
    </Box>
  );
};

export default Contact;
