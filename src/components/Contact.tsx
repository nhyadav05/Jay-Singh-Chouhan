import React from 'react';
import styles from '@/styles/Contact.module.css';
import { DATA } from '@/data/portfolioData';
import Image from 'next/image';

const socialIcons: Record<string, string> = {
  linkedin: '/linkedin.svg',
  github: '/github.svg',
  gmail: '/gmail.svg',
  instagram: '/instagram.svg',
  twitter: '/twitter.svg'
};

export default function Contact() {
  
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h3 className={`${styles.sectionTitle} reveal`}>
          <span className={styles.line}></span> Get In Touch
        </h3>
        
        <div className={styles.contactWrapper}>
          <div className={`${styles.textContent} reveal`}>
            <h2 className={styles.heading}>
              Let&apos;s Connect & Create
              <span className={styles.gradientText}> Together</span>
            </h2>
            <p className={styles.description}>
              I&apos;m always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision. Feel free to reach out 
              through any of these platforms!
            </p>
          </div>

          <div className={`${styles.socialLinks} reveal-stagger`}>
            {DATA.socialLinks.map((social, index) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className={styles.iconWrapper}>
                  <Image
                    src={socialIcons[social.platform] || '/globe.svg'}
                    alt={social.label}
                    width={24}
                    height={24}
                    className={styles.socialIcon}
                  />
                </div>
                <span className={styles.socialLabel}>{social.label}</span>
                <div className={styles.arrowWrapper}>
                  <span className={styles.arrow}>→</span>
                </div>
              </a>
            ))}
          </div>

          {/* <div className={styles.footer}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} {DATA.name}. Built with passion.
            </p>
          </div> */}
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
    </section>
  );
}

