import LeftPanel from '@/components/auth/LeftPanel'
import SignInForm from '@/components/auth/SignInForm'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <LeftPanel />
      {/* Right panel — very slight off-white tint, not pure white */}
      <div
        className="flex flex-1 items-center justify-center px-8 py-16 lg:px-20"
        style={{ backgroundColor: '#FAFFF5' }}
      >
        <div className="w-full max-w-[450px]">
          <SignInForm />
        </div>
      </div>
    </div>
  )
}
