export default function LeftPanel() {
  return (
    <div
      className="relative hidden lg:flex flex-col w-[42%] min-h-screen overflow-hidden"
      style={{ backgroundColor: '#EDF7D5' }}
    >
      {/* Diagonal stripe 1 — large, lighter lime, goes / direction */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#CBE97C',
          clipPath: 'polygon(0 0, 100% 0, 100% 14%, 0 20%)',
        }}
      />
      {/* Diagonal stripe 2 — narrower, slightly more saturated, just below stripe 1 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#D6F090',
          clipPath: 'polygon(0 20%, 100% 14%, 100% 22%, 0 28%)',
        }}
      />

      {/* Solid lime bar at the very bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ height: '54px', backgroundColor: '#76C001' }}
      />

      {/* Brain + graduation cap logo */}
      <div className="absolute top-6 left-6 z-20">
        <BrainLogo />
      </div>

      {/* Main text content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-12 pb-20 pt-8">
        <h1 className="text-[2.65rem] font-extrabold text-[#1C1C1C] leading-[1.18] mb-5">
          Welcome back,<br />
          ready to{' '}
          <span style={{ color: '#72B800' }}>learn?</span>
        </h1>
        <p className="text-[#555] text-[15px] leading-[1.75] max-w-[330px]">
          You&apos;ve already started something great. Let&apos;s continue
          building your progress and move closer to your goals together.
        </p>
      </div>

      {/* Scattered background education icons */}
      <BackgroundIcons />
    </div>
  )
}

