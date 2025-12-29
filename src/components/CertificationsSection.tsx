import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    description: 'Foundational understanding of AWS Cloud services, architecture, and best practices.',
    color: 'primary',
  },
  {
    title: 'Red Hat Certified Enterprise Application Developer',
    issuer: 'Red Hat – EX183',
    year: '2024',
    description: 'Expertise in developing and deploying enterprise Java applications.',
    color: 'accent',
  },
  {
    title: 'Juniper Networks Certified Associate',
    issuer: 'Juniper – JNCIA-Junos',
    year: '2025',
    description: 'Networking fundamentals and Junos OS configuration expertise.',
    color: 'primary',
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              Certifications
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Professional Credentials
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized certifications that validate my technical knowledge and professional commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const isAccent = cert.color === 'accent';
              
              return (
                <div
                  key={cert.title}
                  className="group glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 ${
                    isAccent ? 'bg-accent' : 'bg-primary'
                  }`} />
                  
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl mb-4 ${
                      isAccent ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                    }`}>
                      <Award size={24} />
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {cert.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {cert.year}
                      </span>
                      <button className={`p-2 rounded-lg transition-colors ${
                        isAccent 
                          ? 'hover:bg-accent/10 text-accent' 
                          : 'hover:bg-primary/10 text-primary'
                      }`}>
                        <ExternalLink size={16} />
                      </button>
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
