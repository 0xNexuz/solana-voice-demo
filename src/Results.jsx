export default function Results() {
  // Mock data representing on-chain tally
  const mockTally = { yes: 42, no: 8, total: 50 };
  const yesPercentage = (mockTally.yes / mockTally.total) * 100;

  return (
    <div className="card">
      <h3>Live Vote Results</h3>
      <p className="proposal-text">"Allocate 50 USDC for community well repairs"</p>
      
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${yesPercentage}%` }}>
          {yesPercentage}% Yes
        </div>
      </div>
      
      <div className="tally-details">
        <p>✅ Yes: <strong>{mockTally.yes}</strong></p>
        <p>❌ No: <strong>{mockTally.no}</strong></p>
        <p>👥 Total Cast: <strong>{mockTally.total}</strong></p>
      </div>
      <p className="status success">Status: QUORUM REACHED</p>
    </div>
  );
}