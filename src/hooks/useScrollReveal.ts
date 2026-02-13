"use client";

import { useEffect, useRef } from "react";

export default function useScrollReveal() {
  const revealElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger"
    );

    elements.forEach((el) => {
      observer.observe(el);
      revealElements.current.push(el as HTMLElement);
    });

    return () => {
      revealElements.current.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return revealElements;
}

