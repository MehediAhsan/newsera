const Button = ({ children, onClick, variant = "primary", size = "md", className = "" }) => {
    const baseStyles = "font-semibold transition duration-300";
    
    const sizeStyles = {
      sm: "px-3 py-1 text-sm",
      md: "px-3 py-1 text-base",
      lg: "px-6 py-4 text-lg"
    };
    
    const variantStyles = {
      primary: "bg-primary text-muted hover:bg-opacity-90",
      secondary: "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-500",
      outline: "border border-fourth text-secondary hover:bg-sixth focus:ring-gray-400",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      dark: "bg-dark text-secondary hover:bg-opacity-90"
    };
    
    return (
      <button 
        onClick={onClick} 
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  