interface InputProps {
  id?: string;
  labelText?: string;
  type: string;
  placeholder?: string;
}

export function Input({ id, labelText, type, placeholder }: InputProps) {
  return (
    <>
      <label
        className="text-white text-base font-bold block leading-6 mb-2"
        htmlFor={id}
      >
        {labelText}
      </label>
      <input
        className="w-full bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}
