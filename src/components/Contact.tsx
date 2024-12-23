import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, MessageSquare } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Lechlak",
      color: "group-hover:text-sky-300"
    },
    {
      icon: MessageSquare,
      label: "Discord",
      href: "https://discord.com/users/225670301084680194",
      color: "group-hover:text-sky-500"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:andy@lechlak.com",
      color: "group-hover:text-sky-700"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent" />
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>
      <Card className="glass-card max-w-2xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
        <CardContent className="p-12 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center mb-12"
          >
            <Avatar className="w-32 h-32 mb-6 ring-4 ring-purple-500/20">
              <AvatarImage src="./andywdw.jpg" alt="Profile" className="object-cover" />
              <AvatarFallback>DA</AvatarFallback>
            </Avatar>
            <p className="text-center text-xl text-gray-300 max-w-lg">
              Let's collaborate on developing and enhancing engineering workflows together.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <method.icon className={`h-10 w-10 mb-4 transition-colors duration-300 text-gray-400 ${method.color}`} />
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