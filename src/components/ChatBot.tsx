
import React from 'react';

interface ChatBotIconProps {
  className?: string;
}

const ChatBotIcon: React.FC<ChatBotIconProps> = ({ className = 'w-24 h-24' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer shape */}
        <path 
          d="M100 190C149.706 190 190 149.706 190 100C190 50.2944 149.706 10 100 10C50.2944 10 10 50.2944 10 100C10 120.161 17.1786 138.654 29.393 153.033C27.2865 168.454 24.4544 180.663 24.4544 180.663C24.4544 180.663 39.3382 175.663 51.7766 171.429C65.9815 183.029 82.2582 190 100 190Z" 
          fill="white" 
          fillOpacity="0.9"
          stroke="#E6E6E6" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Grid pattern */}
        <path d="M40 40L160 40" stroke="#E6E6E6" strokeWidth="1" />
        <path d="M40 80L160 80" stroke="#E6E6E6" strokeWidth="1" />
        <path d="M40 120L160 120" stroke="#E6E6E6" strokeWidth="1" />
        <path d="M40 160L160 160" stroke="#E6E6E6" strokeWidth="1" />
        <path d="M40 40L40 160" stroke="#E6E6E6" strokeWidth="1" />
        <path d="M80 40L80 160" stroke="#E6E6E6" strokeWidth="1" />
        <path d="M120 40L120 160" stroke="#E6E6E6" strokeWidth="1" />
        <path d="M160 40L160 160" stroke="#E6E6E6" strokeWidth="1" />
        
        {/* C letter */}
        <text x="85" y="115" fontFamily="serif" fontSize="36" fill="#f0957e">C</text>
        
        {/* a letter */}
        <text x="115" y="115" fontFamily="serif" fontSize="36" fill="#f0957e">a</text>
      </svg>
    </div>
  );
};

export default ChatBotIcon;
