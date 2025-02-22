export const askAI = async (messages: { role: "user" | "assistant"; content: string }[]) => {
  try {
    // Format conversation history into a single string
    const formattedMessages = messages.map(msg => `${msg.role === "user" ? "User" : "AI"}: ${msg.content}`).join("\n");

    const response = await fetch("https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-alpha", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: formattedMessages }), // 🔹 Ensure correct format
    });

    const result = await response.json();
    
    console.log("Full API Response:", result); // 🚀 Log full response
    console.log("HTTP Status:", response.status); // 🚀 Log HTTP status code

    if (response.status !== 200) {
      return `API Error: ${result.error || "Unknown error"}`;
    }

    if (!result || !result[0]?.generated_text) {
      return "I'm sorry, I couldn't understand that. Please try again.";
    }

    return result[0].generated_text;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Oops! Something went wrong.";
  }
};
