export const About = () => {
  return (
    <section className="relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="glass-card p-8">
          <p className="text-lg text-gray-300 mb-6">
            With over a decade of experience in data analytics and web development, I specialize in transforming complex data into actionable insights. My expertise spans across full-stack development, statistical analysis, and machine learning implementations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-400">10+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-400">30+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-400">15+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};