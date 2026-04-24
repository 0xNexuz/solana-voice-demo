export default function Profile() {
  return (
    <section className="glass-card rounded-3xl p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between border-b-2 border-[#e9c176]/20 pb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary-container to-[#e9c176] p-[2px]">
              <div className="w-full h-full rounded-full bg-surface overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-white/50">person</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#604403] p-1 rounded-full border-2 border-surface">
              <span className="material-symbols-outlined text-[14px] text-[#e9c176]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg text-white font-bold">sol_explorer.sol</h4>
            <p className="text-[12px] text-white/40 font-medium">Verified Citizen • Mainnet-Beta</p>
          </div>
        </div>
        <button className="material-symbols-outlined text-white/40 hover:text-white transition-colors">settings</button>
      </div>
      
      <button className="w-full border border-white/10 bg-white/5 text-white/70 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-white/10">
        <span className="material-symbols-outlined text-xl">logout</span>
        <span>Disconnect Wallet</span>
      </button>
    </section>
  );
}