import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyA_dw6uJmAVV1gd2Ta1JCtU7ciOA7vIZs0";

interface GenerativeAiProps {
    fullText: string;
}

export default function GenerativeAi({fullText}: GenerativeAiProps) {
    const [generatedResponse, setGeneratedResponse] = useState("");
    // const [inputText, setInputText] = useState("");

    const handleButtonClick = async () => {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };

        const safetySettings = [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        ];

        const parts = [{ text: fullText }];

        const result = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
            safetySettings,
        });

        const response = result.response;
        setGeneratedResponse(response.text());

    };

    return (
        <>
            <div className='flex flex-col items-center pt-44'>
                <div className='w-80'>
                    {/* <input
                        type="text"
                        className='w-full p-4 border-2 border-blue-600 my-5 rounded-lg'
                        onChange={(e) => setInputText(e.target.value)}
                    /> */}
                </div>
                <button onClick={handleButtonClick} className='border-2 border-blue-600 rounded-lg my-5 hover:bg-blue-600 hover:text-white'>
                    <p className='p-2'>
                        Ask AI
                    </p>
                </button>
            </div>

            <div className='flex flex-col items-center my-10 px-64 '>
                <p className='p-2 my-10 rounded-lg border-2 border-blue-600 bg-white'><ReactMarkdown>{generatedResponse}</ReactMarkdown></p>
            </div>
        </>
    );
}