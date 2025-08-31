import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from './CafeInfo';
import VoteOptions from './VoteOptions';
import type { Votes, VoteType } from './types/votes';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prev: Votes) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={true}
      />
    </div>
  );
}
