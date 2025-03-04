
import { HeroBanner } from "@/components/HeroBanner";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { WorkflowAnimation } from "@/components/WorkflowAnimation";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />
      <div id="hero">
        <HeroBanner />
      </div>
      
      <main className="container mx-auto px-4 space-y-32 py-16">
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        
        {/* Workflow section - Full width outside container */}
        <div className="w-full">
          <section id="workflow" className="py-8 relative w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Data Process Flow
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Effortlessly transition from data collection to organized, automated results with our streamlined workflow system.
              </p>
            </div>
            <WorkflowAnimation />
          </section>
        </div>
        
        <Portfolio />
        <div id="awards">
          <Awards />
        </div>
        <Contact />
      </main>
    </div>
  );
};

export default Index;
