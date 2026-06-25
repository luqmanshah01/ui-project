'use client'

import { useState } from 'react'
import Link from 'next/link'
import InputField from '@/components/ui/InputField'
import PasswordInput from '@/components/ui/PasswordInput'
import GoogleButton from '@/components/ui/GoogleButton'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-9">
        <h1 className="text-[22px] font-bold text-[#1A1A1A] tracking-[-0.3px]">Sign up</h1>
        <Link
          href="/"
          className="text-[13px] font-semibold transition-opacity hover:opacity-75"
          style={{ color: '#6AB800' }}
        >
          I have an account
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
        <InputField
          label="Email"
          type="email"
          placeholder="Work, school or personal email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Terms & conditions */}
        <p className="text-[12px] text-[#9CA3AF] text-center leading-[1.65] px-1">
          By signing up, you agree to{' '}
          <Link href="/terms" className="font-bold text-[#1A1A1A] hover:underline">
            Terms and conditions
          </Link>
          {' '}and{' '}
          <Link href="/privacy" className="font-bold text-[#1A1A1A] hover:underline">
            Privacy policy
          </Link>
          {' '}of Imtehaan AI.
        </p>

        {/* Agree & sign up button */}
        <button
          type="submit"
          className="w-full py-[15px] rounded-full text-white font-semibold text-[15px] tracking-[0.1px] transition-opacity hover:opacity-90 active:opacity-80"
          style={{ backgroundColor: '#6FC001' }}
        >
          Agree &amp; sign up
        </button>

        {/* OR divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px" style={{ backgroundColor: '#DDE8D8' }} />
          <span className="text-[11.5px] text-[#AABBA8] font-medium tracking-[0.08em]">OR</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#DDE8D8' }} />
        </div>

        <GoogleButton label="Sign up with Google" />
      </form>
    </div>
  )
}
