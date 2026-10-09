'use client';

import { useEffect, useMemo, useState } from 'react';
import { BarChart3, CheckCircle2, Sparkles } from 'lucide-react';

const initialPoll = {
  question: 'Should Bangladesh invest more in AI-driven public services?',
  options: [
    { id: 'agree', label: 'Agree', votes: 64 },
    { id: 'strongly-agree', label: 'Strongly agree', votes: 28 },
    { id: 'neutral', label: 'Neutral', votes: 14 },
    { id: 'disagree', label: 'Disagree', votes: 9 },
  ],
};

export default function LivePoll() {
  const [selected, setSelected] = useState('');
  const [poll, setPoll] = useState(initialPoll);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedVote = localStorage.getItem('news-era-poll-vote');
    if (!savedVote) return;

    setSelected(savedVote);
  }, []);

  const totalVotes = useMemo(
    () => poll.options.reduce((sum, option) => sum + option.votes, 0),
    [poll]
  );

  const handleVote = (optionId) => {
    if (selected) return;

    setPoll((current) => ({
      ...current,
      options: current.options.map((option) =>
        option.id === optionId ? { ...option, votes: option.votes + 1 } : option
      ),
    }));

    if (typeof window !== 'undefined') {
      localStorage.setItem('news-era-poll-vote', optionId);
    }

    setSelected(optionId);
  };

  return (
    <section className="rounded-[28px] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/30 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-300">Live poll</div>
          <h3 className="mt-2 text-2xl font-black text-white">Reader sentiment</h3>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
          <Sparkles className="h-3.5 w-3.5" />
          Live</div>
      </div>

      <div className="rounded-2xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-slate-900 p-4">
        <div className="mb-4 text-lg font-semibold text-slate-100">{poll.question}</div>

        <div className="space-y-3">
          {poll.options.map((option) => {
            const percentage = totalVotes ? (option.votes / totalVotes) * 100 : 0;
            const isSelected = selected === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleVote(option.id)}
                disabled={Boolean(selected)}
                className={`group relative block w-full overflow-hidden rounded-2xl border px-3 py-2.5 text-left transition ${
                  isSelected
                    ? 'border-orange-400/50 bg-orange-500/10'
                    : 'border-white/10 bg-slate-950/50 hover:border-orange-400/30 hover:bg-slate-900'
                } ${selected ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500/25 to-amber-400/10"
                  style={{ width: `${percentage}%` }}
                />
                <div className="relative flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {isSelected && <CheckCircle2 className="h-4 w-4 text-orange-300" />}
                    <span className="text-sm font-medium text-slate-100">{option.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-300">{Math.round(percentage)}%</span>
                    <BarChart3 className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
          <span>{totalVotes.toLocaleString()} responses</span>
          <span>{selected ? 'Vote recorded' : 'Tap to vote'}</span>
        </div>
      </div>
    </section>
  );
}
