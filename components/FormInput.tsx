'use client';

type FormInputProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export default function FormInput({ value, onChange, placeholder }: FormInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder || "Zadejte hledaný výraz"}
      className="flex-grow p-3 border-none focus:outline-none"
    />
  );
}