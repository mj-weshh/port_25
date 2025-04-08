
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-8 bg-john-dark-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new projects, opportunities, or partnerships. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-john-blue/20 flex items-center justify-center">
                  <Mail className="text-john-blue" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:wawerumuhura@gmail.com" className="text-john-blue hover:underline">
                    wawerumuhura@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-john-green/20 flex items-center justify-center">
                  <MessageSquare className="text-john-green" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Social Media</h4>
                  <p className="text-gray-400">
                    Feel free to connect with me on LinkedIn or other platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-john-light-gray p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="bg-john-dark-gray border-gray-700 focus:border-john-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-john-dark-gray border-gray-700 focus:border-john-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  required
                  className="bg-john-dark-gray border-gray-700 focus:border-john-blue"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, question, or just say hi!"
                  required
                  rows={5}
                  className="bg-john-dark-gray border-gray-700 focus:border-john-blue resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full bg-john-blue hover:bg-john-blue/90">
                <Send className="mr-2" size={16} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
