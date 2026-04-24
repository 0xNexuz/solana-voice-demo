import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Proposals from './Proposals';
import Pay from './Pay';
import Profile from './Profile';

function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  const getNavClass = (targetPath) => {
    const baseClass = "flex flex-col items-center gap-1 active:scale-90 transition-transform duration-300 ";
    const activeClass = "text-[#00F5FF] drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]";
    const inactiveClass = "text-white/40 hover:text-[#00F5FF]/80";
    return baseClass + (path === targetPath ? activeClass : inactiveClass);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-[#0A0F14]/80 backdrop-blur-2xl flex justify-around items-center h-20 px-6 border-t border-white/10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <Link to="/" className={getNavClass("/")}>
        <span className="material-symbols-outlined" style={path === "/" ? {fontVariationSettings: "'FILL' 1"} : {}}>dashboard</span>
        <span className="font-manrope text-[10px] uppercase tracking-widest font-bold">DASHBOARD</span>
      </Link>
      <Link to="/proposals" className={getNavClass("/proposals")}>
        <span className="material-symbols-outlined" style={path === "/proposals" ? {fontVariationSettings: "'FILL' 1"} : {}}>how_to_vote</span>
        <span className="font-manrope text-[10px] uppercase tracking-widest">PROPOSALS</span>
      </Link>
      <Link to="/pay" className={getNavClass("/pay")}>
        <span className="material-symbols-outlined" style={path === "/pay" ? {fontVariationSettings: "'FILL' 1"} : {}}>qr_code_scanner</span>
        <span className="font-manrope text-[10px] uppercase tracking-widest">PAY</span>
      </Link>
      <Link to="/profile" className={getNavClass("/profile")}>
        <span className="material-symbols-outlined" style={path === "/profile" ? {fontVariationSettings: "'FILL' 1"} : {}}>person</span>
        <span className="font-manrope text-[10px] uppercase tracking-widest">PROFILE</span>
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-surface text-white min-h-screen pb-24 font-manrope">
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-5 h-16 bg-[#0A0F14]/80 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#00F5FF]">menu</span>
            <h1 className="text-xl font-black tracking-tighter text-[#00F5FF] drop-shadow-[0_0_10px_rgba(0,245,255,0.4)]">SolanaVoice</h1>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00F5FF]"></div>
            <span className="text-[12px] font-bold text-white/70 uppercase">Mainnet</span>
          </div>
        </header>

        <main className="pt-20 px-5 space-y-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/proposals" element={<Proposals />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        
        <Navigation />
        <div className="fixed bottom-24 right-6 pointer-events-none opacity-30 mix-blend-screen">
          <div className="w-32 h-32 holographic-pattern rounded-full animate-pulse"></div>
        </div>
      </div>
    </Router>
  );
}