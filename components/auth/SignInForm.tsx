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
      {/* Header */}
      <div className="flex items-center justify-between mb-9">
        <h1 className="text-[22px] font-bold text-[#1A1A1A] tracking-[-0.3px]">Sign in</h1>
        <Link
          href="/register"
          className="text-[13px] font-semibold transition-opacity hover:opacity-75"
          style={{ color: '#6AB800' }}
        >
          I don&apos;t have an account
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
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

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between pt-[2px]">
          <label className="flex items-center gap-[7px] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-[14px] h-[14px] border border-gray-300 rounded-[3px] cursor-pointer accent-[#72B800]"
            />
            <span className="text-[12.5px] text-[#9CA3AF]">Remember me</span>
          </label>
          <Link
            href="/forgot-password"
            className="text-[12.5px] font-bold text-[#1A1A1A] hover:text-gray-500 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Continue button */}
        <button
          type="submit"
          className="w-full py-[15px] mt-[2px] rounded-full text-white font-semibold text-[15px] tracking-[0.1px] transition-opacity hover:opacity-90 active:opacity-80"
          style={{ backgroundColor: '#6FC001' }}
        >
          Continue
        </button>

        {/* OR divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px" style={{ backgroundColor: '#DDE8D8' }} />
          <span className="text-[11.5px] text-[#AABBA8] font-medium tracking-[0.08em]">OR</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#DDE8D8' }} />
        </div>

        <GoogleButton />
      </form>
    </div>
  )
}
