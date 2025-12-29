import React from 'react';
import { ArrowDown, Github, Linkedin, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow stagger-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              Welcome to my Portfolio
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-up stagger-1 font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Byreddy Pravallika</span>
          </h1>

          <p className="opacity-0 animate-fade-up stagger-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Computer Science & Engineering Student | Full-Stack Development | Cyber Security
          </p>

          <div className="opacity-0 animate-fade-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#projects">
              <Button variant="hero" size="lg">
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="hero-outline" size="lg">
                Contact Me
              </Button>
            </a>
          </div>

          <div className="opacity-0 animate-fade-up stagger-4 flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/pravallika-byreddy-b37089250/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/2200031783"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://leetcode.com/u/kl_2200031783/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              aria-label="LeetCode"
            >
              <Code2 size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-float"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};
