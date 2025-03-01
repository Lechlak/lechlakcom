
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, MessageSquare } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Lechlak",
      color: "group-hover:text-sky-500"
    },
    {
      icon: MessageSquare,
      label: "Resume",
      href: "https://www.lechlak.com/resume.pdf",
      color: "group-hover:text-sky-500"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:andrewlechlak@gmail.com",
      color: "group-hover:text-sky-500"
    }
  ];

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 from-sky-500/10 via-transparent to-transparent" />
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>
      <Card className="glass-card max-w-2xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-teal-500/10" />
        <BackgroundBeams className="opacity-60" />
        <CardContent className="p-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center mb-12"
          >
            <Avatar className="w-32 h-32 mb-6 ring-4 ring-sky-500/20">
              <AvatarImage src="./andywdw.jpg" alt="Profile" className="object-cover" />
              <AvatarFallback>DA</AvatarFallback>
            </Avatar>
            <p className="text-center text-xl text-gray-300 max-w-lg">
              Let's collaborate on developing and enhancing engineering workflows together.
            </p>
          </motion.div>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
              >
                <method.icon className={`h-10 w-10 mb-4 transition-colors duration-300 text-gray-500 ${method.color}`} />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {method.label}
                </span>
              </motion.a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
