"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const LIGHT_META = '#0ea5e9';
const DARK_META = '#0f172a';

export default function ThemeToggle() {
  // Start neutral to avoid reading localStorage during server render
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  const initialThemeRef = useRef<'light' | 'dark'>('light');

  // On mount, read stored preference (if any) and apply it immediately to the DOM.
  // We DO NOT call setState here to avoid cascading renders; instead we store
  // the computed initial value in a ref and set React state after mount.
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      let initial: 'light' | 'dark' = 'light';
      if (stored === 'light' || stored === 'dark') {
        initial = stored;
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        initial = prefersDark ? 'dark' : 'light';
      }

      initialThemeRef.current = initial;

      const root = document.documentElement;
      if (initial === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');

      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', initial === 'dark' ? DARK_META : LIGHT_META);
    } catch {
      // ignore
    }

    // schedule mounted update asynchronously to avoid synchronous setState inside the effect
    if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
      window.requestAnimationFrame(() => setMounted(true));
    } else {
      setTimeout(() => setMounted(true), 0);
    }
  }, []);

  // After mount, update React state from the ref. Doing this in a separate
  // effect avoids calling setState synchronously within the layout effect.
  useEffect(() => {
    if (!mounted) return;
    setTheme(initialThemeRef.current);
  }, [mounted]);

  // Apply and persist theme when changed
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? DARK_META : LIGHT_META);
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme, mounted]);

  // Don't render theme-specific icon until mounted to avoid hydration mismatch
  if (!mounted) {
    return <button aria-hidden className="theme-toggle" />;
  }

  return (
    <button
      aria-label="Toggle theme"
      title="Toggle theme"
      className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
      aria-pressed={theme === 'dark'}
      onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
    >
      <span className="icon" aria-hidden>
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
