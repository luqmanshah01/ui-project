'use client'

import { useState } from 'react'
import Link from 'next/link'
import InputField from '@/components/ui/InputField'
import PasswordInput from '@/components/ui/PasswordInput'
import GoogleButton from '@/components/ui/GoogleButton'

export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="w-full">
      {/* Header row */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-[22px] font-bold text-[#1C1C1C] tracking-tight">Sign in</h1>
        <Link
          href="/register"
          className="text-[13.5px] font-semibold hover:opacity-80 transition-opacity"
          style={{ color: '#72B800' }}
        >
          I don&apos;t have an account
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Remember me + Forgot password row */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-[15px] h-[15px] border border-gray-300 rounded-sm cursor-pointer accent-[#72B800]"
            />
            <span className="text-[13px] text-gray-400">Remember me</span>
          </label>
          <Link
            href="/forgot-password"
            className="text-[13px] font-bold text-[#1C1C1C] hover:text-gray-600 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Continue button */}
        <button
          type="submit"
          className="w-full py-[14px] rounded-full text-white font-semibold text-[15px] mt-1 transition-opacity hover:opacity-90 active:opacity-80"
          style={{ backgroundColor: '#72B800' }}
        >
          Continue
        </button>

        {/* OR divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ backgroundColor: '#E0E0E0' }} />
          <span className="text-[12px] text-gray-400 font-medium tracking-widest">OR</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#E0E0E0' }} />
        </div>

        <GoogleButton />
      </form>
    </div>
  )
}
