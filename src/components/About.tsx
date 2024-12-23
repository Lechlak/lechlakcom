import { motion } from "framer-motion";

export const About = () => {
  const stats = [
    { value: "15+", label: "Years Experience", color: "text-[#8B5CF6]" },
    { value: "10+", label: "Years married", color: "text-[#D946EF]" },
    { value: "3", label: "Children", color: "text-[#F97316]" },
    { value: "1", label: "Puppy", color: "text-[#0EA5E9]" },
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <div className="glass-card p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
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