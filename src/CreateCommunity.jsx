import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateCommunity() {
  const [name, setName] = useState('');
  const [wallets, setWallets] = useState('');
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    alert(`Community "${name}" created with ${wallets.split(',').length} members!`);
    navigate('/propose');
  };

  return (
    <div className="card">
      <h3>Create a Community</h3>
      <p>Launch your local DAO or savings group.</p>
      <form onSubmit={handleCreate}>
        <div className="input-group">
          <label>Community Name</label>
          <input 
            type="text" 
            placeholder="e.g., Benin City Cooperatives" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Member Wallets (comma separated)</label>
          <textarea 
            placeholder="Enter Solana wallet addresses..." 
            value={wallets} 
            onChange={(e) => setWallets(e.target.value)} 
            required
            rows="3"
          />
        </div>
        <button type="submit" className="btn">Initialize Community</button>
      </form>
    </div>
  );
}