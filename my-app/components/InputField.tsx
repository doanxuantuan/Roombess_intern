import { cn } from "~/utils";

interface Props {
  value: string;
  className?: string;
  placeholder: string;
  setValue: (value: string) => void;
}

const InputField = ({ value, placeholder, className, setValue }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center rounded-2xl h-11 w-full border bg-primary-100 transition-all",
        value ? "border-primary-700" : "border-primary-100",
        className
      )}
    >
      <input
        value={value}
        className="rounded-2xl t-feat-regular h-full w-full px-3 text-greys-800"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* {value && (
        <Icon
          name="close"
          className="size-4 mr-3"
          onClick={() => setValue("")}
        />
      )} */}
    </div>
  );
};

export default InputField;
