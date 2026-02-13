"use client"

import React, { useRef,  useEffect } from 'react';
import styles from '@/styles/Experience.module.css';
import { Experience as ExperienceType } from '@/types';
import { DATA, getDateRange, calculateDuration } from '@/data/portfolioData';

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);


  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      const cardElements = document.querySelectorAll(`.${styles.card}`);
      cardElements.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMoveGlobal);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMoveGlobal);
      }
    };
  }, []);

  return (
    <section id="experience" className={styles.section} ref={sectionRef}>
      <h3 className={`${styles.sectionTitle} reveal`}>
        <span className={styles.line}></span> Professional Journey
      </h3>

      <div className={styles.grid}>
        {DATA.experience.map((exp: ExperienceType, index: number) => (
          <div 
            key={index} 
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <p className={styles.company}>{exp.company}</p>
              <span className={styles.date}>
                {getDateRange(exp.startDate, exp.endDate)} • {calculateDuration(exp.startDate, exp.endDate)}
              </span>
            </div>
            <h4 className={styles.role}>{exp.role}</h4>
            <p className={styles.desc}>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

