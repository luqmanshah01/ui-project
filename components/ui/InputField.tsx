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
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-800">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-300 bg-white focus:outline-none focus:border-[#72B800] focus:ring-1 focus:ring-[#72B800] transition-colors"
      />
    </div>
  )
}
