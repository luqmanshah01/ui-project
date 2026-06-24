import LeftPanel from '@/components/auth/LeftPanel'
import SignInForm from '@/components/auth/SignInForm'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <LeftPanel />

      {/* Right panel — slight off-white tint, form anchored from top */}
      <div
        className="flex flex-1 flex-col items-center justify-start px-6 pt-16 lg:pt-[13vh] pb-16"
        style={{ backgroundColor: '#FAFFF5' }}
      >
        <div className="w-full max-w-[460px]">
          <SignInForm />
        </div>
      </div>
    </div>
  )
}
