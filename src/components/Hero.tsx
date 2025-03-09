
import React from 'react';
import Button from './Button';
import ChatBotIcon from './ChatBot';
import { Bot } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen peach-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 flex items-center justify-center">
        <div className="text-center space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            CycleSync AI
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-serif font-normal leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Align your life with your body's natural rhythm
          </h2>
          
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Get personalized tips on workouts, nutrition, and self care based on your unique cycle
          </p>
          
          <div className="pt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <button 
              className="inline-flex items-center space-x-3 text-white bg-white bg-opacity-20 hover:bg-opacity-30 px-8 py-4 rounded-full transition-all duration-300"
              aria-label="Chat with our bot to get started"
            >
              <span className="text-lg">Chat with our bot to get started</span>
              <Bot className="w-6 h-6 ml-2 animate-pulse-soft" />
            </button>
          </div>
          
          <div className="pt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <ChatBotIcon className="w-32 h-32 mx-auto animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
