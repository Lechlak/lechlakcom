export const About = () => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-500 to-sky-800 bg-clip-text text-transparent section-title">
          About Me
        </h2>
        <div className="glass-card p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-lg text-gray-300 mb-6">
                With over 15 years of experience in data analytics, development, and user interaction design, I specialize in transforming complex data into actionable insights. My expertise spans across full-stack development, statistical analysis, and machine learning implementations. Continuous improvement through clear
                communication has been central to my success in project management. I have developed a strong passion for analyzing processes comprehensively and implementing effective automation solutions. Throughout my career, I have successfully utilized methodologies such as LEAN, Agile, SCRUM, Waterfall, Kanban, and Six Sigma. As a dedicated problem solver, I believe that leveraging analytics is essential for driving progress and innovation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8">
              <div className="p-8">
              <div className="text-3xl font-bold text-cyan-500">15+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="p-8">
              <div className="text-3xl font-bold text-cyan-500">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="p-8">
              <div className="text-3xl font-bold text-cyan-500">30+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="p-8">
              <div className="text-3xl font-bold text-cyan-500">15+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            </div>
            </div>
            <div className="flex-1">
              <img 
                src="./andyprofile.jpg" 
                alt="About Andy Lechlak"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-400">15+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-cyan-400">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-400">30+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-cyan-400">15+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};