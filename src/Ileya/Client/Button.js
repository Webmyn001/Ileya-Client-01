import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`
        relative overflow-hidden
        px-6 py-2.5
        bg-gray-900 hover:bg-gray-800
        text-white font-medium
        rounded-xl
        transition-all duration-300
        transform hover:-translate-y-0.5
        active:translate-y-0
        focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2
        shadow-md hover:shadow-lg
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>
      
      {/* Animated background effect */}
      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 z-0"></span>
    </button>
  );
};

export default Button;