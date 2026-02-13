"use client";

import React, { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import Link from 'next/link';
import { Mail, Menu, X } from 'lucide-react';
import styles from '@/styles/Navbar.module.css';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  // Initialize global scroll-reveal observer (runs in client components)
  useScrollReveal();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.navInner}>
          {/* LEFT: Logo */}
          <div className={styles.logo}>
            <div className={styles.sidebarLogo}>
              <span>Jay Singh Chouhan</span>
            </div>
          </div>

          {/* CENTER (Desktop only) */}
          <div className={styles.links}>
            {/* <Link href="/my-love">My Love</Link> */}
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Stack</Link>
            <Link href="#contact">Contact</Link>

          </div>

          {/* RIGHT */}
          <div className={styles.actions}>
            {/* Desktop actions */}
            {/* <a href="tel:+918964850575" className={styles.iconBtn}>
              <Phone size={16} />
            </a> */}


            <ThemeToggle />

            <a href="mailto:jaysinghchouhan112@gmail.com" className={styles.hireBtn}>
              <Mail size={16} />
              <span>Hire Me</span>
            </a>


            {/* Mobile Hamburger */}
            <button
              className={styles.menuBtn}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      {/* LEFT Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>

        {/* Sidebar Header */}
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogo}>
            <span>Jay Singh</span><span>Chouhan</span>
          </div>

          <button
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className={styles.sidebarLinks}>
          {/* <Link href="/my-love" onClick={() => setOpen(false)}>My Love</Link> */}
          <Link href="#experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#skills" onClick={() => setOpen(false)}>Stack</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <div className={styles.sidebarActions}>
          {/* <a href="tel:+918964850575">
            <Phone size={16} />
            <span>Call Me</span>
          </a> */}
          <a href="mailto:jaysinghchouhan112@gmail.com">
            <Mail size={16} />
            <span>Hire Me</span>
          </a>
        </div>


      </aside>

    </>
  );
}