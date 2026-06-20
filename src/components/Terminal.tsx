import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const commands = {
  help: 'Available commands: about, skills, experience, contact, clear, whoami, uptime, status',
  about: 'Evan Hopkins: Solution Master & IT Professional with 20+ years of experience. Expert in finding root causes and engineering full-stack solutions.',
  skills: 'Expertise: Linux, Windows, DevOps, AI Integration, Security, Networking, VoIP, Cloud, Automation, and more...',
  experience: '15 years at Ville de Montréal, Director of IT at Orderin (age 20), Senior Technician at Netchamp (age 18). Total 20+ years.',
  contact: 'Connect via LinkedIn or visit miscpc.github.io',
  whoami: 'user@evan-hopkins-terminal:~$ A curious visitor seeking the best Solution Master.',
  uptime: 'System up for 41 years (Evan Hopkins v1985)',
  status: 'Ready to engineer your next big solution. All systems nominal.'
};

export const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to Evan Hopkins OS v2.0.0', 'Type "help" to see available commands.']);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (cmd === 'clear') {
      setHistory([]);
    } else if (cmd in commands) {
      setHistory([...history, `> ${input}`, commands[cmd as keyof typeof commands]]);
    } else if (cmd !== '') {
      setHistory([...history, `> ${input}`, `Command not found: ${cmd}. Type "help" for options.`]);
    }
    setInput('');
  };

  return (
    <div className="bg-[#0a0a0a] rounded-lg border border-zinc-800 shadow-2xl overflow-hidden font-mono text-sm h-[400px] flex flex-col">
      <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-emerald-500" />
          <span className="text-zinc-400 text-xs">evan-hopkins-cli</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="flex-1 p-4 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-zinc-800 relative"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none font-mono text-[8px] leading-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Math.random().toString(36).substring(2, 80)}
            </div>
          ))}
        </div>
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-emerald-500' : 'text-zinc-300'}>
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
