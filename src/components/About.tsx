
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

export const About = () => {
  const stats = [
    { value: "15+", label: "Years of experience", color: "text-teal-400" },
    { value: "10+", label: "Years married", color: "text-cyan-400" },
    { value: "3", label: "Children", color: "text-sky-400" },
    { value: "1", label: "Puppy", color: "text-blue-400" },
  ];

  return (
    <section className="relative">
      {/* Full section sparkles background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="aboutSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#38b2ac"
          speed={0.8}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent relative z-20"
          >
            Andy Lechlak
          </motion.h2>
        </div>
        
        <div className="glass-card p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-teal-500/10" />
          <div className="flex flex-col md:flex-row gap-12 items-center relative">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                Transforming complex data into actionable insights with over 15 years of experience. 
                Specializing in full-stack development, statistical analysis, and machine learning implementations. 
                Passionate about process optimization and innovative automation solutions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mt-12">
                 I'm an avid fan of video games, enjoy binge-watching TV shows, love taking long walks (indoors), and have a lifelong passion for Disney.
              </p>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src="./andyprofile.jpg" 
                alt="About Andy Lechlak"
                className="rounded-2xl w-full h-auto object-cover shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
