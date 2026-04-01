import { ArrowRight, BookOpen, Cpu, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#87CEEB] min-h-screen text-[#333333] selection:bg-white/30 transition-colors duration-500">
      <main className="max-w-5xl mx-auto pt-44 pb-20 px-6 space-y-32">
        <section className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="text-left space-y-8">
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-slate-800 font-medium">
                Hey! I am <span className="font-bold">Md Enayat Ansari</span>
              </p>
              <h1 className="text-5xl md:text-7xl font-serif italic tracking-tight text-slate-900">
                A Full Stack Developer
              </h1>
            </div>

            <div className="space-y-1">
              <p className="text-2xl md:text-3xl text-[#454545] font-light leading-tight">
                Engineering scalable systems with logic and
              </p>
              <p className="text-2xl md:text-3xl text-[#454545] font-serif italic leading-tight">
                crafting narratives with heart.
              </p>
            </div>

            <div className="flex gap-4 pt-6">
              <button className="group relative flex items-center justify-center overflow-hidden bg-[#10B981] text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-500 ease-in-out hover:bg-[#059669] hover:-translate-y-1">
                {/* The Icon (Optional, remove if not needed) */}
                {/* <Phone size={18} className="mr-2 shrink-0" /> */}

                <div className="relative flex flex-col items-center">
                  {/* 1. Ghost Spacer: Forces the button to expand horizontally on hover */}
                  <span className="invisible block h-0 max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 group-hover:max-w-[120px]">
                    9074932835
                  </span>

                  {/* 2. Original Text: Slides Up and out */}
                  <span className="inline-block transition-all duration-500 group-hover:-translate-y-12">
                    Contact
                  </span>

                  {/* 3. The Number: Slides Up from below and fades in */}
                  <span className="absolute top-full whitespace-nowrap opacity-0 transition-all duration-500 group-hover:-translate-y-[2.1rem] group-hover:opacity-100">
                    9074932835
                  </span>
                </div>
              </button>
              <button
                className="bg-white/80 backdrop-blur-md px-8 py-3 rounded-2xl font-semibold shadow-sm hover:bg-white border border-white/40 transition-all flex items-center gap-2"
                onClick={() => navigate("/projects")}
              >
                View My Work <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
        <section id="projects" className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white/30 backdrop-blur-xl border border-white/40 p-10 md:p-16 rounded-[40px] shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/50 rounded-lg">
                <Cpu size={20} className="text-[#696969]" />
              </div>
              <span className="text-sm font-mono uppercase tracking-[0.2em] text-[#696969]">
                M.Tech Thesis
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Real-Time Scalability with Redis
            </h2>
            <p className="text-xl text-[#454545] leading-relaxed mb-10 max-w-3xl">
              A deep dive into latency optimization for horizontally scaled
              communication systems. Implementing Redis Pub/Sub to manage state
              across distributed nodes.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Redis", "Node.js", "WebSockets", "System Design"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 bg-white/40 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            <button className="group flex items-center gap-2 text-sm font-bold border-b-2 border-black pb-1 hover:gap-4 transition-all">
              Read Research Paper <ArrowRight size={16} />
            </button>
          </div>
        </section>
        <section id="about" className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-10 rounded-[40px] space-y-6">
            <Sparkles className="text-[#696969]" />
            <h3 className="text-2xl font-bold">Engineering Logic</h3>
            <p className="text-lg text-[#454545] leading-relaxed">
              Applying rigorous computer science fundamentals to build
              fault-tolerant, high-throughput MERN applications.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-10 rounded-[40px] space-y-6">
            <BookOpen className="text-[#696969]" />
            <h3 className="text-2xl font-bold font-serif italic">
              Literary Soul
            </h3>
            <p className="text-lg text-[#454545] leading-relaxed">
              Exploring existentialism through the lens of Dostoevsky and
              Gibran, finding the human story within the code.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
