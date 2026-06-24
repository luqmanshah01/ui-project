interface InputFieldProps {
  label: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      <label className="text-[13px] font-medium text-[#1A1A1A]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full px-[16px] py-[14px]
          border border-[#E4EDE0] rounded-2xl
          text-[14px] text-[#1A1A1A] placeholder-[#C8D5C5]
          bg-white
          outline-none
          focus:border-[#72B800] focus:ring-2 focus:ring-[#72B800]/10
          transition-all duration-150
        "
      />
    </div>
  )
}
