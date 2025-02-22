"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Heading, Text, VStack, Input, Button, FormControl, FormLabel, Grid, useToast, Progress, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ApplyPage = () => {
  const toast = useToast();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    jobTitle: "",
    company: "",
    experience: "",
    degree: "",
    institution: "",
    graduationYear: "",
    skills: "",
    certifications: "",
    linkedin: "",
    github: "",
    message: "",
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.resume) {
      toast({ title: "Error", description: "Please fill in all required fields!", status: "error", duration: 3000, isClosable: true });
      return;
    }
    
    toast({ title: "Success", description: "Your application has been submitted!", status: "success", duration: 3000, isClosable: true });
    
    setTimeout(() => {
      router.push("/careers/thank-you");
    }, 2000);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Box as="section" bg="gray.900" color="white" py={16} px={10} mx="auto" minH="100vh" display="flex" flexDirection="column" justifyContent="center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Box as="form" onSubmit={handleSubmit} maxW={{ base: "100%", md: "90%", lg: "1200px" }} mx="auto" p={8} rounded="lg" shadow="lg">
          <VStack spacing={6}>
            <Heading fontSize={{ base: "2xl", md: "3xl" }}>Apply for a Position</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.300">Fill in your details and upload your resume.</Text>
            
            <Progress value={(step / 4) * 100} size="sm" colorScheme="blue" w="full" />
            
            {step === 1 && (
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} w="full">
                <FormControl isRequired><FormLabel>Name</FormLabel><Input type="text" name="name" value={formData.name} onChange={handleChange} /></FormControl>
                <FormControl isRequired><FormLabel>Email</FormLabel><Input type="email" name="email" value={formData.email} onChange={handleChange} /></FormControl>
                <FormControl isRequired><FormLabel>Phone</FormLabel><Input type="text" name="phone" value={formData.phone} onChange={handleChange} /></FormControl>
                <FormControl><FormLabel>Address</FormLabel><Input type="text" name="address" value={formData.address} onChange={handleChange} /></FormControl>
              </Grid>
            )}
            
            {step === 2 && (
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} w="full">
                <FormControl isRequired><FormLabel>Job Title</FormLabel><Input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} /></FormControl>
                <FormControl><FormLabel>Company</FormLabel><Input type="text" name="company" value={formData.company} onChange={handleChange} /></FormControl>
                <FormControl isRequired><FormLabel>Years of Experience</FormLabel><Input type="text" name="experience" value={formData.experience} onChange={handleChange} /></FormControl>
              </Grid>
            )}
            
            {step === 3 && (
              <FormControl isRequired><FormLabel>Upload Resume (PDF/DOCX)</FormLabel><Input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} /></FormControl>
            )}
            
            <HStack w="full" justifyContent="space-between">
              {step > 1 && <Button onClick={prevStep}>Back</Button>}
              {step < 3 ? <Button onClick={nextStep} colorScheme="blue">Next</Button> : <Button type="submit" colorScheme="green">Submit</Button>}
            </HStack>
          </VStack>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ApplyPage;
