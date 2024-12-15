import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="pb-32">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <Card className="glass-card max-w-2xl mx-auto">
        <CardContent className="p-8">
          <p className="text-center text-lg text-gray-300 mb-8">
            Reach out if you're interested in developing and enhancing engineering workflows together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <Github className="h-8 w-8 mb-2 text-purple-400" />
              <span className="text-gray-300">GitHub</span>
            </a>
            <a
              href="https://discord.com/users/yourid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <MessageSquare className="h-8 w-8 mb-2 text-purple-400" />
              <span className="text-gray-300">Discord</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <Mail className="h-8 w-8 mb-2 text-purple-400" />
              <span className="text-gray-300">Email</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};