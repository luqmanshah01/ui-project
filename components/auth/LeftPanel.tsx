export default function LeftPanel() {
  return (
    <div
      className="relative hidden lg:flex flex-col w-[42%] min-h-screen overflow-hidden"
      style={{ backgroundColor: '#EDF7D5' }}
    >
      {/* Stripe 1 — larger, more saturated lime, / direction (right side higher) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#C2E868',
          clipPath: 'polygon(0 0, 100% 0, 100% 14%, 0 24%)',
        }}
      />
      {/* Stripe 2 — narrower, slightly lighter lime, directly below stripe 1 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#CCEA82',
          clipPath: 'polygon(0 24%, 100% 14%, 100% 22%, 0 32%)',
        }}
      />

      {/* Bottom bar — same diagonal angle, bright lime */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#76C001',
          clipPath: 'polygon(0 93%, 100% 94%, 100% 100%, 0 100%)',
        }}
      />

      {/* Brain logo */}
      <div className="absolute top-[22px] left-[22px] z-20">
        <BrainLogo />
      </div>

      {/* Text content — shifted slightly above center using pb */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-11 pb-[22%] pt-0">
        <h1 className="text-[2.65rem] font-extrabold text-[#1A1A1A] leading-[1.17] mb-4">
          Welcome back,<br />
          ready to{' '}
          <span style={{ color: '#72B800' }}>learn?</span>
        </h1>
        <p className="text-[#606060] text-[14.5px] leading-[1.72] max-w-[320px]">
          You&apos;ve already started something great. Let&apos;s continue
          building your progress and move closer to your goals together.
        </p>
      </div>

      {/* Scattered background icons */}
      <BackgroundIcons />
    </div>
  )
}

