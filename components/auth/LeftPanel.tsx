export default function LeftPanel() {
  return (
    <div
      className="relative hidden lg:flex flex-col w-[42%] min-h-screen overflow-hidden"
      style={{ backgroundColor: '#EBF6CF' }}
    >
      {/* Diagonal stripe 1 */}
      <div
        className="absolute"
        style={{
          width: '160%',
          height: '40%',
          backgroundColor: '#C8E870',
          top: '-8%',
          left: '-15%',
          transform: 'rotate(-10deg)',
          transformOrigin: 'center',
        }}
      />
      {/* Diagonal stripe 2 */}
      <div
        className="absolute"
        style={{
          width: '160%',
          height: '24%',
          backgroundColor: '#D4EF88',
          top: '14%',
          left: '-15%',
          transform: 'rotate(-10deg)',
          transformOrigin: 'center',
        }}
      />

      {/* Logo */}
      <div className="absolute top-7 left-7 z-20">
        <BrainLogo />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-12 pt-32 pb-20">
        <h1 className="text-[2.6rem] font-extrabold text-gray-900 leading-[1.2] mb-5">
          Welcome back,<br />
          ready to{' '}
          <span style={{ color: '#72B800' }}>learn?</span>
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-[320px]">
          You&apos;ve already started something great. Let&apos;s continue
          building your progress and move closer to your goals together.
        </p>
      </div>

      {/* Background decorative icons */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.12 }}>
        {/* Headphones */}
        <svg
          className="absolute"
          style={{ top: '8%', right: '5%', width: '58px' }}
          viewBox="0 0 64 64"
          fill="none"
          stroke="#2D5A00"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M10 38C10 22 20 10 32 10s22 12 22 28" />
          <rect x="5" y="34" width="10" height="18" rx="4" fill="#2D5A00" stroke="none" />
          <rect x="49" y="34" width="10" height="18" rx="4" fill="#2D5A00" stroke="none" />
        </svg>

        {/* Open book */}
        <svg
          className="absolute"
          style={{ top: '46%', right: '7%', width: '52px' }}
          viewBox="0 0 64 48"
          fill="none"
          stroke="#2D5A00"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M32 8C24 3 8 3 4 8v36c4-5 20-5 28 0 8-5 24-5 28 0V8c-4-5-20-5-28 0z" />
          <line x1="32" y1="8" x2="32" y2="44" />
        </svg>

        {/* Pencil */}
        <svg
          className="absolute"
          style={{ top: '55%', left: '7%', width: '14px', height: '58px', transform: 'rotate(-30deg)' }}
          viewBox="0 0 14 58"
          fill="none"
          stroke="#2D5A00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="10" height="44" rx="2" fill="#2D5A00" fillOpacity="0.5" stroke="none" />
          <path d="M2 46 L7 56 L12 46Z" fill="#2D5A00" stroke="none" />
          <line x1="2" y1="10" x2="12" y2="10" />
        </svg>

        {/* Calculator */}
        <svg
          className="absolute"
          style={{ bottom: '10%', right: '8%', width: '44px' }}
          viewBox="0 0 48 64"
          fill="none"
          stroke="#2D5A00"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <rect x="4" y="4" width="40" height="56" rx="4" />
          <rect x="10" y="12" width="28" height="10" rx="2" />
          <circle cx="14" cy="34" r="3" fill="#2D5A00" />
          <circle cx="24" cy="34" r="3" fill="#2D5A00" />
          <circle cx="34" cy="34" r="3" fill="#2D5A00" />
          <circle cx="14" cy="46" r="3" fill="#2D5A00" />
          <circle cx="24" cy="46" r="3" fill="#2D5A00" />
          <circle cx="34" cy="46" r="3" fill="#2D5A00" />
        </svg>

        {/* Ruler */}
        <svg
          className="absolute"
          style={{ bottom: '22%', left: '4%', width: '60px', transform: 'rotate(20deg)' }}
          viewBox="0 0 80 20"
          fill="none"
          stroke="#2D5A00"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <rect x="2" y="2" width="76" height="16" rx="3" />
          <line x1="14" y1="2" x2="14" y2="9" />
          <line x1="24" y1="2" x2="24" y2="7" />
          <line x1="34" y1="2" x2="34" y2="9" />
          <line x1="44" y1="2" x2="44" y2="7" />
          <line x1="54" y1="2" x2="54" y2="9" />
          <line x1="64" y1="2" x2="64" y2="7" />
        </svg>

        {/* Notebook */}
        <svg
          className="absolute"
          style={{ top: '68%', right: '14%', width: '38px' }}
          viewBox="0 0 38 50"
          fill="none"
          stroke="#2D5A00"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <rect x="3" y="3" width="32" height="44" rx="3" />
          <line x1="3" y1="3" x2="3" y2="47" strokeWidth="5" />
          <line x1="9" y1="14" x2="29" y2="14" />
          <line x1="9" y1="22" x2="29" y2="22" />
          <line x1="9" y1="30" x2="20" y2="30" />
        </svg>

        {/* Music note */}
        <svg
          className="absolute"
          style={{ top: '28%', left: '6%', width: '28px' }}
          viewBox="0 0 28 44"
          fill="#2D5A00"
        >
          <path d="M26 2L10 8v26a6 6 0 11-4-5.66V4L26 0v2z" />
        </svg>
      </div>
    </div>
  )
}

function BrainLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      {/* Graduation cap */}
      <polygon points="22,5 4,12 22,19 40,12" fill="#1A1A1A" />
      <line x1="40" y1="12" x2="40" y2="22" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="23.5" r="2" fill="#1A1A1A" />
      {/* Brain body */}
      <path
        d="M10 24C10 20 12.5 17.5 16 17.5C16.5 15.5 18 14 20 14C21 14 22 14.5 22 15C22 14.5 23 14 24 14C26 14 27.5 15.5 28 17.5C31.5 17.5 34 20 34 24C36 24 38 26 38 28.5C38 31 36 33 34 33C33.5 35 32 37 30 37L14 37C12 37 10.5 35 10 33C8 33 6 31 6 28.5C6 26 8 24 10 24Z"
        fill="#1A1A1A"
      />
      {/* Brain wrinkles */}
      <path d="M14 25C15.5 23 18 23 19 25" stroke="#EBF6CF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M21 24C22.5 22 25 22 26 24" stroke="#EBF6CF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M13 30C15 28 18 29 19 31" stroke="#EBF6CF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M22 29C24 28 26 29 26.5 31" stroke="#EBF6CF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  )
}
