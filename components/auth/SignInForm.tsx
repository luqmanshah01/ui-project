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
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl font-bold text-gray-900">Sign in</h1>
        <Link
          href="/register"
          className="text-sm font-semibold hover:opacity-80 transition-opacity"
          style={{ color: '#72B800' }}
        >
          I don&apos;t have an account
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
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
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 cursor-pointer accent-[#72B800]"
            />
            <span className="text-sm text-gray-400">Remember me</span>
          </label>
          <Link
            href="/forgot-password"
            className="text-sm font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Continue button */}
        <button
          type="submit"
          className="w-full py-4 rounded-full text-white font-semibold text-base transition-opacity hover:opacity-90 active:opacity-80"
          style={{ backgroundColor: '#72B800' }}
        >
          Continue
        </button>

        {/* OR divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium tracking-wide">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <GoogleButton />
      </form>
    </div>
  )
}
