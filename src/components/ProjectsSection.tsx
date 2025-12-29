import { ExternalLink, Github, Users, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Online Platform for Managing and Tracking Student Projects',
    role: 'Team Lead',
    description: 'A comprehensive web-based platform designed to manage, track, and showcase student projects with intuitive dashboards and real-time progress monitoring.',
    technologies: ['Spring Boot', 'MySQL', 'REST APIs', 'JPA'],
    gradient: 'from-primary/20 to-primary/5',
    accent: 'primary',
  },
  {
    title: 'Student Result Management System',
    role: 'Team Member',
    description: 'Full-stack MERN application for managing student academic results with secure login functionality, grade tracking, and performance analytics.',
    technologies: ['ReactJS', 'MongoDB', 'Node.js', 'Express'],
    gradient: 'from-accent/20 to-accent/5',
    accent: 'accent',
  },
  {
    title: 'Secure Web Application Firewall',
    role: 'Team Member',
    description: 'HTTP traffic monitoring system implementing RSA encryption to enhance web application security and protect against common vulnerabilities.',
    technologies: ['Python', 'RSA Encryption', 'Network Security'],
    gradient: 'from-primary/20 to-accent/10',
    accent: 'primary',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              My Projects
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my technical skills and collaborative experience in software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const isAccent = project.accent === 'accent';
              
              return (
                <div
                  key={project.title}
                  className="group relative glass-card rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient header */}
                  <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <div className="absolute bottom-4 left-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${
                        project.role === 'Team Lead' 
                          ? 'bg-primary/90 text-primary-foreground' 
                          : 'bg-card/90 text-foreground border border-border/50'
                      }`}>
                        {project.role === 'Team Lead' ? <Users size={12} /> : <User size={12} />}
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <Github size={16} className="mr-1" />
                        Code
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
