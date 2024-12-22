const Button: React.FC<{ label: string }> = ({ label }) => {
    return (
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {label}
      </button>
    );
  };
  
  export default Button;
  