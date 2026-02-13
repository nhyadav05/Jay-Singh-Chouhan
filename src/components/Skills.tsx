"use client"

import React, { useRef } from 'react';
import styles from '@/styles/Skills.module.css';
import { DATA } from '@/data/portfolioData';

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section id="skills" className={styles.section} ref={sectionRef}>
            <h3 className={`${styles.sectionTitle} reveal`}>
                <span className={styles.line}></span>Technical Stack
            </h3>
            <div className={`${styles.glassCard} ${styles.skillsArea}`}>
                <div className={styles.skillsList}>
                    {DATA.skills.map((skill: string, index: number) => (
                        <span 
                            key={index} 
                            className={styles.skillTag}
                            style={{ '--delay': `${index * 0.05}s` } as React.CSSProperties}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

