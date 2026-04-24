export default function Proposals() {
  return (
    <section className="glass-card rounded-3xl p-6 space-y-5 animate-fade-in">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white">Active Proposals</h3>
        <span className="material-symbols-outlined text-white/30 cursor-pointer">add_circle</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-primary-container/30 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center border border-white/10">
            <span className="material-symbols-outlined text-primary-container">gavel</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold">Treasury Allocation 2026</p>
            <p className="text-[12px] text-white/40 font-medium">Ends in 2 days • 12.4k Votes</p>
          </div>
          <span className="material-symbols-outlined text-primary-container">check_circle</span>
        </div>
        
        <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center border border-white/10">
            <span className="material-symbols-outlined text-[#e9c176]">mic</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold">Native Voice Staking</p>
            <p className="text-[12px] text-white/40 font-medium">Ends in 5 hours • 8.1k Votes</p>
          </div>
          <div className="bg-primary-container/10 px-2 py-1 rounded-md">
            <span className="text-[10px] font-bold tracking-widest text-primary-container">VOTE</span>
          </div>
        </div>
      </div>
    </section>
  );
}