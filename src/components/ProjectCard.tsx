"use client";
import { useState } from 'react';
import { Project } from '@/types';
import { ChevronDown } from 'lucide-react';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div 
            className={styles.card} 
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
        >
            {/* Parent must be relative for 'fill' to work */}
            {/* <div className={styles.imageWrapper} style={{ position: 'relative' }}>
                {project.link ? (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.imageLink}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            // fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </a>
                ) : (
                    <img
                        src={project.img}
                        alt={project.title}
                        // fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                    />
                )}
            </div> */}

            <div className={styles.content}>
                {/* Fixed: category property now exists on Project */}
                <span className={styles.category}>{project.category}</span>
                <h4 className={styles.title}>{project.title}</h4>

                <div className={styles.techTags}>
                    {project.tech.map(t => (
                        <span key={t}>{t}</span>
                    ))}
                </div>

                <p className={`${styles.description} ${isExpanded ? styles.expanded : styles.collapsed}`}>
                    {project.fullDesc}
                </p>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={styles.expandBtn}
                >
                    {isExpanded ? 'Show Less' : 'Read More'}
                    <ChevronDown
                        size={14}
                        className={isExpanded ? styles.rotate : ''}
                    />
                </button>
            </div>
        </div>
    );
}