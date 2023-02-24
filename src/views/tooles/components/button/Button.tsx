type ButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  classButton: string;
};

export const Button = ({ text = "", onClick, classButton }: ButtonProps) => {
  return (
    <button className={classButton} onClick={onClick}>
      {text}
    </button>
  );
};
