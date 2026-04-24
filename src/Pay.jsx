import { useEffect, useRef } from 'react';
import { encodeURL, createQR } from '@solana/pay';
import { PublicKey } from '@solana/web3.js';
import BigNumber from 'bignumber.js';

export default function Pay() {
  const qrRef = useRef(null);

  useEffect(() => {
    try {
      const recipient = new PublicKey('E1bZ99d56AK9vCFq9Y5nC7ZVz2z8CcxVECsTtwWbYfRj');
      const url = encodeURL({
        recipient,
        amount: new BigNumber(10),
        label: 'SolanaVoice Payment',
      });
      const qr = createQR(url, 200, 'transparent');
      if (qrRef.current) {
        qrRef.current.innerHTML = '';
        qr.append(qrRef.current);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <section className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center space-y-6 animate-fade-in text-center">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">P2P Transfer</h3>
        <p className="text-[12px] font-bold text-white/50 tracking-widest">SCAN WITH PHANTOM OR SOLFLARE</p>
      </div>
      
      <div className="relative group cursor-pointer p-4">
        <div className="absolute -inset-2 bg-primary-container/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
        <div className="relative bg-white p-4 rounded-2xl flex justify-center items-center" ref={qrRef}>
          {/* QR renders here */}
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-primary-container bg-primary-container/10 px-4 py-2 rounded-full">
        <span className="material-symbols-outlined text-sm animate-pulse">sensors</span>
        <span className="text-[12px] font-bold tracking-widest">AWAITING NETWORK CONFIRMATION...</span>
      </div>
    </section>
  );
}