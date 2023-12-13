import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string; // optional property
  full?: boolean;
  variant: string;
};
const Button = (props: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${props.variant} ${props.full && "w-full"} `}
      type={props.type}
    >
      {props.icon && (
        <Image src={props.icon} width={20} height={30} alt={"icon"} />
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {props.title}
      </label>
    </button>
  );
};

export default Button;
