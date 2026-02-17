import { Terminal, Database, Layers, GraduationCap, PenTool } from 'lucide-react';

function About() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto space-y-20">
    
      <section className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-serif italic tracking-tight text-slate-900">
          The Engineer
        </h1>
        <p className="text-2xl text-[#454545] leading-relaxed max-w-3xl">
          Full Stack Developer specializing in **distributed systems** and **real-time architectures**. I build applications where performance meets reliability.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white/30 backdrop-blur-xl border border-white/40 p-10 rounded-[40px] shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#10B981]">
              <GraduationCap size={24} />
              <span className="font-mono text-sm uppercase tracking-widest">Academic Foundation</span>
            </div>
            <h2 className="text-3xl font-bold">M.Tech in Computer Science</h2>
            <p className="text-lg text-[#696969] leading-relaxed">
              My research focused on **Horizontally Scaled Real-Time Architectures**. I analyzed the trade-offs between latency and throughput in systems utilizing **Redis Pub/Sub** and WebSockets.
            </p>
          </div>
          <div className="pt-6 border-t border-white/20 mt-6 flex gap-4">
             <span className="text-xs font-bold px-3 py-1 bg-white/50 rounded-lg">Thesis: Scalability Analysis</span>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-10 rounded-[40px] flex flex-col justify-between shadow-xl">
          <PenTool className="text-[#10B981]" />
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic">The Writer's Perspective</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Beyond the logic, I find inspiration in the works of Dostoevsky. Writing prose helps me communicate complex technical concepts with clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <TechCard 
          icon={<Terminal size={20} />} 
          title="Backend & Logic" 
          skills="Node.js, TypeScript, Express, WebSockets, WebRTC"
        />
        <TechCard 
          icon={<Database size={20} />} 
          title="Data Systems" 
          skills="PostgreSQL, MongoDB, Redis Caching"
        />
        <TechCard 
          icon={<Layers size={20} />} 
          title="Full Stack / DevOps" 
          skills="React, MERN, Docker, System Design"
        />
      </section>
      <section className="bg-white/10 border border-white/20 p-12 rounded-[40px] text-center space-y-6">
        <h2 className="text-3xl font-bold">Solving for Scale</h2>
        <p className="text-lg text-[#454545] max-w-2xl mx-auto">
          I am currently focused on building robust systems that handle real-time data flow. My goal is to work on infrastructure that impacts millions of users.
        </p>
      </section>
    </div>
  );
}

const TechCard = ({ icon, title, skills }: { icon: any, title: string, skills: string }) => (
  <div className="p-8 bg-white/20 backdrop-blur-md rounded-[32px] border border-white/30 space-y-4">
    <div className="p-3 bg-white/50 w-fit rounded-2xl text-slate-800">{icon}</div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-[#696969] font-medium leading-relaxed">{skills}</p>
  </div>
);

export default About;