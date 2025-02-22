"use client";

import React, { useState } from "react";
import { Box, Input, VStack, Text, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import { askAI } from "@/utils/huggingface";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const userMessage = { role: "user", content: input } as const;
    setMessages((prev) => [...prev, userMessage]);
  
    setInput(""); // Clear input field
  
    try {
      const aiResponse = await askAI([...messages, userMessage]); 
      const botMessage = { role: "assistant", content: aiResponse } as const;
  
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("AI error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Oops! Something went wrong. Try again." } as const]);
    }
  };

  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
      {!isOpen && (
        <IconButton
          icon={<FaRobot />}
          colorScheme="blue"
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
          size="lg"
        />
      )}

      {isOpen && (
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          bg="gray.800"
          color="white"
          p={4}
          rounded="lg"
          shadow="lg"
          w={{ base: "90vw", md: "350px" }}
          h="400px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <VStack spacing={4} align="stretch" overflowY="auto" flex="1">
            {messages.map((msg, index) => (
              <Text key={index} alignSelf={msg.role === "user" ? "flex-end" : "flex-start"} bg={msg.role === "user" ? "blue.500" : "gray.600"} p={2} rounded="md">
                {msg.content}
              </Text>
            ))}
          </VStack>

          <Box display="flex" alignItems="center">
            <Input
              flex="1"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              bg="gray.700"
              color="white"
            />
            <IconButton icon={<FaPaperPlane />} colorScheme="blue" onClick={sendMessage} aria-label="Send message" ml={2} />
            <IconButton icon={<FaTimes />} colorScheme="red" onClick={() => setIsOpen(false)} aria-label="Close chatbot" ml={2} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Chatbot;
