'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ExternalLink, Moon, Sun, Monitor, FolderKanban } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/layout/ThemeProvider';

interface Command {
  id: string;
  title: string;
  icon?: React.ReactNode;
  action: () => void;
  section: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const toggleTheme = (t: 'light' | 'dark' | 'system') => {
    setTheme(t);
  };

  const commands: Command[] = [
    { id: 'home', title: 'Home', section: 'Navigation', action: () => router.push('/') },
    { id: 'projects', title: 'All Projects', section: 'Navigation', action: () => router.push('/projects') },
    { id: 'achievements', title: 'Achievements & Certifications', section: 'Navigation', action: () => router.push('/achievements') },
    { id: 'about', title: 'About & Journey', section: 'Navigation', action: () => router.push('/about') },
    { id: 'resume', title: 'Resume', section: 'Navigation', action: () => router.push('/resume') },
    { id: 'contact', title: 'Contact', section: 'Navigation', action: () => router.push('/contact') },
    
    // Project Case Studies
    { id: 'cs-kashmir-stag', title: 'KashmirStag — Case Study', icon: <FolderKanban size={14} />, section: 'Case Studies', action: () => router.push('/projects/kashmir-stag') },
    { id: 'cs-fragments', title: 'Fragments of Me — Case Study', icon: <FolderKanban size={14} />, section: 'Case Studies', action: () => router.push('/projects/fragments-of-me') },
    { id: 'cs-azad', title: 'Azad Associates Solar — Case Study', icon: <FolderKanban size={14} />, section: 'Case Studies', action: () => router.push('/projects/azad-associates') },

    // External Live Links
    { id: 'kashmirstag-live', title: 'KashmirStag (Live Storefront)', icon: <ExternalLink size={14} />, section: 'External Products', action: () => window.open('https://kashmir-stag.vercel.app/', '_blank') },
    { id: 'fragments-live', title: 'Fragments of Me (Live Sanctuary)', icon: <ExternalLink size={14} />, section: 'External Products', action: () => window.open('https://fragmants-of-me.vercel.app/', '_blank') },
    { id: 'github', title: 'GitHub Profile (@CodeWithSalik)', icon: <ExternalLink size={14} />, section: 'Social & Code', action: () => window.open('https://github.com/CodeWithSalik', '_blank') },
    { id: 'instagram', title: 'Instagram (@codewithsalik)', icon: <ExternalLink size={14} />, section: 'Social & Code', action: () => window.open('https://www.instagram.com/codewithsalik/', '_blank') },
    
    // Themes
    { id: 'theme-dark', title: 'Theme: Dark Mode', icon: <Moon size={14} />, section: 'Preferences', action: () => toggleTheme('dark') },
    { id: 'theme-light', title: 'Theme: Light Mode', icon: <Sun size={14} />, section: 'Preferences', action: () => toggleTheme('light') },
    { id: 'theme-system', title: 'Theme: Follow System', icon: <Monitor size={14} />, section: 'Preferences', action: () => toggleTheme('system') },
  ];

  const filteredCommands = query === '' 
    ? commands 
    : commands.filter(cmd => 
        cmd.title.toLowerCase().includes(query.toLowerCase()) || 
        cmd.section.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => (i - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
      setIsOpen(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="max-w-xl p-0 overflow-hidden">
      <div className="flex flex-col h-full max-h-[65vh]">
        <div className="flex items-center border-b border-border-subtle px-4 py-3.5 bg-canvas">
          <Search className="text-text-muted mr-3" size={18} />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={isOpen}
            aria-controls="command-list"
            aria-autocomplete="list"
            className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder-text-muted text-sm font-sans"
            placeholder="Type a command or search sections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-medium text-text-muted bg-surface border border-border-subtle px-2 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        <div id="command-list" role="listbox" className="flex-1 overflow-y-auto p-2 bg-canvas">
          {filteredCommands.length === 0 ? (
            <div className="py-12 text-center text-sm text-text-muted font-mono">
              No matching commands.
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {filteredCommands.map((cmd, index) => (
                <button
                  key={cmd.id}
                  role="option"
                  aria-selected={index === selectedIndex}
                  onClick={() => {
                    cmd.action();
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={cn(
                    'flex items-center w-full px-3 py-2.5 text-xs md:text-sm rounded-lg text-left transition-colors focus:outline-none',
                    index === selectedIndex
                      ? 'bg-accent/10 text-accent font-semibold'
                      : 'text-text-secondary hover:bg-surface'
                  )}
                >
                  <span className="flex-1">{cmd.title}</span>
                  <span className="text-[10px] font-mono text-text-muted mr-3 uppercase tracking-wider">{cmd.section}</span>
                  {cmd.icon && <span className="text-text-muted">{cmd.icon}</span>}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="p-2.5 border-t border-border-subtle bg-surface flex items-center justify-between text-[11px] font-mono text-text-muted">
          <span>Navigate with ↑ ↓</span>
          <span>Open with ↵ Enter</span>
        </div>
      </div>
    </Modal>
  );
}
