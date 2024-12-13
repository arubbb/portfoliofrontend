import { useState, useEffect } from 'react';
import askGemini from '../api/ai';
import { FaComments, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';




export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [portfolioData, setPortfolioData] = useState([]);

    useEffect(() => {
        async function getPortfolioData() {
            try {
                const response = await axios.get(`${webUrl}/projects/render`);
                setPortfolioData(response.data);
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
            }
        }
        getPortfolioData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!input.trim()) return;
        
        setIsLoading(true);
        const newUserMessage = { type: 'user', text: input };
        setChatHistory(prev => [...prev, newUserMessage]);
        
        try {
            const response = await askGemini(input, portfolioData);
            const newBotMessage = { type: 'bot', text: response };
            setChatHistory(prev => [...prev, newBotMessage]);
        } catch (error) {
            console.error('Error fetching answer:', error);
            const errorMessage = { type: 'bot', text: 'Sorry, I couldn\'t get an answer. Please try again.' };
            setChatHistory(prev => [...prev, errorMessage]);
        }
        
        setIsLoading(false);
        setInput('');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
                >
                    <FaComments size={24} />
                </button>
            )}
            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl w-80 h-[500px] flex flex-col overflow-hidden">
                    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Portfolio Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                            ✕
                        </button>
                    </div>
                    <div className="flex-grow overflow-y-auto p-4 space-y-2">
                        {chatHistory.map((msg, index) => (
                            <div key={index} className={`p-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'} max-w-[80%]`}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && <div className="text-center">Thinking...</div>}
                    </div>
                    <form onSubmit={handleSubmit} className="p-4 bg-gray-100">
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about my portfolio..."
                                className="flex-grow p-2 rounded-l-full border-t border-b border-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="bg-blue-500 text-white p-2 rounded-r-full hover:bg-blue-600 transition-all disabled:opacity-50"
                            >
                                <FaPaperPlane size={18} />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}