function BrainLogo() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      {/* Graduation cap — flat board */}
      <polygon points="23,5 3,13 23,21 43,13" fill="#1C2B08" />
      {/* Cap tassel string */}
      <line x1="43" y1="13" x2="43" y2="23" stroke="#1C2B08" strokeWidth="2" strokeLinecap="round" />
      <circle cx="43" cy="25" r="2.2" fill="#1C2B08" />
      {/* Brain body */}
      <path
        d="M11 27 C9 26 7 24 7 22 C7 19.5 8.5 18 11 17.5 C10.5 15.5 11.5 13.5 13.5 12.5 C15.5 11.5 18 12 19.5 13.5 C20.5 11.5 21.5 11 23 11 C24.5 11 25.5 11.5 26.5 13.5 C28 12 30.5 11.5 32.5 12.5 C34.5 13.5 35.5 15.5 35 17.5 C37.5 18 39 19.5 39 22 C39 24 37 26 35 27 C35.5 29 35 31 33 33 L13 33 C11 31 10.5 29 11 27Z"
        fill="#1C2B08"
      />
      {/* Brain wrinkle highlights */}
      <path d="M14 22 C15.5 20 18.5 20 19.5 22" stroke="#EDF7D5" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      <path d="M22 21.5 C23.5 19.5 26.5 19.5 27.5 21.5" stroke="#EDF7D5" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      <path d="M13 28 C15 26 18.5 27 19.5 29" stroke="#EDF7D5" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      <path d="M22.5 27.5 C24.5 26.5 27 27.5 27.5 29.5" stroke="#EDF7D5" strokeWidth="1.1" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function BackgroundIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0" style={{ opacity: 0.15 }}>

      {/* Headphones — top right */}
      <svg className="absolute" style={{ top: '7%', right: '6%', width: '60px' }}
        viewBox="0 0 64 64" fill="none" stroke="#2D5500" strokeWidth="2.5" strokeLinecap="round">
        <path d="M10 36C10 20 20 9 32 9s22 11 22 27" />
        <rect x="4" y="32" width="11" height="19" rx="4" fill="#2D5500" stroke="none" />
        <rect x="49" y="32" width="11" height="19" rx="4" fill="#2D5500" stroke="none" />
      </svg>

      {/* Triangle ruler — upper right */}
      <svg className="absolute" style={{ top: '3%', right: '18%', width: '48px' }}
        viewBox="0 0 48 48" fill="none" stroke="#2D5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 44 L4 4 L44 44 Z" />
        <line x1="4" y1="14" x2="10" y2="14" />
        <line x1="4" y1="24" x2="10" y2="24" />
        <line x1="4" y1="34" x2="10" y2="34" />
        <line x1="14" y1="44" x2="14" y2="38" />
        <line x1="24" y1="44" x2="24" y2="38" />
        <line x1="34" y1="44" x2="34" y2="38" />
      </svg>

      {/* Music notes — left side */}
      <svg className="absolute" style={{ top: '30%', left: '8%', width: '34px' }}
        viewBox="0 0 34 52" fill="#2D5500">
        <path d="M30 4L12 10v28a7 7 0 11-4-6.28V6L30 0v4zM8 44a3 3 0 100-6 3 3 0 000 6z" />
        <path d="M30 12a3 3 0 100-6 3 3 0 000 6z" />
      </svg>

      {/* Open book — middle right */}
      <svg className="absolute" style={{ top: '44%', right: '5%', width: '56px' }}
        viewBox="0 0 64 52" fill="none" stroke="#2D5500" strokeWidth="2" strokeLinecap="round">
        <path d="M32 10C24 5 8 5 4 10v36c4-5 20-5 28 0 8-5 24-5 28 0V10c-4-5-20-5-28 0z" />
        <line x1="32" y1="10" x2="32" y2="46" />
        <line x1="12" y1="20" x2="28" y2="20" />
        <line x1="12" y1="28" x2="26" y2="28" />
        <line x1="36" y1="20" x2="52" y2="20" />
        <line x1="36" y1="28" x2="50" y2="28" />
      </svg>

      {/* Pencil — middle area */}
      <svg className="absolute" style={{ top: '52%', left: '20%', width: '12px', height: '60px', transform: 'rotate(-20deg)' }}
        viewBox="0 0 12 60" fill="none" stroke="#2D5500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="1" width="10" height="48" rx="2" fill="#2D5500" fillOpacity="0.4" stroke="#2D5500" />
        <line x1="1" y1="9" x2="11" y2="9" />
        <path d="M1 49 L6 59 L11 49Z" fill="#2D5500" stroke="none" />
      </svg>

      {/* Ruler — lower left */}
      <svg className="absolute" style={{ bottom: '26%', left: '5%', width: '64px', transform: 'rotate(30deg)' }}
        viewBox="0 0 80 20" fill="none" stroke="#2D5500" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="2" width="76" height="16" rx="3" />
        <line x1="14" y1="2" x2="14" y2="9" />
        <line x1="24" y1="2" x2="24" y2="6" />
        <line x1="34" y1="2" x2="34" y2="9" />
        <line x1="44" y1="2" x2="44" y2="6" />
        <line x1="54" y1="2" x2="54" y2="9" />
        <line x1="64" y1="2" x2="64" y2="6" />
      </svg>

      {/* Calculator — lower right */}
      <svg className="absolute" style={{ bottom: '12%', right: '8%', width: '44px' }}
        viewBox="0 0 48 64" fill="none" stroke="#2D5500" strokeWidth="2" strokeLinecap="round">
        <rect x="4" y="4" width="40" height="56" rx="5" />
        <rect x="10" y="12" width="28" height="10" rx="2" />
        <circle cx="14" cy="34" r="3" fill="#2D5500" stroke="none" />
        <circle cx="24" cy="34" r="3" fill="#2D5500" stroke="none" />
        <circle cx="34" cy="34" r="3" fill="#2D5500" stroke="none" />
        <circle cx="14" cy="46" r="3" fill="#2D5500" stroke="none" />
        <circle cx="24" cy="46" r="3" fill="#2D5500" stroke="none" />
        <rect x="30" y="43" width="8" height="6" rx="1" fill="#2D5500" stroke="none" />
      </svg>

      {/* Notebook — right middle-lower */}
      <svg className="absolute" style={{ top: '68%', right: '15%', width: '40px' }}
        viewBox="0 0 40 52" fill="none" stroke="#2D5500" strokeWidth="2" strokeLinecap="round">
        <rect x="4" y="3" width="32" height="46" rx="3" />
        <line x1="4" y1="3" x2="4" y2="49" strokeWidth="5" />
        <line x1="10" y1="14" x2="30" y2="14" />
        <line x1="10" y1="22" x2="30" y2="22" />
        <line x1="10" y1="30" x2="22" y2="30" />
      </svg>

      {/* Tablet / phone — lower left */}
      <svg className="absolute" style={{ bottom: '14%', left: '5%', width: '36px' }}
        viewBox="0 0 36 52" fill="none" stroke="#2D5500" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="30" height="46" rx="4" />
        <circle cx="18" cy="44" r="2.5" fill="#2D5500" stroke="none" />
        <line x1="10" y1="14" x2="26" y2="14" />
        <line x1="10" y1="22" x2="26" y2="22" />
      </svg>

      {/* Small circles (coins) — lower left area */}
      <svg className="absolute" style={{ bottom: '30%', left: '10%', width: '42px' }}
        viewBox="0 0 42 22" fill="none" stroke="#2D5500" strokeWidth="2">
        <circle cx="11" cy="11" r="9" />
        <circle cx="31" cy="11" r="9" />
      </svg>

      {/* Pen / stylus — right side */}
      <svg className="absolute" style={{ top: '57%', right: '11%', width: '12px', height: '52px', transform: 'rotate(15deg)' }}
        viewBox="0 0 12 52" fill="none" stroke="#2D5500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="1" width="10" height="38" rx="2" fill="#2D5500" fillOpacity="0.35" stroke="#2D5500" />
        <path d="M2 39 L6 51 L10 39Z" fill="#2D5500" stroke="none" />
        <line x1="1" y1="8" x2="11" y2="8" />
      </svg>

      {/* Arrow / pointer — upper left area */}
      <svg className="absolute" style={{ top: '37%', left: '4%', width: '32px' }}
        viewBox="0 0 32 32" fill="none" stroke="#2D5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4 L28 16 L16 18 L10 28 Z" />
      </svg>

      {/* Paper with lines — middle left */}
      <svg className="absolute" style={{ top: '47%', left: '6%', width: '38px' }}
        viewBox="0 0 38 48" fill="none" stroke="#2D5500" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 4 h22 l8 8 v32 H4 Z" />
        <path d="M26 4 v8 h8" />
        <line x1="10" y1="20" x2="28" y2="20" />
        <line x1="10" y1="28" x2="28" y2="28" />
        <line x1="10" y1="36" x2="20" y2="36" />
      </svg>

    </div>
  )
}
