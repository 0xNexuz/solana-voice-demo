export default function Dashboard() {
  return (
    <div className="space-y-4 animate-fade-in">
      <section className="glass-card rounded-3xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <span className="material-symbols-outlined text-6xl" style={{fontVariationSettings: "'FILL' 1"}}>account_balance</span>
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[12px] font-bold text-white/50 mb-1 tracking-widest">TOTAL PORTFOLIO</p>
              <h2 className="text-4xl font-bold text-primary-container tracking-tighter">$42,904.12</h2>
            </div>
            <div className="bg-[#e9c176]/10 border border-[#e9c176]/30 px-3 py-1 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-[#e9c176] text-sm" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
              <span className="text-[10px] text-[#e9c176] tracking-widest uppercase font-bold">Exclusive Tier</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button className="flex-1 bg-primary-container text-[#003739] font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 inner-glow-turquoise">
              <span className="material-symbols-outlined text-xl">add</span>
              <span>Stake SOL</span>
            </button>
          </div>
        </div>
      </section>

      <section className="glass-card rounded-3xl p-5 space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-[12px] font-bold text-white/50 tracking-widest">COMMUNITY QUORUM</p>
          <span className="material-symbols-outlined text-[#e9c176]" style={{fontVariationSettings: "'FILL' 1"}}>how_to_vote</span>
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-end mb-1">
              <span className="text-[12px] text-white/70 font-medium">Participation Rate</span>
              <span className="text-[12px] font-bold text-primary-container">84%</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary-container w-[84%] shadow-[0_0_8px_#00F5FF]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}