function BrainLogo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      {/* Graduation cap — flat mortarboard */}
      <polygon points="24,5 3,14 24,23 45,14" fill="#1A2A08" />
      {/* Tassel cord */}
      <line x1="45" y1="14" x2="45" y2="25" stroke="#1A2A08" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="45" cy="27" r="2.5" fill="#1A2A08" />
      {/* Brain — rounded organic shape */}
      <path
        d="M12 29 C10 28 8 26 8 23.5 C8 21 9.5 19.5 12 19 C11.5 17 12.5 14.5 14.5 13.5 C16.5 12.5 19 13 20.5 14.5 C21.5 12.5 22.5 12 24 12 C25.5 12 26.5 12.5 27.5 14.5 C29 13 31.5 12.5 33.5 13.5 C35.5 14.5 36.5 17 36 19 C38.5 19.5 40 21 40 23.5 C40 26 38 28 36 29 C36.5 31 36 33 34 35 L14 35 C12 33 11.5 31 12 29Z"
        fill="#1A2A08"
      />
      {/* Brain wrinkle highlights */}
      <path d="M15 24 C16.5 22 19.5 22 20.5 24" stroke="#EDF7D5" strokeWidth="1.15" strokeLinecap="round" fill="none" />
      <path d="M23 23 C24.5 21 27.5 21 28.5 23" stroke="#EDF7D5" strokeWidth="1.15" strokeLinecap="round" fill="none" />
      <path d="M14 30 C16 28 19.5 29 20.5 31" stroke="#EDF7D5" strokeWidth="1.15" strokeLinecap="round" fill="none" />
      <path d="M23.5 29 C25.5 28 28 29 28.5 31" stroke="#EDF7D5" strokeWidth="1.15" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function BackgroundIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0" style={{ opacity: 0.16 }}>

      {/* Headphones — top right */}
      <svg className="absolute" style={{ top: '6%', right: '7%', width: '62px' }}
        viewBox="0 0 64 64" fill="none" stroke="#1E4400" strokeWidth="2.2" strokeLinecap="round">
        <path d="M10 37C10 20 20 9 32 9s22 11 22 28" />
        <rect x="4" y="33" width="11" height="20" rx="4" fill="#1E4400" stroke="none" />
        <rect x="49" y="33" width="11" height="20" rx="4" fill="#1E4400" stroke="none" />
      </svg>

      {/* Triangle set-square — upper right */}
      <svg className="absolute" style={{ top: '2%', right: '22%', width: '46px' }}
        viewBox="0 0 46 46" fill="none" stroke="#1E4400" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 43 L3 3 L43 43 Z" />
        <line x1="3" y1="13" x2="9" y2="13" />
        <line x1="3" y1="23" x2="9" y2="23" />
        <line x1="3" y1="33" x2="9" y2="33" />
        <line x1="13" y1="43" x2="13" y2="37" />
        <line x1="23" y1="43" x2="23" y2="37" />
        <line x1="33" y1="43" x2="33" y2="37" />
      </svg>

      {/* Music note — left, upper-middle */}
      <svg className="absolute" style={{ top: '33%', left: '9%', width: '32px' }}
        viewBox="0 0 32 50" fill="#1E4400">
        <path d="M28 4L10 10v26a6 6 0 11-4-5.65V6L28 0v4z" />
      </svg>

      {/* Open book with lines — right middle */}
      <svg className="absolute" style={{ top: '43%', right: '6%', width: '58px' }}
        viewBox="0 0 64 52" fill="none" stroke="#1E4400" strokeWidth="1.8" strokeLinecap="round">
        <path d="M32 10C24 5 8 5 4 10v36c4-5 20-5 28 0 8-5 24-5 28 0V10c-4-5-20-5-28 0z" />
        <line x1="32" y1="10" x2="32" y2="46" />
        <line x1="11" y1="20" x2="28" y2="20" />
        <line x1="11" y1="28" x2="26" y2="28" />
        <line x1="36" y1="20" x2="53" y2="20" />
        <line x1="36" y1="28" x2="51" y2="28" />
      </svg>

      {/* Pencil — middle area, tilted */}
      <svg className="absolute" style={{ top: '51%', left: '22%', width: '13px', height: '64px', transform: 'rotate(-22deg)' }}
        viewBox="0 0 13 64" fill="none">
        <rect x="1" y="1" width="11" height="50" rx="2" fill="#1E4400" fillOpacity="0.5" />
        <path d="M1 51 L6.5 63 L12 51Z" fill="#1E4400" />
        <line x1="1" y1="10" x2="12" y2="10" stroke="#EDF7D5" strokeWidth="1.5" />
      </svg>

      {/* Ruler — lower left, tilted */}
      <svg className="absolute" style={{ bottom: '28%', left: '4%', width: '66px', transform: 'rotate(28deg)' }}
        viewBox="0 0 84 22" fill="none" stroke="#1E4400" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="2" width="80" height="18" rx="3" />
        <line x1="14" y1="2" x2="14" y2="9" />
        <line x1="24" y1="2" x2="24" y2="6" />
        <line x1="34" y1="2" x2="34" y2="9" />
        <line x1="44" y1="2" x2="44" y2="6" />
        <line x1="54" y1="2" x2="54" y2="9" />
        <line x1="64" y1="2" x2="64" y2="6" />
        <line x1="74" y1="2" x2="74" y2="9" />
      </svg>

      {/* Calculator — lower right */}
      <svg className="absolute" style={{ bottom: '13%', right: '8%', width: '46px' }}
        viewBox="0 0 50 68" fill="none" stroke="#1E4400" strokeWidth="1.8" strokeLinecap="round">
        <rect x="4" y="4" width="42" height="60" rx="5" />
        <rect x="10" y="12" width="30" height="11" rx="2" />
        <circle cx="14" cy="36" r="3.5" fill="#1E4400" stroke="none" />
        <circle cx="25" cy="36" r="3.5" fill="#1E4400" stroke="none" />
        <circle cx="36" cy="36" r="3.5" fill="#1E4400" stroke="none" />
        <circle cx="14" cy="50" r="3.5" fill="#1E4400" stroke="none" />
        <circle cx="25" cy="50" r="3.5" fill="#1E4400" stroke="none" />
        <rect x="32" y="47" width="8" height="7" rx="1.5" fill="#1E4400" stroke="none" />
      </svg>

      {/* Notebook with spine — right lower */}
      <svg className="absolute" style={{ top: '67%', right: '16%', width: '42px' }}
        viewBox="0 0 42 54" fill="none" stroke="#1E4400" strokeWidth="1.8" strokeLinecap="round">
        <rect x="4" y="3" width="34" height="48" rx="3" />
        <line x1="4" y1="3" x2="4" y2="51" strokeWidth="5.5" />
        <line x1="10" y1="15" x2="32" y2="15" />
        <line x1="10" y1="24" x2="32" y2="24" />
        <line x1="10" y1="33" x2="22" y2="33" />
      </svg>

      {/* Tablet/phone — lower left */}
      <svg className="absolute" style={{ bottom: '16%', left: '5%', width: '38px' }}
        viewBox="0 0 38 54" fill="none" stroke="#1E4400" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="3" width="32" height="48" rx="4" />
        <circle cx="19" cy="46" r="2.5" fill="#1E4400" stroke="none" />
        <line x1="11" y1="14" x2="27" y2="14" />
        <line x1="11" y1="22" x2="27" y2="22" />
        <line x1="11" y1="30" x2="20" y2="30" />
      </svg>

      {/* Two coins / circles — lower left */}
      <svg className="absolute" style={{ bottom: '31%', left: '10%', width: '46px' }}
        viewBox="0 0 46 24" fill="none" stroke="#1E4400" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <circle cx="34" cy="12" r="10" />
        <line x1="6" y1="12" x2="18" y2="12" strokeWidth="0.8" />
        <line x1="12" y1="6" x2="12" y2="18" strokeWidth="0.8" />
        <line x1="28" y1="12" x2="40" y2="12" strokeWidth="0.8" />
        <line x1="34" y1="6" x2="34" y2="18" strokeWidth="0.8" />
      </svg>

      {/* Paper / document — middle left */}
      <svg className="absolute" style={{ top: '46%', left: '5%', width: '40px' }}
        viewBox="0 0 40 50" fill="none" stroke="#1E4400" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4 h22 l10 10 v32 H4 Z" />
        <path d="M26 4 v10 h10" />
        <line x1="10" y1="22" x2="30" y2="22" />
        <line x1="10" y1="30" x2="30" y2="30" />
        <line x1="10" y1="38" x2="20" y2="38" />
      </svg>

      {/* Pen / stylus — right side middle */}
      <svg className="absolute" style={{ top: '55%', right: '12%', width: '13px', height: '56px', transform: 'rotate(12deg)' }}
        viewBox="0 0 13 56" fill="none">
        <rect x="1" y="1" width="11" height="40" rx="2" fill="#1E4400" fillOpacity="0.4" />
        <path d="M1 41 L6.5 55 L12 41Z" fill="#1E4400" />
        <line x1="1" y1="8" x2="12" y2="8" stroke="#EDF7D5" strokeWidth="1.5" />
      </svg>

      {/* Small arrow / pointer — upper left */}
      <svg className="absolute" style={{ top: '36%', left: '3%', width: '34px' }}
        viewBox="0 0 34 34" fill="none" stroke="#1E4400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4 L30 17 L17 19 L11 30 Z" />
      </svg>

      {/* Paintbrush — lower middle */}
      <svg className="absolute" style={{ bottom: '20%', left: '34%', width: '14px', height: '60px', transform: 'rotate(-10deg)' }}
        viewBox="0 0 14 60" fill="none" stroke="#1E4400" strokeWidth="1.8" strokeLinecap="round">
        <rect x="4" y="1" width="6" height="38" rx="1.5" fill="#1E4400" fillOpacity="0.4" stroke="#1E4400" />
        <path d="M4 39 Q7 55 7 59 Q7 55 10 39Z" fill="#1E4400" />
        <line x1="3" y1="8" x2="11" y2="8" stroke="#EDF7D5" strokeWidth="1" />
      </svg>

    </div>
  )
}
