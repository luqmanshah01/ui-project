import LeftPanel from '@/components/auth/LeftPanel'
import SignUpForm from '@/components/auth/SignUpForm'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      <LeftPanel
        heading={
          <>
            Start your <span style={{ color: '#72B800' }}>learning</span>
            <br />journey
          </>
        }
        description="Adaptive lessons, instant AI feedback, and a plan that flexes around your exam date. Built for students who want to actually enjoy studying"
      />

      <div
        className="flex flex-1 flex-col items-center justify-start px-6 pt-16 lg:pt-[13vh] pb-16"
        style={{ backgroundColor: '#FAFFF5' }}
      >
        <div className="w-full max-w-[460px]">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
