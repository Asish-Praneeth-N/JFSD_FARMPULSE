import React, { useState, useRef, useEffect } from 'react';
import './ExpertGemini.css';
import axios from 'axios';
import { FiSend, FiUser } from 'react-icons/fi';
import { RiRobot2Line } from 'react-icons/ri';

const Expertgemini = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chatHistory]);

  async function generateAnswer() {
    if (!inputText.trim()) return;

    const userMessage = { type: 'user', text: inputText };
    setChatHistory(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCqEU3orE-btQXm2Klh84u7FNTGaWS_KT8",
        method: "post",
        data: {
          contents: [{ parts: [{ text: inputText }] }],
        },
      });

      const botAnswer = response.data.candidates[0].content.parts[0].text;
      const botMessage = { type: 'bot', text: botAnswer };
      setChatHistory(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { 
        type: 'bot', 
        text: 'Sorry, something went wrong. Please try again later.',
        isError: true 
      };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setInputText('');
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateAnswer();
    }
  };

  return (
    <div className="expert-gemini-container">
      <div className="expert-gemini-header">
        <div className="header-content">
          <RiRobot2Line className="gemini-icon" />
          <h1>Gemini AI Assistant</h1>
          <p>Your Agricultural Expert Companion</p>
        </div>
      </div>

      <div className="chat-container">
        <div className="chat-window" ref={chatWindowRef}>
          {chatHistory.length === 0 && (
            <div className="welcome-message">
              <RiRobot2Line className="welcome-icon" />
              <h2>Hello! I'm your Farming Assistant</h2>
              <p>Ask me anything about agriculture, farming techniques, or crop management.</p>
            </div>
          )}
          
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.type}-message ${message.isError ? 'error-message' : ''}`}
            >
              <div className="message-icon">
                {message.type === 'user' ? <FiUser /> : <RiRobot2Line />}
              </div>
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-timestamp">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="loading-indicator">
              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>

        <div className="chat-input-container">
          <textarea
            placeholder="Ask your farming question..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="chat-input"
            rows="1"
          />
          <button 
            onClick={generateAnswer} 
            className="chat-send-button"
            disabled={isLoading || !inputText.trim()}
          >
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expertgemini;