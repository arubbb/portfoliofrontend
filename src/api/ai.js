// Removed unused axios import
import { GoogleGenerativeAI } from "@google/generative-ai";

// More descriptive variable name for the API key
const geminiApiKey = import.meta.env.VITE_GEMINIAPI;
const genAI = new GoogleGenerativeAI(`${geminiApiKey}`);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

/**
 * Asks a question to the Gemini API and returns the response.
 * @param {string} question - The question to ask.
 * @returns {Promise<string>} The answer to the question.
 */



const askGemini = async (question,portfolioData) => {
    

    try {
      
        const prompt = `Portfolio Data: ${portfolioData}\nQuestion: ${question}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        // Correctly awaiting the text() method
        const text = await response.text();
        return text;        
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data from Gemini API');
    }
};

export default askGemini;