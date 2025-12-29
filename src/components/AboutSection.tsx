import { User, MapPin, GraduationCap, Target } from "lucide-react";
import profileImage from "./pravallika.jpg"; // adjust path if needed

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Get to Know Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Area */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6 transition-transform hover:rotate-3" />
                
                <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      
                      {/* IMAGE REPLACED HERE */}
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg transition-transform duration-300 hover:scale-105">
                        <img
                          src={profileImage}
                          alt="Byreddy Pravallika"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                        Byreddy Pravallika
                      </h3>
                      <p className="text-muted-foreground">CSE Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated Computer Science and Engineering student at KL University with a strong passion for
                <span className="text-foreground font-medium"> Full-Stack Development</span> and
                <span className="text-foreground font-medium"> Cyber Security</span>. My academic journey has equipped
                me with a solid foundation in programming and modern technologies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                As an organized and dependable learner, I thrive in collaborative environments and have demonstrated
                strong teamwork abilities through various academic projects. I am eager to apply my skills and continue
                growing as a technology professional.
              </p>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 glass-card rounded-xl">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium text-foreground">B.Tech CSE</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 glass-card rounded-xl">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">University</p>
                    <p className="font-medium text-foreground">KL University</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 glass-card rounded-xl">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Target size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Focus</p>
                    <p className="font-medium text-foreground">Full-Stack Dev</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 glass-card rounded-xl">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-medium text-foreground">Open to Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
