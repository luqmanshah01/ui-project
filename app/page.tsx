import LeftPanel from '@/components/auth/LeftPanel'
import SignInForm from '@/components/auth/SignInForm'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <LeftPanel />
      <div className="flex flex-1 bg-white items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <SignInForm />
        </div>
      </div>
    </div>
  )
}
