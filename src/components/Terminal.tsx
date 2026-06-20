import { useEffect, useMemo, useRef, useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { LocaleContent } from '../content';

interface TerminalProps {
  content: LocaleContent['terminal'];
}

export const Terminal = ({ content }: TerminalProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(content.history);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory(content.history);
  }, [content]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const commandMap = useMemo(() => {
    const map: Record<string, keyof typeof content.responses | 'clear'> = {
      clear: 'clear',
      ...content.aliases,
    } as Record<string, keyof typeof content.responses | 'clear'>;

    (Object.keys(content.responses) as Array<keyof typeof content.responses>).forEach((key) => {
      map[key] = key;
    });

    return map;
  }, [content]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = input.trim();
    const cmd = raw.toLowerCase();
    const normalized = commandMap[cmd];

    if (normalized === 'clear') {
      setHistory([]);
    } else if (normalized && normalized in content.responses) {
      setHistory((prev) => [...prev, `> ${raw}`, content.responses[normalized as keyof typeof content.responses]]);
    } else if (cmd !== '') {
      setHistory((prev) => [
        ...prev,
        `> ${raw}`,
        content.notFound.replace('{{cmd}}', cmd),
      ]);
    }

    setInput('');
  };

  return (
    <div className="bg-[#0a0a0a] rounded-lg border border-zinc-800 shadow-2xl overflow-hidden font-mono text-sm h-[400px] flex flex-col">
      <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-emerald-500" />
          <span className="text-zinc-400 text-xs">{content.title}</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
      </div>
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-zinc-800 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none font-mono text-[8px] leading-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Math.random().toString(36).substring(2, 80)}
            </div>
          ))}
        </div>
        {history.map((line, i) => (
          <div key={`${line}-${i}`} className={line.startsWith('>') ? 'text-emerald-500' : 'text-zinc-300'}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex">
          <span className="text-emerald-500 mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-zinc-300"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};
