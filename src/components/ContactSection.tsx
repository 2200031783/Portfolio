import { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/pravallika-byreddy-b37089250/', color: 'hover:text-[#0A66C2]' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/2200031783', color: 'hover:text-foreground' },
  { name: 'LeetCode', icon: Code2, href: 'https://leetcode.com/u/kl_2200031783/', color: 'hover:text-[#FFA116]' },
  { name: 'CodeChef', icon: Code2, href: 'https://codechef.com/users/kl_2200031783', color: 'hover:text-[#5B4638]' },
  { name: 'HackerRank', icon: Code2, href: 'https://hackerrank.com/profile/h2200031783', color: 'hover:text-[#00EA64]' },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailjs = (await import('@emailjs/browser')).default;

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_swf9y6r',    // Your Service ID
        'template_5tmjwth',   // Your Template ID
        templateParams,
        'dUcehGZ_VAsuYoPeZ'  // Your Public Key
      );

      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Error!',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              Get in Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">pravallika@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Connect with Me
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${link.color}`}
                      >
                        <Icon size={18} />
                        <span className="text-sm font-medium">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <div className="p-6 glass-card rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Download My Resume
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                
                <a
                  href="https://drive.google.com/file/d/1WtHgQ5e5O4zm3NhaTGq_69U8zNnm132T/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto">
                    <span>Download Full Resume</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
