import { ArrowUpRight, Github,Cpu, Globe, } from 'lucide-react';

const projectData = [
  {
    id: 1,
    title: "QuickChat",
    category: "System Design / Real-time",
    description: "A high-concurrency chat engine optimized for horizontal scaling. Implemented Redis Pub/Sub to manage message broadcasting across multiple Node.js instances, reducing latency in distributed environments.",
    tech: ["MERN", "Socket.io", "Redis", "Docker"],
    type: "featured"
  },
  {
    id: 2,
    title: "Crypto Price Monitor",
    category: "Backend / Performance",
    description: "Real-time monitoring system with high-frequency data fetching. Optimized database throughput using PostgreSQL indexing and Redis caching layer to handle rapid price fluctuations without bottlenecks.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis"],
    type: "featured"
  },
  {
    id: 3,
    title: "Bookit",
    category: "Full Stack",
    description: "A comprehensive booking platform with a custom availability engine and secure user authentication flow.",
    tech: ["React", "Express", "MongoDB", "Redux"],
    type: "standard"
  },
  {
    id: 4,
    title: "Ecom-cart",
    category: "Frontend Architecture",
    description: "Complex e-commerce state management including persistent carts, dynamic filtering, and optimized image rendering.",
    tech: ["React", "Tailwind CSS", "Zustand"],
    type: "standard"
  }
];

function Projects() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto space-y-20">
      <header className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-serif italic tracking-tight text-slate-900">
          Selected Works
        </h1>
        <p className="text-xl text-[#696969] max-w-2xl leading-relaxed">
          From academic research in distributed systems to building high-performance 
          full-stack applications.
        </p>
      </header>

      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <Cpu className="text-[#10B981]" />
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#696969]">System Design & Research</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projectData.filter(p => p.type === 'featured').map((project) => (
            <div key={project.id} className="group relative bg-white/30 backdrop-blur-xl border border-white/40 p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <span className="text-xs font-mono text-[#10B981] font-bold uppercase tracking-tighter">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-[#10B981] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#454545] text-lg leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/50 border border-white/20 rounded-full text-[10px] font-bold uppercase text-[#696969]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <button className="p-4 bg-white/80 rounded-2xl hover:bg-white shadow-sm transition-all">
                    <Github size={20} />
                  </button>
                  <button className="p-4 bg-black text-white rounded-2xl hover:scale-105 transition-all">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <Globe className="text-[#696969]" />
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#696969]">Full Stack Applications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.filter(p => p.type === 'standard').map((project) => (
            <div key={project.id} className="bg-white/20 backdrop-blur-md border border-white/30 p-8 rounded-[32px] hover:bg-white/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-[#454545] leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                 {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono font-bold text-[#696969] uppercase tracking-tighter bg-white/40 px-2 py-1 rounded">
                      {t}
                    </span>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Projects;