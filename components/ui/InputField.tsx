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
    <div className="flex flex-col gap-[7px]">
      <label className="text-[13.5px] font-semibold text-[#1C1C1C]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-[14px] border rounded-2xl text-[14px] text-gray-800 placeholder-gray-300 bg-white focus:outline-none transition-colors"
        style={{ borderColor: '#E2E8E0' }}
        onFocus={(e) => { e.target.style.borderColor = '#72B800' }}
        onBlur={(e) => { e.target.style.borderColor = '#E2E8E0' }}
      />
    </div>
  )
}
