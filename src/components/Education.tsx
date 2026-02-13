"use client"


import React, { useEffect} from 'react';
import styles from '@/styles/Education.module.css';
import { Education as EducationType } from '@/types';
import { DATA } from '@/data/portfolioData';

export default function EducationSection() {

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

    const section = document.getElementById('education');
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
    <section id="education" className={styles.section}>
      <h3 className={`${styles.sectionTitle} reveal`}>
        <span className={styles.line}></span> Education
      </h3>

      <div className={styles.grid}>
        {DATA.education.map((edu: EducationType, index: number) => (
          <div 
            key={index} 
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <p className={styles.degree}>{edu.degree}</p>
              <span className={styles.year}>{edu.year}</span>
            </div>
            <p className={styles.school}>{edu.school}</p>
            {edu.location && (
              <p className={styles.location}>{edu.location}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

