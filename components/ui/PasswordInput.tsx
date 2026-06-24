'use client'

import { useState } from 'react'

interface PasswordInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PasswordInput({ value, onChange }: PasswordInputProps) {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col gap-[8px]">
      <label className="text-[13px] font-medium text-[#1A1A1A]">Password</label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          placeholder="Enter password..."
          value={value}
          onChange={onChange}
          className="
            w-full px-[16px] py-[14px] pr-12
            border border-[#E4EDE0] rounded-2xl
            text-[14px] text-[#1A1A1A] placeholder-[#C8D5C5]
            bg-white
            outline-none
            focus:border-[#72B800] focus:ring-2 focus:ring-[#72B800]/10
            transition-all duration-150
          "
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#B0C0AE] hover:text-[#72B800] transition-colors"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          <EyeIcon open={show} />
        </button>
      </div>
    </div>
  )
}

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
