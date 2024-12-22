import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, MessageSquare } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Contact = () => {
  return (
    <section id="contact" className="pb-32">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <Card className="glass-card max-w-2xl mx-auto">
        <CardContent className="p-8">
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Profile" className="object-cover" />
              <AvatarFallback>DA</AvatarFallback>
            </Avatar>
            <p className="text-center text-lg text-gray-300">
              Reach out if you're interested in developing and enhancing engineering workflows together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://github.com/Lechlak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <Github className="h-8 w-8 mb-2 text-cyan-400" />
              <span className="text-gray-300">GitHub</span>
            </a>
            <a
              href="https://discord.com/users/225670301084680194"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <MessageSquare className="h-8 w-8 mb-2 text-cyan-400" />
              <span className="text-gray-300">Discord</span>
            </a>
            <a
              href="mailto:andy@lechlak.com"
              className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <Mail className="h-8 w-8 mb-2 text-cyan-400" />
              <span className="text-gray-300">Email</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};