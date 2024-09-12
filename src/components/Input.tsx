import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

interface InputProps {
  placeholder: string;
  type?: HTMLInputTypeAttribute | "textarea";
  setValueFn: Dispatch<SetStateAction<string>>;
  value: string;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  setValueFn,
}: InputProps) {
  if (type === "textarea") {
    return (
      <textarea
        className="px-4 py-3 outline-none border-none bg-neutral-100 resize-none"
        rows={4}
        value={value}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValueFn(e.target.value)
        }
      ></textarea>
    );
  }

  if (type != "textarea") {
    return (
      <input
        className="px-4 py-3 outline-none border-none bg-neutral-100"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValueFn(e.target.value)
        }
      />
    );
  }
}
