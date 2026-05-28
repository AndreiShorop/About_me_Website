import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Rocket, BookOpen, Coffee } from 'lucide-react'

const highlights = [
  { icon: <Code2 size={20} className="text-primary" />, label: 'Python Backend' },
  { icon: <Rocket size={20} className="text-secondary" />, label: 'FastAPI & Docker' },
  { icon: <BookOpen size={20} className="text-accent" />, label: 'Always Learning' },
  { icon: <Coffee size={20} className="text-yellow-400" />, label: 'Fuelled by Coffee' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Background orb */}
      <div className="orb w-96 h-96 top-0 right-0 opacity-10" style={{ background: 'rgba(99,102,241,0.3)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Get to know me</span>
          <h2 className="section-title mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary-gradient rounded-full mx-auto mt-3" />
        </motion.div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Avatar / visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #22d3ee, #6366f1)',
                  opacity: 0.3,
                  filter: 'blur(8px)',
                }}
              />
              {/* Avatar circle */}
              <div className="relative w-56 h-56 rounded-full gradient-border flex items-center justify-center glass-card-strong">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                  <span className="text-7xl font-black gradient-text select-none">AS</span>
                </div>
              </div>

              {/* Floating badge — Python */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-6 glass-card px-3 py-1.5 rounded-xl text-xs font-mono text-primary border-primary/30 shadow-lg"
              >
                🐍 Python
              </motion.div>

              {/* Floating badge — FastAPI */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -left-8 glass-card px-3 py-1.5 rounded-xl text-xs font-mono text-green-400 border-green-500/20 shadow-lg"
              >
                ⚡ FastAPI
              </motion.div>

              {/* Floating badge — Docker */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -right-14 glass-card px-3 py-1.5 rounded-xl text-xs font-mono text-blue-400 border-blue-400/20 shadow-lg"
              >
                🐳 Docker
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-textPrimary mb-4">
              Hey, I'm <span className="gradient-text">Andrii</span> 👋
            </h3>
            <div className="space-y-4 text-textMuted leading-relaxed">
              <p>
                I'm a motivated <span className="text-accent font-medium">Junior Python Developer</span> and
                Azubi (apprentice) with a strong passion for backend development and modern software
                engineering. I'm currently building my skills in Python, FastAPI, Docker, and REST APIs
                while working on real-world projects that solve actual problems.
              </p>
              <p>
                My journey started with curiosity — and quickly turned into a deep love for writing clean,
                efficient code. I enjoy exploring how systems work under the hood, from containerised
                microservices to database-driven APIs. Every project I build pushes me further.
              </p>
              <p>
                I thrive in collaborative environments and am actively seeking an{' '}
                <span className="text-primary font-medium">internship or Azubi position</span> where I can
                contribute, grow, and become part of a team that ships great software.
              </p>
            </div>

            {/* Highlight tags */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="glass-card flex items-center gap-3 px-4 py-3 rounded-xl hover:border-primary/30 transition-all duration-300"
                >
                  {h.icon}
                  <span className="text-sm font-medium text-textPrimary">{h.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/AndreiShorop"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 btn-primary"
            >
              View My GitHub →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
