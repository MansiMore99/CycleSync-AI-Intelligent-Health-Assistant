
import React from 'react';
import Button from './Button';
import ChatBotIcon from './ChatBot';

const Hero = () => {
  return (
    <div className="relative min-h-screen peach-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              CycleSync AI
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-serif font-normal leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Align your life with your body's natural rhythm
            </h2>
            
            <p className="text-lg md:text-xl font-light max-w-lg animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Get personalized tips on workouts, nutrition, and self care based on your unique cycle
            </p>
            
            <div className="pt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <button 
                className="inline-flex items-center space-x-3 text-white bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full transition-all duration-300"
                aria-label="Chat with our bot to get started"
              >
                <span className="text-lg">Chat with our bot to get started.</span>
                <ChatBotIcon className="w-8 h-8 animate-pulse-soft" />
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative animate-float">
              <ChatBotIcon className="w-64 h-64 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
