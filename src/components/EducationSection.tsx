import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    institution: 'KL University',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2022 – 2026',
    grade: 'CGPA: 9.83',
    isCurrent: true,
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Intermediate',
    period: 'Completed',
    grade: 'CGPA: 9.77',
    isCurrent: false,
  },
  {
    institution: 'Naveena Vidyanikethan High School',
    degree: 'SSC (Secondary School Certificate)',
    period: 'Completed',
    grade: 'CGPA: 9.7',
    isCurrent: false,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              Education
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Academic Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My educational background that has shaped my technical foundation and analytical thinking.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={item.institution}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary md:-translate-x-1/2 z-10">
                    {item.isCurrent && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          item.isCurrent ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                        }`}>
                          <GraduationCap size={24} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                            {item.institution}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {item.degree}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                              <Calendar size={14} />
                              {item.period}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
                              <Award size={14} />
                              {item.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
