import { Code, Database, Cloud, Wrench, Users, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['C', 'Java', 'Python'],
    color: 'primary',
  },
  {
    title: 'Frameworks & Technologies',
    icon: Globe,
    skills: ['Spring Boot', 'MERN Stack', 'JPA'],
    color: 'accent',
  },
  {
    title: 'Databases & Cloud',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'AWS Services'],
    color: 'primary',
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['VS Code', 'PyCharm', 'Eclipse IDE', 'CodeReady Studio'],
    color: 'accent',
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Team Management', 'Attentive Learner', 'Problem Solving'],
    color: 'primary',
  },
  {
    title: 'Areas of Interest',
    icon: Cloud,
    skills: ['Web Development', 'Cyber Security', 'Cloud Computing'],
    color: 'accent',
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              My Skills
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of programming languages, frameworks, and technologies that I've developed through coursework and projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isAccent = category.color === 'accent';
              
              return (
                <div
                  key={category.title}
                  className="group glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${
                    isAccent ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                  }`}>
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                          isAccent
                            ? 'bg-accent/10 text-accent hover:bg-accent/20'
                            : 'bg-primary/10 text-primary hover:bg-primary/20'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
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
