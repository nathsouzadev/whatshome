
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as config from "../config/config";

const AIresponse = async () => {
    const genAI = new GoogleGenerativeAI(config.default().genAi.apiKey);
    
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ 
        model: "gemini-pro",
        generationConfig: {
            stopSequences: ["red"],
            maxOutputTokens: 200,
            temperature: 0.9,
            topP: 0.1,
            topK: 16,
          },          
    });
    const prompt = "Write a story about a magic backpack.";
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(text);
};

export default AIresponse