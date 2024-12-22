// components/Button.tsx
import { ButtonProps } from "@/interfaces/ButtonProps";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button
      className={`px-4 py-2 text-white ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;
